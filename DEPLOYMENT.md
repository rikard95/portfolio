# Deployment Guide

This guide explains how to deploy this Angular portfolio project to Vercel.

## Automatic Deployment (GitHub Actions)

The project is configured for automatic deployment to Vercel via GitHub Actions.

### Prerequisites

1. A Vercel account with the project already set up
2. GitHub repository secrets configured

### Required GitHub Secrets

To enable automated deployments, you need to add the following secret to your GitHub repository:

1. **VERCEL_TOKEN** (Required)
   - Get your Vercel token from: https://vercel.com/account/tokens
   - Click "Create Token" and give it an appropriate name
   - Copy the token and add it to GitHub Secrets

### Optional GitHub Secrets

These secrets are optional but can improve deployment reliability:

2. **VERCEL_ORG_ID** (Optional)
   - Get your organization/team ID from Vercel settings
   - Found in your Vercel team/account settings
   - If not provided, Vercel will use your linked project configuration

3. **VERCEL_PROJECT_ID** (Optional)
   - Get your project ID from your Vercel project settings
   - Found in Settings → General of your Vercel project
   - If not provided, Vercel will use your linked project configuration

### Adding Secrets to GitHub

1. Go to your GitHub repository
2. Click on **Settings**
3. Navigate to **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret with its respective name and value

### How It Works

- **Push to `main` branch**: Triggers a production deployment
- **Pull requests**: Creates preview deployments for testing

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

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file defines the automated deployment process:

1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the application
5. Deploys to Vercel (production for `main` branch, preview for PRs)

## Troubleshooting

### Build Failures

If the build fails, check:
- Node.js version compatibility (should be 20.x)
- Dependencies are correctly installed
- Build command works locally: `npm run build`

### Deployment Failures

If deployment fails, verify:
- GitHub secrets are correctly set
- Vercel token has appropriate permissions
- Project is linked to the correct Vercel project

### Preview Deployments Not Working

Ensure:
- Pull requests trigger the workflow
- VERCEL_TOKEN is accessible in fork PRs (if applicable)

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Angular Deployment Guide](https://angular.dev/tools/cli/deployment)
