# Troubleshooting Guide

## Styles Not Loading After Branch Switch

If you've switched to the main branch and styles appear to be missing, follow these steps:

### Quick Fix (Try these first)

1. **Install Dependencies**
   ```bash
   npm install
   ```
   This ensures all required packages (including Tailwind CSS) are installed.

2. **Clear Build Cache and Restart Dev Server**
   ```bash
   # Stop the current dev server (Ctrl+C)
   # Then restart:
   npm start
   ```

3. **Hard Refresh Browser**
   - **Windows/Linux**: `Ctrl + Shift + R` or `Ctrl + F5`
   - **Mac**: `Cmd + Shift + R`
   
   This clears browser cache and forces a fresh load of all assets.

4. **Clear Browser Cache Completely**
   - Open browser DevTools (F12)
   - Right-click the refresh button
   - Select "Empty Cache and Hard Reload"

### If Quick Fixes Don't Work

5. **Clean Build**
   ```bash
   # Remove build artifacts
   rm -rf dist
   rm -rf .angular
   
   # Rebuild
   npm run build
   ```

6. **Reinstall Dependencies**
   ```bash
   # Remove node_modules and package-lock.json
   rm -rf node_modules package-lock.json
   
   # Reinstall
   npm install
   ```

7. **Check for Port Conflicts**
   ```bash
   # If port 4200 is already in use, kill the process or use a different port
   npm start -- --port 4201
   ```

### For Production/Deployment Issues

8. **Verify Deployment Build**
   ```bash
   # Test production build locally
   npm run build
   
   # Check that dist/text/browser contains:
   # - index.html
   # - styles-*.css
   # - main-*.js
   ls -lh dist/text/browser/
   ```

9. **Redeploy to Vercel**
   - Push changes to trigger automatic deployment
   - Or manually redeploy from Vercel dashboard

### How to Verify Styles Are Loading

Open browser DevTools (F12) and check:

1. **Network Tab**
   - Look for `styles.css` or `styles-*.css` file
   - Status should be `200 OK`
   - Size should be around 85-97 KB

2. **Elements Tab**
   - Inspect `<body>` element
   - Should have classes like `bg-slate-950`, `text-slate-100`
   - Computed styles should show dark background color

3. **Console Tab**
   - Should NOT have CSS loading errors
   - Look for any 404 errors for missing files

### Technical Details

The application uses:
- **Tailwind CSS 3.4.19** for styling
- **PostCSS** for processing
- **Angular 20.3** with the new build system
- **Critical CSS inlining** for performance

The build process:
1. Compiles Tailwind directives in `src/styles.css`
2. Generates optimized CSS bundle
3. Inlines critical styles in HTML `<head>`
4. Lazy-loads full stylesheet

### Still Having Issues?

If none of the above works:

1. **Check your Angular version**
   ```bash
   ng version
   ```
   Should be Angular 20.3.0 or higher.

2. **Check Node version**
   ```bash
   node --version
   ```
   Should be Node 18 or higher.

3. **Look for errors in the terminal** where dev server is running

4. **Check browser console** for JavaScript errors that might prevent styles from loading

5. **Compare your local files** with the repository:
   ```bash
   git status
   git diff
   ```

6. **Create an issue** on GitHub with:
   - Screenshot of the issue
   - Browser console errors (if any)
   - Terminal output from `npm start`
   - Output of `ng version` and `node --version`

## Common Misconceptions

❌ "Styles disappeared" - The styles are in the code, they just need to be built/loaded properly  
✅ Styles need to be compiled by Tailwind CSS during the build process

❌ "It worked on another branch" - Different branches may have different build artifacts  
✅ Always run `npm install` and restart dev server after switching branches

❌ "The CSS file is missing" - CSS is generated during build, not checked into git  
✅ Run `npm start` or `npm run build` to generate the CSS

## Prevention Tips

To avoid this issue in the future:

1. **Always run `npm install`** after pulling new code or switching branches
2. **Restart the dev server** when switching branches
3. **Add to `.gitignore`**: `dist/`, `.angular/`, `node_modules/`
4. **Use consistent Node version** across team (consider using nvm)
