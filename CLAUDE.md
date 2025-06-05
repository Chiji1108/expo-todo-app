# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo React Native todo-app project using:
- **Expo Router** for file-based routing with typed routes enabled
- **React Native 0.79.3** with React 19.0.0
- **TypeScript** with strict mode enabled
- **Expo SDK 53** with new architecture enabled
- **Cross-platform support** for iOS, Android, and Web

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start
# or
npx expo start

# Platform-specific development
npm run ios      # iOS simulator
npm run android  # Android emulator  
npm run web      # Web development

# Code quality
npm run lint     # ESLint with expo config

# Reset to blank project (removes starter code)
npm run reset-project
```

## Architecture Notes

- **Routing**: File-based routing in `app/` directory using Expo Router
- **Entry point**: `app/_layout.tsx` defines root Stack navigator
- **Main screen**: `app/index.tsx` contains the home screen
- **Assets**: Static assets in `assets/` with organized subdirectories
- **TypeScript paths**: `@/*` alias maps to project root
- **Platform config**: Cross-platform settings in `app.json` with iOS tablet support and Android edge-to-edge

The project currently has a minimal structure after removing the default tab-based template, with only essential routing setup remaining.