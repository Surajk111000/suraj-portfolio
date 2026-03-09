# 🚀 GitHub & Deployment Guide for Suraj Portfolio

## Step 1: Create GitHub Repository

1. **Go to GitHub** → https://github.com/Surajk111000
2. **Click "New"** button (top left, green button)
3. **Create repository** with these settings:
   - **Repository name**: `suraj-portfolio` (or your preferred name)
   - **Description**: "Personal portfolio website built with React, Vite, and Tailwind CSS"
   - **Public** (so it's visible)
   - **DO NOT** check "Initialize with README" (we already have one)
   - **DO NOT** add .gitignore or license (we have them)
4. **Click "Create repository"**

## Step 2: Push Code to GitHub

After creating the repo, you'll see these commands. Run them in order:

```bash
# In PowerShell at G:\Projects\suraj-portfolio

# Set your user info (one-time setup)
git config --global user.email "surajk201611@gmail.com"
git config --global user.name "Suraj Kumar"

# Add remote (replace YOUR_REPO_URL with the URL from GitHub)
git remote add origin https://github.com/Surajk111000/suraj-portfolio.git

# Verify remote is added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `suraj-portfolio` with your actual repository name from GitHub.

---

## Step 3: Deploy on Netlify (Recommended - Super Easy!)

### Option A: Deploy from GitHub (Easiest)

1. **Go to Netlify** → https://app.netlify.com/

2. **Sign up/Login** with GitHub account
   - Click "Sign up"
   - Choose "GitHub" 
   - Authorize Netlify to access your GitHub

3. **Import from Git**
   - Click "New site from Git"
   - Choose "GitHub"
   - Select `suraj-portfolio` repository

4. **Configure Build Settings**
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

5. **Done!** 🎉
   - Netlify will automatically build and deploy
   - You'll get a URL like: `https://your-name-portfolio.netlify.app`
   - Every time you push to GitHub, it auto-deploys!

---

## Step 4: Deploy on Vercel (Alternative - Also Free!)

### Deploy from GitHub

1. **Go to Vercel** → https://vercel.com/

2. **Sign up/Login** with GitHub
   - Click "Sign up"
   - Choose "Authorize with GitHub"

3. **Import Project**
   - Click "Import Project"
   - Paste GitHub repo URL or select from list
   - Click "Import"

4. **Project Settings** (auto-detected)
   - **Framework Preset**: Vite ✓
   - **Build Command**: `npm run build` ✓
   - **Output Directory**: `dist` ✓
   - Click "Deploy"

5. **Done!** 🎉
   - You'll get a URL like: `https://suraj-portfolio.vercel.app`
   - Auto-deploys on every GitHub push!

---

## Step 5: Custom Domain (Optional)

Both Netlify and Vercel support free custom domains:

### On Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Update your domain DNS settings (instructions provided)

### On Vercel:
1. Go to Settings → Domains
2. Enter your custom domain
3. Update DNS records (instructions provided)

---

## Complete Git Commands Reference

```bash
# Initial setup (one time)
git config --global user.email "your@email.com"
git config --global user.name "Your Name"

# Check status
git status

# Add new changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline
```

---

## Making Updates After Deployment

After deployment via GitHub:

1. **Make changes** to files locally
2. **Commit changes**
   ```bash
   git add .
   git commit -m "Updated portfolio with new projects"
   ```
3. **Push to GitHub**
   ```bash
   git push origin main
   ```
4. **Automatic Deploy** ✅
   - Netlify/Vercel automatically detects the push
   - Builds and deploys the new version
   - Takes 1-2 minutes

---

## Troubleshooting

### "Authentication failed" when pushing
```bash
# Use Personal Access Token instead of password
# Go to GitHub → Settings → Developer settings → Personal access tokens
# Generate new token with 'repo' scope
# Use token as password when asked
```

### Build fails on Netlify/Vercel
1. Check that build command is: `npm run build`
2. Check that publish directory is: `dist`
3. Ensure all dependencies are in `package.json`
4. Run `npm install` locally and commit `package-lock.json`

### Site shows old version after push
1. Check that GitHub Actions shows successful build
2. Hard refresh browser (Ctrl+Shift+R)
3. Check deployment logs on Netlify/Vercel

---

## Quick Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Create GitHub repo | 2 min |
| 2 | Push code to GitHub | 2 min |
| 3 | Connect to Netlify/Vercel | 1 min |
| 4 | First deploy | 2-3 min |
| **Total** | **Live website** | **~8 min** ✅ |

---

## Your Portfolio Will Have

✅ Free hosting (Netlify/Vercel)
✅ Auto-deploy on GitHub push
✅ Free SSL certificate (HTTPS)
✅ Custom domain support
✅ Production-ready performance
✅ GitHub version control

---

## Next Steps

1. Create the GitHub repo following Step 1-2
2. Choose Netlify or Vercel for deployment
3. Share your portfolio URL!
4. Keep updating with new projects!

**Good luck! Your portfolio will be live in minutes!** 🚀

---

*For detailed Netlify docs: https://docs.netlify.com/*
*For detailed Vercel docs: https://vercel.com/docs*
