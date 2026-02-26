import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  autoRefreshed: boolean;
}

/**
 * Detects whether an error is caused by a stale JS chunk after a new Netlify deploy.
 * Vite uses content-hash filenames – old chunks 404 after a new deploy,
 * which surfaces as a SyntaxError ("Unexpected token '<'") or ChunkLoadError.
 */
function isChunkLoadError(error: Error): boolean {
  const msg = error.message || '';
  const name = error.name || '';
  const stack = error.stack || '';
  return (
    name === 'ChunkLoadError' ||
    msg.includes('Failed to fetch dynamically imported module') ||
    msg.includes('Importing a module script failed') ||
    msg.includes('Unable to preload CSS') ||
    // When Netlify returns index.html for unknown chunk → "<" is unexpected in JS
    (msg.includes("Unexpected token '<'") && stack.includes('import')) ||
    msg.includes('dynamically imported module') ||
    msg.includes('Loading chunk') ||
    msg.includes('Loading CSS chunk')
  );
}

const CHUNK_REFRESH_KEY = 'chunk_refresh_attempted';

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    autoRefreshed: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // If it's a chunk load error AND we haven't already auto-refreshed,
    // trigger a transparent page reload instead of showing the error UI
    if (isChunkLoadError(error)) {
      const alreadyRefreshed = sessionStorage.getItem(CHUNK_REFRESH_KEY);
      if (!alreadyRefreshed) {
        sessionStorage.setItem(CHUNK_REFRESH_KEY, '1');
        // Signal that we want to auto-refresh
        return { hasError: true, error, autoRefreshed: false };
      }
    }
    return { hasError: true, error, autoRefreshed: false };
  }

  public componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    // Auto-reload for chunk errors (silently recovers for 99% of users)
    if (isChunkLoadError(error)) {
      const alreadyRefreshed = sessionStorage.getItem(CHUNK_REFRESH_KEY);
      if (!alreadyRefreshed) {
        sessionStorage.setItem(CHUNK_REFRESH_KEY, '1');
        // Hard reload to fetch fresh index.html and new chunks
        window.location.reload();
        return;
      }
      // If we already tried once, clear the flag and show the user UI
      sessionStorage.removeItem(CHUNK_REFRESH_KEY);
    }

    // Report non-chunk errors to GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'js_error', {
        error_name: error.name,
        error_message: error.message.slice(0, 200)
      });
    }
  }

  private handleRefresh = () => {
    sessionStorage.removeItem(CHUNK_REFRESH_KEY);
    window.location.reload();
  };

  private handleGoHome = () => {
    sessionStorage.removeItem(CHUNK_REFRESH_KEY);
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      // If it's a chunk error, we're already reloading – show a minimal indicator
      if (this.state.error && isChunkLoadError(this.state.error)) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="animate-spin w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-600 text-sm">Atnaujinama... Prašome palaukti.</p>
            </div>
          </div>
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Atsiprašome, įvyko klaida
            </h1>
            <p className="text-gray-600 mb-6">
              Bandykite atnaujinti puslapį. Jei problema išlieka, susisiekite su mumis.
            </p>
            <div className="space-y-4">
              <button
                onClick={this.handleRefresh}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Atnaujinti puslapį
              </button>
              <button
                onClick={this.handleGoHome}
                className="block w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Grįžti į pradžią
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;