# Arun Kumar Gupta — Software Developer & ML Enthusiast Portfolio

A premium, fully responsive, component-driven portfolio website built with **React**, **Vite**, and **Tailwind CSS v4** featuring a modern dark-mode neumorphic & glassmorphic design.

This repository is configured to automatically build and deploy to **GitHub Pages** using a custom **GitHub Actions** workflow.

---

## ✨ Features

- **Premium Dark Neumorphic Aesthetic**: Vibrant, curated color palette with custom HSL-tailored colors and smooth neumorphic depth.
- **Component-Driven Modular Architecture**: Clean, reusable React components split into separate files for easy maintenance.
- **Dynamic Projects Section**: Grab-to-scroll horizontal carousel of software engineering and machine learning projects with tech tags, responsive controls, and active progress bar indicators.
- **Dynamic Certificate Canvas Previews**: Dedicated certificates gallery that dynamically renders the first page of PDF certificates onto HTML `<canvas>` elements using `pdf.js` for lightweight page load speeds.
- **Responsive Layout**: Fluid CSS Grid and Flexbox layouts using Tailwind v4 that perfectly adapt to desktop, tablet, and mobile displays.
- **Active Navigation Highlighting**: Smooth-scrolling sections that dynamically highlight the active link in the navigation bar using the Intersection Observer API.
- **Interactive Contact Form**: A client-side validated contact form with dynamic error messages and sending/success feedback states.
- **Automated Deployment**: GitHub Actions workflow that builds and deploys the build output to GitHub Pages on every push.

---

## 📁 Repository Structure

The project directory structure is highly organized:

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deploy pipeline
├── public/                     # Static files served directly at root
│   ├── assets/                 # Profile images, project thumbnails, PDF transcripts
│   ├── favicon.svg             # Webpage tab icon
│   └── icons.svg               # Inline SVG shapes
├── src/                        # React source code
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx          # Desktop & Mobile Header navigation with theme toggle
│   │   ├── Hero.jsx            # Hexagon avatar clipping layout and greeting
│   │   ├── Education.jsx       # Academic schooling & B.Tech CSE details
│   │   ├── Skills.jsx          # Skills pills categorized by topics
│   │   ├── Projects.jsx        # Drag-to-scroll projects carousel
│   │   ├── Experience.jsx      # Timelines for professional internships
│   │   ├── Certificates.jsx    # Certificate carousel with pdf.js rendering
│   │   ├── Activities.jsx      # Extracurricular hobbies grid
│   │   ├── Contact.jsx         # Contact form with input fields and validation
│   │   └── Footer.jsx          # Footer with copyright notice
│   ├── App.jsx                 # Theme manager, scroll tracker, layout wrapper
│   ├── index.css               # Tailwind imports, neumorphic style utility classes
│   └── main.jsx                # React mount entrypoint
├── eslint.config.js            # Linter rules configuration
├── package.json                # Project dependencies and run scripts
├── vite.config.js              # Vite compiler configuration
└── README.md                   # Project documentation
```

---

## 🛠️ Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Start Development Server
Run the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To bundle the assets into static HTML/CSS/JS files inside the `/dist` folder:
```bash
npm run build
```

---

## 🚀 GitHub Pages Deployment

Deployment is fully automated using GitHub Actions defined in [deploy.yml](.github/workflows/deploy.yml).

### Setup Instructions
1. Commit and push all code changes to the `main` branch.
2. Open your repository page on GitHub.
3. Click on **Settings** -> **Pages** in the left sidebar menu.
4. Under **Build and deployment**, look for **Source**.
5. Switch the dropdown from **Deploy from a branch** to **GitHub Actions**.

The automated GitHub Action workflow will build the project and publish it live on your default GitHub Pages URL (e.g., `https://arunkg005.github.io/Portfolio/`).
