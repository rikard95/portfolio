# Deployment Guide

This guide explains how to deploy this Angular portfolio project to Vercel.

## Automatic Deployment (Vercel GitHub Integration)

The project uses Vercel's native GitHub integration for automatic deployments - **no tokens or GitHub secrets required!**

### Setup

1. **Connect Repository to Vercel**:
   - Go to https://vercel.com and log in with your GitHub account
   - Click **"Add New..."** → **"Project"**
   - Import this GitHub repository
   - Vercel will automatically detect the Angular framework

2. **Configure Build Settings** (should be auto-detected):
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/text/browser`

3. **Deploy**:
   - Click **Deploy**
   - Vercel will build and deploy your application

### How It Works

Once connected:
- ✅ **Push to `main` branch**: Automatically triggers a production deployment
- ✅ **Pull requests**: Automatically creates preview deployments for testing
- ✅ **No manual intervention needed**: Vercel handles everything

## Continuous Integration (GitHub Actions)

The repository includes a CI workflow (`.github/workflows/ci.yml`) that runs on pushes to the `main` branch and on pull requests targeting `main`:

1. Checks out the code
2. Sets up Node.js environment (v20)
3. Installs dependencies with `npm ci`
4. Builds the project with `npm run build`
5. Runs tests with `npm test`

**Note**: This workflow validates code quality but does not handle deployment. Deployment is managed by Vercel's GitHub integration.

## Manual Deployment

If you prefer to deploy manually or need to deploy outside of the automated workflow:

### Installation

```bash
npm install -g vercel
```

### Login to Vercel

```bash
vercel login
```

### Deploy to Production

```bash
# First time setup (interactive)
vercel

# Deploy to production
vercel --prod
```

### Deploy Preview

```bash
vercel
```

## Configuration Files

### vercel.json

The `vercel.json` file configures how Vercel builds and serves the application:

- **buildCommand**: `npm run build` - Builds the Angular application
- **outputDirectory**: `dist/text/browser` - Angular's build output directory
- **framework**: `angular` - Tells Vercel this is an Angular application
- **rewrites**: Ensures all routes are handled by Angular's router (SPA support)
- **github.enabled**: `true` - Enables Vercel's native GitHub integration

### GitHub Actions Workflow

The `.github/workflows/ci.yml` file defines the continuous integration process (not deployment):

1. Runs on pushes to `main` and pull requests
2. Validates code by building and testing
3. Provides feedback on code quality

## Troubleshooting

### Build Failures

If the build fails, check:
- Node.js version compatibility (should be 20.x)
- Dependencies are correctly installed
- Build command works locally: `npm run build`

### Deployment Not Triggering

If automatic deployments aren't working:
- Verify the repository is connected to Vercel in your Vercel dashboard
- Check that the GitHub integration is enabled in Vercel project settings
- Ensure you have proper permissions on both GitHub and Vercel

### Preview Deployments Not Working

Ensure:
- The Vercel GitHub integration is properly installed
- Your GitHub account has authorized Vercel
- Pull requests are coming from branches in the same repository (not forks)

## Benefits of Vercel GitHub Integration

✅ **No token management**: No need to create, store, or rotate tokens
✅ **Automatic updates**: Vercel stays synchronized with your repository
✅ **Built-in preview deployments**: Every PR gets its own preview URL
✅ **Better performance**: Optimized deployment pipeline
✅ **Easier maintenance**: Less configuration to manage

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel GitHub Integration Guide](https://vercel.com/docs/deployments/git)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Angular Deployment Guide](https://angular.dev/tools/cli/deployment)
