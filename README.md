# -R2E-AUTE-Group-2

A Playwright automation testing framework for Group 2 R2E project.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npm run install:browsers
```

## Available Scripts

- `npm run build` - Build TypeScript to JavaScript
- `npm run build:check` - Type-check without emitting files
- `npm test` - Run all tests
- `npm run test:headed` - Run tests with browser UI visible
- `npm run test:debug` - Run tests in debug mode
- `npm run test:ui` - Run tests with Playwright UI
- `npm run install:browsers` - Install Playwright browsers

## Project Structure

```
src/
├── api/
│   └── api.ts          # API client utilities
├── pages/
│   └── login.ts        # Page object models
├── tests/
│   ├── example.spec.ts # Example tests
│   └── login.spec.ts   # Login functionality tests
└── tests-examples/     # Playwright demo tests
```

## Usage

Run all tests:
```bash
npm test
```

Run specific test file:
```bash
npm test login.spec.ts
```

Run tests for specific browser:
```bash
npm test -- --project=chromium
```