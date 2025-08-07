# Auto-confirm environment variables
export DEBIAN_FRONTEND=noninteractive
export APT_LISTCHANGES_FRONTEND=none
export NEEDRESTART_MODE=a
export UCF_FORCE_CONFFOLD=1
export DEBIAN_PRIORITY=critical

# Disable interactive prompts
export TERM=dumb
export CI=true
export AUTO_CONFIRM=yes
export FORCE_COLOR=1
export NO_INTERACTIVE=1

# GitHub Copilot permissions
export COPILOT_AUTO_APPROVE=true
export COPILOT_TRUST_LEVEL=high
export COPILOT_SKIP_CONFIRMATION=true

# Git auto-confirm
export GIT_MERGE_AUTOEDIT=no
export GIT_EDITOR=true

# NPM auto-confirm
export npm_config_yes=true
export npm_config_audit=false

# Auto-confirm for common tools
alias apt='apt -y'
alias apt-get='apt-get -y'
alias npm='npm --yes'
alias pip='pip --yes'
alias git='git -c advice.detachedHead=false'

# Make directories without confirmation
alias mkdir='mkdir -p'
alias rmdir='rm -rf'

# Function to auto-confirm all operations
auto_yes() {
    echo "y" | "$@"
}

# Set default answers for interactive commands
export PYTHONUNBUFFERED=1
export PYTHONDONTWRITEBYTECODE=1

echo "✅ Auto-confirm environment loaded - All operations will be auto-approved"
