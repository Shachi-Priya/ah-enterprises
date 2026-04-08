# A&H Enterprises Website

A modern, professional landing page for A&H Enterprises - a construction and engineering services company.

## Features

- **Modern UI Design**: Clean, professional design using Tailwind CSS
- **Responsive Layout**: Fully responsive design that works on all devices
- **Page Routing**: Next.js App Router with multiple pages
- **Service Showcase**: Comprehensive display of all services with ratings
- **Contact Integration**: WhatsApp, email, phone, and social media integration
- **Google Maps**: Embedded location map
- **Contact Form**: Functional contact form with service selection

## Pages

1. **Home** (`/`) - Hero section, services overview, company features
2. **Services** (`/services`) - Detailed services listing with ratings and reviews
3. **About Us** (`/about`) - Company story, mission, values, and team
4. **Contact** (`/contact`) - Contact form, location, social media links

## Services Included

### Main Categories:
1. Fibre Wrapping Services
2. Grouting Services  
3. Waterproofing Services
4. Crack Repair Services
5. Structural Repair Services
6. Civil Engineering Construction
7. Rebar Scanning Rental Service
8. Suspended Platform Rental Service
9. Fibre Lamination Services
10. Polymer Modified Mortar Service

### Sub-services:
Each main category includes specialized sub-services as per requirements.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    globals.css          # Global styles
    layout.tsx          # Root layout
    page.tsx            # Home page
    services/
      page.tsx          # Services page
    contact/
      page.tsx          # Contact page
    about/
      page.tsx          # About page
  components/
    Header.tsx          # Header component
  data/
    services.ts         # Services data
```

## Customization

### Company Information
Update company details in:
- `src/components/Header.tsx` - Header contact info
- `src/app/page.tsx` - Home page company info
- `src/app/contact/page.tsx` - Contact page details
- `src/app/about/page.tsx` - About page company info

### Services Data
Update services in `src/data/services.ts`

### Colors and Styling
Update Tailwind configuration in `tailwind.config.js`

## Features Implemented

- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Clean, professional design with gradients and shadows
- **Interactive Elements**: Hover states, transitions, and animations
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Optimized**: Proper meta tags and structured content
- **Performance**: Optimized images and lazy loading
- **Contact Integration**: 
  - WhatsApp direct chat
  - Email links with pre-filled subjects
  - Phone number links
  - Social media links
  - Google Maps integration

## Rating System

Each service includes:
- Star ratings (1-5 stars)
- Review count
- Visual rating display

## Contact Features

- Contact form with service selection
- Direct WhatsApp integration
- Email with auto-generated subjects
- Phone number click-to-call
- Social media links (Facebook, Instagram)
- Embedded Google Maps location

## Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any platform supporting Node.js

## License

This project is proprietary to A&H Enterprises.
