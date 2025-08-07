#!/bin/bash

# Load auto-confirm environment
source "$(dirname "$0")/../.autoconfirm.sh" 2>/dev/null || true

# Auto-install common development tools
install_dev_tools() {
    echo "Installing development tools..."
    sudo apt update -qq
    sudo apt install -y tree jq curl wget git nodejs npm python3-pip
    npm install -g http-server live-server
    echo "✅ Development tools installed"
}

# Start server without confirmation
start_server() {
    PORT=${1:-3000}
    echo "🚀 Starting server on port $PORT..."
    
    # Kill existing server if running
    pkill -f "python3 -m http.server $PORT" 2>/dev/null
    
    # Start new server in background
    python3 -m http.server $PORT > server.log 2>&1 &
    echo "✅ Server started at http://localhost:$PORT"
    echo "📋 Logs: tail -f server.log"
}

# Quick project setup
setup_project() {
    echo "🔧 Setting up project..."
    
    # Fix file permissions
    chmod -R 755 .
    
    # Create logs directory
    mkdir -p logs
    
    # Install Node dependencies if package.json exists
    if [ -f "package.json" ]; then
        npm install --silent
    fi
    
    echo "✅ Project setup complete"
}

# Quick file operations with auto-confirm
quick_backup() {
    BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    cp -r . "$BACKUP_DIR/" 2>/dev/null
    echo "✅ Backup created: $BACKUP_DIR"
}

# Git operations without prompts
auto_commit() {
    MESSAGE=${1:-"Auto commit $(date)"}
    git add .
    git commit -m "$MESSAGE"
    echo "✅ Changes committed: $MESSAGE"
}

# Run function based on parameter
case "$1" in
    "install") install_dev_tools ;;
    "serve") start_server $2 ;;
    "setup") setup_project ;;
    "backup") quick_backup ;;
    "commit") auto_commit "$2" ;;
    *) 
        echo "Usage: $0 {install|serve|setup|backup|commit}"
        echo "  install  - Install development tools"
        echo "  serve    - Start HTTP server (port optional)"
        echo "  setup    - Setup project environment"  
        echo "  backup   - Create project backup"
        echo "  commit   - Auto git commit"
        ;;
esac
