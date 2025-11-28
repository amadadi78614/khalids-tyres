# Vercel Deployment Fix Guide

## Problem
Vercel is showing server code instead of the website because it's detecting the wrong entry point.

## Solution

### Option 1: Update Existing Deployment (Recommended)

1. **Delete the current deployment:**
   - Go to https://vercel.com/dashboard
   - Click on **khalids-tyres** project
   - Go to **Settings** → **General**
   - Scroll to bottom and click **Delete Project**
   - Confirm deletion

2. **Push the fixed version to GitHub:**
   ```bash
   cd C:\Users\User\Downloads\khalids-tyres-complete\khalids-tyres
   
   # Pull the latest (if needed)
   git pull
   
   # Add the new configuration files
   git add vercel.json .vercelignore
   git commit -m "Fix Vercel deployment configuration"
   git push
   ```

3. **Redeploy to Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import **khalids-tyres** repository
   - Vercel will now use the `vercel.json` configuration
   - Click "Deploy"

### Option 2: Manual Configuration

If you don't want to delete the project:

1. Go to Vercel project → **Settings** → **General**
2. Under **Build & Development Settings**, set:
   - **Framework Preset:** Other
   - **Root Directory:** Leave empty (`.`)
   - **Build Command:**
     ```
     cd client && npm install --legacy-peer-deps && npm run build
     ```
   - **Output Directory:**
     ```
     client/dist
     ```
   - **Install Command:** Leave empty

3. Go to **Deployments** tab
4. Click **⋯** on latest deployment → **Redeploy**

---

## What's Fixed

The new `vercel.json` file tells Vercel:
- Build command runs inside the `client/` folder
- Output is in `client/dist/`
- All routes should serve `index.html` (for client-side routing)

The `.vercelignore` file excludes:
- `server/` folder (not needed for static site)
- `shared/` folder (placeholder only)
- `node_modules/` and `.git/`

---

## After Successful Deployment

Your site will work at: `https://khalids-tyres-xxxxx.vercel.app`

Test these features:
- ✅ Homepage loads correctly
- ✅ Shopping cart works
- ✅ Location-based pricing
- ✅ Quote generator
- ✅ All navigation links

---

## Need Help?

If you still see server code:
1. Clear your browser cache (Ctrl + Shift + Delete)
2. Try in incognito/private mode
3. Check Vercel deployment logs for errors
