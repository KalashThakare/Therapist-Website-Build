# Therapist Website

A modern, responsive therapist website built with Next.js and Tailwind CSS. This frontend-only application provides a professional online presence for therapy services with a clean, accessible design.

🌐 **Live Demo:** [https://therapists-website-build.vercel.app/](https://therapists-website-build.vercel.app/)

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI** - Built with shadcn/ui components for a polished look
- **Interactive Notifications** - Toast notifications powered by Sonner
- **Professional Layout** - Designed specifically for therapy/counseling services
- **Fast Performance** - Leveraging Next.js for optimal loading speeds
- **Accessible** - Following best practices for web accessibility

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Notifications:** Sonner
- **Language:** TypeScript
- **App Router:** Next.js 13+ App Directory structure

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Internship-project/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to (http://localhost:3000) to view the website.

## 📁 Project Structure

```
Internship-project/frontend/
├── .next/              # Next.js build output
├── node_modules/       # Project dependencies
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── app/           # Next.js app directory (App Router)
│   │   ├── blogs/     # Blog pages and content
│   │   ├── contact/   # Contact page
│   │   ├── locations/ # Location/office information
│   │   ├── services/  # Therapy services pages
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx # Root layout component
│   │   └── page.tsx   # Home page
│   ├── components/    # Reusable UI components
│   └── lib/          # Utility functions and configurations
├── .gitignore
├── next-env.d.ts      # Next.js TypeScript declarations
├── next.config.ts     # Next.js configuration
├── package-lock.json  # Dependency lock file
├── package.json       # Project dependencies and scripts
└── README.md         # Project documentation
```

## 🎨 UI Components

This project uses shadcn/ui for consistent, accessible UI components. Components are located in the `components/ui` directory and can be easily customized through Tailwind CSS classes.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen orientations

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Pages/Sections

- **Home** (`/`) - Landing page introducing the therapy practice
- **Services** (`/services`) - Detailed information about therapy services offered
- **Locations** (`/locations`) - Office locations and contact details
- **Contact** (`/contact`) - Contact form and practice information
- **Blog** (`/blogs`) - Therapeutic insights, articles, and resources

## 🎨 Customization

### Colors and Theming
Modify the color scheme in `tailwind.config.js` or through shadcn/ui theme configuration.

### Components
UI components can be customized by editing files in the `components/` directory.

### Content
Update text content, images, and other assets in their respective component files.

---

**Professional therapist website built with Next.js and modern web technologies.**
