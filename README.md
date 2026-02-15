# Devendra Dhande - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional UI with gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Type Safe**: Written in TypeScript

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository or navigate to the portfolio folder**

```bash
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser and visit**

```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Navbar.tsx            # Navigation bar with mobile menu
│   ├── Hero.tsx              # Hero section with introduction
│   ├── About.tsx             # About section with professional summary
│   ├── Skills.tsx            # Skills section with progress bars
│   ├── Projects.tsx          # Projects showcase
│   ├── Education.tsx         # Education timeline and certifications
│   ├── Contact.tsx           # Contact form and information
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update your information:

1. **Hero Section** (`components/Hero.tsx`):
   - Name, title, bio
   - Social media links

2. **About Section** (`components/About.tsx`):
   - Professional summary
   - Contact details
   - Key strengths

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Adjust skill levels

4. **Projects Section** (`components/Projects.tsx`):
   - Add your projects
   - Update project details and technologies

5. **Education Section** (`components/Education.tsx`):
   - Update education details
   - Add/remove certifications

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Configure form submission (connect to backend/email service)

### Color Scheme

The color scheme is defined in `tailwind.config.js`. You can customize:
- Primary color (blue)
- Secondary color (slate)
- Accent color (emerald)

### Typography

The default font is Inter. To change it, update the font import in `app/layout.tsx`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 📝 Form Submission

The contact form currently shows an alert. To make it functional:

1. **Using Formspree**:
   - Sign up at [Formspree](https://formspree.io)
   - Get your form endpoint
   - Update the form action in `Contact.tsx`

2. **Using EmailJS**:
   - Install EmailJS: `npm install @emailjs/browser`
   - Configure EmailJS in your account
   - Update the form submission handler

3. **Custom Backend**:
   - Create an API route in `app/api/contact/route.ts`
   - Handle form submission with your preferred email service

## 📱 Sections

1. **Home**: Hero section with introduction and CTA
2. **About**: Professional summary and key strengths
3. **Skills**: Technical skills with visual progress bars
4. **Projects**: Featured projects with details
5. **Education**: Academic background and certifications
6. **Contact**: Contact form and information

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Devendra Madhukar Dhande**

- Email: dhandedevendra4774@gmail.com
- LinkedIn: [devendra-dhande](https://www.linkedin.com/in/devendra-dhande-6826681b8/)
- Location: Pune, Maharashtra

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- React Icons for the icon library

---

**Note**: Remember to update the GitHub link in the Hero and Footer sections once you upload the code to your repository.
