# Transportuok.lt Makefile - Automated commands (NO CONFIRMATION)

.PHONY: serve install setup backup commit clean help

# Load auto-confirm environment
SHELL := /bin/bash
export DEBIAN_FRONTEND := noninteractive

# Default target
help:
	@echo "🚀 Transportuok.lt Project Commands:"
	@echo "  make serve     - Start HTTP server on port 3000"
	@echo "  make install   - Install development tools"
	@echo "  make setup     - Setup project environment"
	@echo "  make backup    - Create project backup"
	@echo "  make commit    - Auto commit changes"
	@echo "  make clean     - Clean temporary files"
	@echo "  make restart   - Restart server"

# Start development server
serve:
	@echo "🚀 Starting server..."
	@pkill -f "python3 -m http.server 3000" 2>/dev/null || true
	@python3 -m http.server 3000 > logs/server.log 2>&1 &
	@echo "✅ Server started at http://localhost:3000"
	@echo "📋 View logs: tail -f logs/server.log"

# Install development tools automatically
install:
	@echo "📦 Installing tools..."
	@sudo apt update -qq && sudo apt install -y tree jq curl wget nodejs npm
	@echo "✅ Tools installed"

# Setup project environment
setup:
	@echo "🔧 Setting up project..."
	@source .autoconfirm.sh 2>/dev/null || true
	@mkdir -p logs backups .vscode
	@chmod -R 755 assets images 2>/dev/null || true
	@echo "✅ Project setup complete"

# Create backup with timestamp
backup:
	@echo "💾 Creating backup..."
	@mkdir -p backups
	@tar -czf backups/backup_$$(date +%Y%m%d_%H%M%S).tar.gz --exclude=backups --exclude=logs --exclude=node_modules .
	@echo "✅ Backup created in backups/"

# Auto commit changes
commit:
	@echo "📝 Committing changes..."
	@git add .
	@git commit -m "Auto commit: $$(date)" || echo "No changes to commit"
	@echo "✅ Changes committed"

# Clean temporary files
clean:
	@echo "🧹 Cleaning..."
	@rm -f server.log *.tmp
	@rm -rf logs/*.log
	@echo "✅ Cleaned temporary files"

# Restart server
restart:
	@echo "🔄 Restarting server..."
	@pkill -f "python3 -m http.server 3000" 2>/dev/null || true
	@sleep 1
	@python3 -m http.server 3000 > logs/server.log 2>&1 &
	@echo "✅ Server restarted at http://localhost:3000"
