# Deployment Guide for Lex Landing Page

## Step-by-Step Deployment Instructions

### Step 1: Push to GitHub (You're doing this now!)

After creating your repository on GitHub, run these commands in your terminal:

```bash
# Navigate to the landing page directory
cd lex-landing-page

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Lex landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/sebastiankolimagowork-afk/lex-landing-page.git

# Push to GitHub
git push -u origin main
```

> **Note:** If you get an error about "main" branch, try `git push -u origin master` instead

---

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to **https://vercel.com**
2. Sign in with your GitHub account
3. Click **"Add New..."** → **"Project"**
4. Find and select **"lex-landing-page"** from your repositories
5. Vercel will auto-detect the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment
8. Your site is live! 🎉

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts - accept defaults
```

---

### Step 3: Connect Your Custom Domain

#### In Vercel Dashboard:

1. Go to your project settings
2. Click **"Domains"** in the sidebar
3. Add your domain:
   - For main domain: `lex.kolkar.tech`
   - Or: `lexai.ca`

#### In Your Domain Provider (e.g., Cloudflare):

Add these DNS records:

**For apex domain (lex.kolkar.tech):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL Certificate:** Vercel automatically provisions SSL - your site will be HTTPS ✅

---

### Step 4: Connect Landing Page to Main App

#### Update Links in Landing Page

In `src/sections/StickyCTA.tsx` and `src/sections/Hero.tsx`:

```tsx
// Change this:
<Button onClick={() => window.location.href = '/signup'}>
  Join Early Access
</Button>

// To this (once your main app is deployed):
<Button onClick={() => window.location.href = 'https://app.lex.kolkar.tech/auth'}>
  Join Early Access
</Button>
```

#### Update Links in Main App

In your `omniagent-chat` app, add a link back to landing:

```tsx
// In your header/navigation component:
<a href="https://lex.kolkar.tech" className="text-sm text-gray-600 hover:text-gray-900">
  ← Back to Home
</a>
```

---

### Step 5: Set Up App Subdomain

When you deploy your main app (omniagent-chat):

1. Deploy to Vercel/Netlify (same process)
2. Connect subdomain: `app.lex.kolkar.tech`
3. Add DNS record:
   ```
   Type: CNAME
   Name: app
   Value: [your-vercel-url].vercel.app
   ```

---

## Recommended URL Structure

```
Landing Page:  https://lex.kolkar.tech          (or lexai.ca)
Main App:      https://app.lex.kolkar.tech      (or app.lexai.ca)
API:           https://api.lex.kolkar.tech      (or api.lexai.ca)
Docs:          https://docs.lex.kolkar.tech     (or docs.lexai.ca)
```

---

## Troubleshooting

### Build Fails on Vercel

**Problem:** "Command `npm run build` failed"

**Solution:**
1. Make sure `package.json` has correct build script
2. Check Node.js version (should be 18+)
3. In Vercel settings, set Node.js version: 18.x

### Domain Not Connecting

**Problem:** Domain shows "DNS_PROBE_FINISHED_NXDOMAIN"

**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Clear your browser cache
3. Try incognito/private browsing
4. Verify DNS records in Cloudflare/domain provider

### Video Not Loading

**Problem:** Hero video doesn't play

**Solution:**
1. Check video file size (should be < 10MB)
2. Ensure video is in `/public` folder
3. Video must be MP4 format
4. Add poster image as fallback

---

## Performance Optimization

After deployment, check your site performance:

1. **Lighthouse Score:** https://pagespeed.web.dev/
   - Target: 90+ on all metrics
   
2. **Bundle Size:**
   ```bash
   npm run build
   # Check dist/ folder size
   # Should be < 1MB for optimal loading
   ```

3. **Image Optimization:**
   - Compress video poster: https://tinypng.com/
   - Convert to WebP if possible

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Get your GA4 tracking ID
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

### Vercel Analytics

Automatically enabled on Vercel! View in your project dashboard.

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/

---

## Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain connected
- [ ] SSL certificate active (HTTPS)
- [ ] Links to main app updated
- [ ] Video assets optimized
- [ ] Performance score checked
- [ ] Mobile responsive verified

---

**🎉 Congratulations! Your Lex landing page is live!**
