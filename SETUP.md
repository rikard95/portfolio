# Quick Start: Vercel Deployment Setup

This project is now configured for automated deployment to Vercel via GitHub Actions.

## Required Setup Steps

To enable automated deployments, you need to add **one secret** to your GitHub repository:

### 1. Get Your Vercel Token

1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Give it a name like "GitHub Actions Deploy"
4. Copy the generated token

### 2. Add Secret to GitHub

1. Go to your GitHub repository: https://github.com/rikard95/portfolio
2. Click **Settings** (in the repository menu)
3. Navigate to **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add the secret:
   - **Name**: `VERCEL_TOKEN`
   - **Value**: (paste your token from step 1)
6. Click **Add secret**

## That's It!

Once the secret is added:
- ✅ Pushes to `main` branch will automatically deploy to production
- ✅ Pull requests will get preview deployments
- ✅ Your site will be live at: https://portfolio-rho-one-80.vercel.app/

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

## Need Help?

See `DEPLOYMENT.md` for detailed documentation and troubleshooting.
