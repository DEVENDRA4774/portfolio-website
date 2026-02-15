# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site will be live in minutes

#### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Follow the DNS configuration instructions

---

### 2. Netlify

Another excellent option with great features.

#### Steps:

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up
   - Drag and drop your project folder
   - Or connect to GitHub for automatic deployments

#### Configuration:
Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out"
   }
   ```

3. **Update next.config.js**
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

### 4. AWS Amplify

Good option if you're using AWS services.

#### Steps:

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

---

### 5. Railway

Simple deployment with free tier.

#### Steps:

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. New Project → Deploy from GitHub repo
4. Select your repository
5. Railway will auto-detect Next.js and deploy

---

### 6. Render

Another great platform with free tier.

#### Steps:

1. Go to [render.com](https://render.com)
2. Sign up
3. New → Web Service
4. Connect your GitHub repository
5. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Deploy

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All personal information is updated
- [ ] GitHub links are updated with your actual profile
- [ ] Contact form is configured (if using email service)
- [ ] All images are optimized
- [ ] Environment variables are set (if any)
- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] SEO metadata is correct in `layout.tsx`
- [ ] All links work correctly
- [ ] Mobile responsiveness is tested
- [ ] All console errors are fixed

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records at your domain registrar:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to your Vercel URL

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update DNS:
   - Add CNAME record: `www` → your-site.netlify.app
   - Add A record: `@` → Netlify's IP

### For GitHub Pages:
1. Add a `CNAME` file in the `public` folder with your domain
2. Update DNS:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records to GitHub's IPs

## 📊 Environment Variables

If you add email services or analytics:

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify:
1. Go to Site Settings → Environment Variables
2. Add your variables
3. Redeploy

## 🔄 Continuous Deployment

Once connected to GitHub:

1. Make changes locally
2. Commit and push to GitHub
3. Platform automatically rebuilds and deploys
4. Changes live in minutes!

## 📈 Add Analytics (Optional)

### Google Analytics:
1. Create account at analytics.google.com
2. Get tracking ID
3. Add to your `layout.tsx`:

```typescript
import Script from 'next/script'

// Add inside <body> tag
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🚨 Common Deployment Issues

### Build Fails:
- Check all TypeScript errors
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

### Images Not Loading:
- Make sure images are in the `public` folder
- Use correct paths: `/image.jpg` not `./image.jpg`

### 404 Errors:
- Check Next.js routing
- Ensure all links are correct
- For static export, check `output: 'export'` in config

### Slow Loading:
- Optimize images
- Enable caching
- Use CDN (Vercel/Netlify provide this automatically)

## 📱 Testing Your Deployed Site

After deployment:

1. **Performance**: Test with Google PageSpeed Insights
2. **Mobile**: Test on real devices
3. **Cross-browser**: Test on Chrome, Firefox, Safari, Edge
4. **Links**: Click all navigation and external links
5. **Form**: Test contact form submission
6. **Responsiveness**: Test different screen sizes

## 🎉 Post-Deployment

1. Share your portfolio on LinkedIn
2. Add to your resume
3. Update your email signature
4. Share on social media
5. Monitor analytics
6. Regularly update with new projects

---

**Pro Tip**: Start with Vercel for the easiest deployment experience. You can always migrate to other platforms later!

Good luck with your deployment! 🚀
