# Troubleshooting Guide

## Common Issues and Solutions

### driver.js Module Not Found Errors

If you encounter these errors when running `ng serve` or `npm start`:

```
TS2307: Cannot find module 'driver.js' or its corresponding type declarations.
Could not resolve "node_modules/driver.js/dist/driver.css"
```

**Solution:**

This happens when dependencies haven't been installed yet. Simply run:

```bash
npm install
```

This will install all project dependencies including:
- driver.js v1.4.0 with TypeScript type definitions
- All Angular dependencies
- All development dependencies

After running `npm install`, both the TypeScript module and CSS file will be available, and the errors will be resolved.

### When Does This Happen?

- Fresh clone of the repository
- After deleting `node_modules` folder
- When switching between branches
- When `package.json` dependencies have been updated

### Verification

After running `npm install`, verify driver.js is installed:

```bash
npm list driver.js
```

You should see:
```
text@0.0.0 /path/to/portfolio
└── driver.js@1.4.0
```

### Still Having Issues?

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Clear your browser cache
4. Restart the development server

## Other Common Setup Steps

### First Time Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open http://localhost:4200 in your browser

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
npm test
```
