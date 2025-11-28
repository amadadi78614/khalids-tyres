# Khalid's Tyres & Accessories - Deployment Guide

## 📦 What's Included

Your complete website with:
- 8 fully functional pages (Home, Products, About, Services, Contact, Brands, Delivery, FAQ)
- Actual tyre product images
- Responsive design with mobile navigation
- WhatsApp integration
- Vehicle search functionality
- Product filtering system
- Professional red brand colors

---

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Extract the ZIP File
Extract `khalids-tyres-complete.zip` to your local machine.

### Step 2: Initialize Git Repository
Open terminal in the extracted folder and run:

```bash
cd khalids-tyres
git init
git add .
git commit -m "Initial commit: Khalid's Tyres & Accessories website"
```

### Step 3: Push to GitHub
Create a new repository on GitHub (https://github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/khalids-tyres.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**
1. Go to https://vercel.com and sign in (use GitHub account)
2. Click "Add New Project"
3. Import your `khalids-tyres` repository
4. Configure build settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `pnpm build` (or `npm run build`)
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install` (or `npm install`)
5. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? khalids-tyres
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

### Step 5: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., khalidstyres.co.za)
4. Follow DNS configuration instructions

---

## 🏃 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation & Running

```bash
# Navigate to project folder
cd khalids-tyres

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
# Create production build
pnpm build
# or
npm run build

# Preview production build
pnpm preview
# or
npm run preview
```

---

## 📝 Environment Variables

Currently, no environment variables are required for the static site. If you add backend features later, create a `.env` file:

```env
# Example for future features
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

---

## 🎨 Customization

### Update Company Information

**Phone Number & WhatsApp:**
- `client/src/components/Header.tsx` - Line 37
- `client/src/components/Footer.tsx` - Line 61
- `client/src/components/WhatsAppFloat.tsx` - Line 3
- Update all instances of `+27123456789` to your actual number

**Email Address:**
- `client/src/components/Footer.tsx` - Line 66
- `client/src/pages/Contact.tsx` - Line 38

**Physical Address:**
- `client/src/components/Footer.tsx` - Line 71
- `client/src/pages/Contact.tsx` - Line 46

### Update Logo
The logo is controlled by `APP_LOGO` constant in `client/src/const.ts`. Replace with your logo path.

### Change Brand Colors
Edit `client/src/index.css` to modify the red primary color:
```css
--primary: oklch(55% 0.22 25); /* Current red */
```

---

## 📂 Project Structure

```
khalids-tyres/
├── client/
│   ├── public/
│   │   └── images/tyres/     # Tyre product images
│   └── src/
│       ├── components/       # Reusable components
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   └── WhatsAppFloat.tsx
│       ├── pages/           # Page components
│       │   ├── Home.tsx
│       │   ├── Products.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   ├── Contact.tsx
│       │   ├── Brands.tsx
│       │   ├── Delivery.tsx
│       │   └── FAQ.tsx
│       ├── App.tsx          # Routes
│       └── index.css        # Global styles
├── package.json
└── vite.config.ts
```

---

## 🔧 Troubleshooting

### Build Fails on Vercel
- Ensure Node.js version is 18+ in Vercel settings
- Check that build command is `pnpm build` or `npm run build`
- Verify output directory is set to `dist`

### Images Not Loading
- Images are in `client/public/images/tyres/`
- Paths in code use `/images/tyres/filename.jpg`
- Ensure images are included when deploying

### WhatsApp Button Not Working
- Update the phone number in `WhatsAppFloat.tsx`
- Format: `https://wa.me/27XXXXXXXXX` (no spaces or special characters)

---

## 📞 Support

For questions about the code or deployment, refer to:
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev

---

## ✅ Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify all navigation links work
- [ ] Test WhatsApp button with actual number
- [ ] Update contact information (phone, email, address)
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Test contact form (currently shows toast only)
- [ ] Configure SSL certificate (automatic with Vercel)

---

**Your website is ready to go live! 🎉**
