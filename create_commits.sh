#!/bin/bash

# Initial setup
git add .
git commit -m "🚀 Initial setup: Next.js portfolio with TypeScript and Tailwind CSS"

# UI Components
git add components/
git commit -m "🎨 Added UI components: Header, Footer, and Navigation"

# Pages
git add app/
git commit -m "📱 Created main pages: Home, Projects, Experience, and Contact"

# Styling
git add app/globals.css tailwind.config.ts
git commit -m "💅 Added custom styling and Tailwind configuration"

# API Integration
git add app/api/
git commit -m "🔌 Implemented contact form API with email functionality"

# Assets
git add images/ public/
git commit -m "🖼️ Added project images and public assets"

# Documentation
git add README.md
git commit -m "📝 Updated documentation with setup instructions"

# Final touches
git add .
git commit -m "✨ Final polish: Code cleanup and optimization" 