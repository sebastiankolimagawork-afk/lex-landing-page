#!/bin/bash

# Lex Landing Page - Git Setup Script
# This script initializes git and pushes to GitHub

echo "🚀 Setting up Lex Landing Page repository..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Lex landing page"

# Prompt for GitHub repository URL
echo ""
echo "🔗 Enter your GitHub repository URL:"
echo "   (e.g., https://github.com/sebastiankolimagowork-afk/lex-landing-page.git)"
read -p "Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No repository URL provided. Exiting..."
    exit 1
fi

# Add remote
echo "🔗 Adding remote repository..."
git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Success! Your landing page is now on GitHub!"
echo ""
echo "📋 Next steps:"
echo "   1. Go to https://vercel.com"
echo "   2. Click 'New Project'"
echo "   3. Import your GitHub repository"
echo "   4. Click 'Deploy'"
echo ""
echo "📖 See DEPLOYMENT.md for detailed deployment instructions"
