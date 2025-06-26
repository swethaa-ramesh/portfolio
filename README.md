# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite, featuring a free contact form integration.

## 🚀 Deployment Guide

### Step 1: GitHub Setup

1. Create a GitHub account if you don't have one at [GitHub](https://github.com)
2. Create a new repository:

   - Go to GitHub.com
   - Click the '+' icon → 'New repository'
   - Name it 'portfolio'
   - Make it public
   - Click 'Create repository'

3. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Netlify Deployment

1. Go to [Netlify](https://www.netlify.com)
2. Sign up for a free account
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Step 3: Environment Variables

After deployment, set up your contact form:

1. Go to Site settings → Environment variables
2. Add these variables (already in your code):
   ```
   VITE_EMAILJS_SERVICE_ID=service_mndnedb
   VITE_EMAILJS_TEMPLATE_ID=template_01y6zwq
   VITE_EMAILJS_PUBLIC_KEY=gzvixw2Ysv3njj8pz
   ```

### Step 4: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

## 💻 Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## 📧 Contact Form

The contact form uses EmailJS for free email sending:

- No backend required
- Messages go directly to your email
- Free tier includes 200 emails/month
- Visitors can contact you without any cost

## ✨ Features

- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- 💌 Free contact form integration
- 🌙 Dark/Light mode
- 🚀 Fast loading with Vite
- 🎭 Interactive particle backgrounds

## Live Demo

Visit the live site: [Your Portfolio URL will be here after deployment]

## Technologies Used

- React
- TypeScript
- Vite
- Styled Components
- Framer Motion
- EmailJS
- React Router
- React Icons
- Three.js / React Three Fiber

## License

MIT License - feel free to use this code for your own portfolio!

## Questions?

Feel free to reach out if you have any questions or suggestions!
