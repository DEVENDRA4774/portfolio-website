# Quick Setup Guide

## Getting Started

Follow these steps to get your portfolio website up and running:

### 1. Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended):
- Download from: https://nodejs.org/

### 2. Installation Steps

```bash
# Navigate to the portfolio directory
cd portfolio

# Install all dependencies
npm install

# Start the development server
npm run dev
```

### 3. View Your Website

Open your browser and go to:
```
http://localhost:3000
```

## What's Next?

### Customize Your Portfolio

1. **Update Your Information**:
   - Open `components/Hero.tsx` - Update name, title, and description
   - Open `components/About.tsx` - Update professional summary and contact info
   - Open `components/Skills.tsx` - Add/modify your skills
   - Open `components/Projects.tsx` - Add your projects
   - Open `components/Education.tsx` - Update education and certifications
   - Open `components/Contact.tsx` - Update contact details

2. **Add Your GitHub Link**:
   - Find all instances of `https://github.com` in the code
   - Replace with your actual GitHub profile URL

3. **Customize Colors** (Optional):
   - Open `tailwind.config.js`
   - Modify the color scheme in the `theme.extend.colors` section

### Deploy Your Website

#### Option 1: Vercel (Easiest)
1. Create account at https://vercel.com
2. Connect your GitHub repository
3. Deploy with one click!

#### Option 2: Netlify
1. Create account at https://netlify.com
2. Build your project: `npm run build`
3. Deploy the build folder

## Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/              # Static files
└── package.json         # Dependencies
```

## Common Commands

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Troubleshooting

### Port Already in Use
If port 3000 is busy, the dev server will automatically use the next available port (3001, 3002, etc.)

### Installation Errors
If you encounter errors during `npm install`:
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Build Errors
Make sure all TypeScript files are error-free before building

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/

## Contact Form Setup

The contact form currently shows an alert. To make it send actual emails:

### Option 1: Formspree (Free)
1. Sign up at https://formspree.io
2. Create a new form
3. Get your form endpoint
4. Update the form in `components/Contact.tsx`

### Option 2: EmailJS (Free)
1. Sign up at https://www.emailjs.com
2. Create an email service
3. Install EmailJS: `npm install @emailjs/browser`
4. Configure in your component

---

**Remember**: After customization, test everything locally before deploying!

Good luck with your portfolio! 🚀
