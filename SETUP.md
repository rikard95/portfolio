# Quick Start: Vercel Deployment Setup

This project is configured for automated deployment to Vercel using Vercel's native GitHub integration.

## Deployment Setup

Deployment is now handled automatically by Vercel's GitHub integration - **no tokens or secrets required!**

### Enable Vercel GitHub Integration

1. Go to https://vercel.com and log in with your GitHub account
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/text/browser`
5. Click **Deploy**

That's it! Once set up:
- ✅ Pushes to `main` branch will automatically deploy to production
- ✅ Pull requests will get preview deployments
- ✅ Your site will be live at your Vercel project URL

## CI/CD Workflow

This repository includes a GitHub Actions CI workflow that:
- Runs on every push to `main` and on pull requests
- Installs dependencies
- Builds the project
- Runs tests

Deployment is handled separately by Vercel's integration.

## Manual Deployment (Alternative)

If you prefer to deploy manually without the GitHub integration:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

## Need Help?

See `DEPLOYMENT.md` for detailed documentation and troubleshooting.
