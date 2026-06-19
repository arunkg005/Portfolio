# Arun Kumar Gupta — Software Developer & ML Enthusiast

👋 Hello! I am **Arun Kumar Gupta**, a passionate Software Developer and Machine Learning Enthusiast currently pursuing my **B.Tech in Computer Science & Engineering** at Maharishi Markandeshwar University, Ambala (2023 - 2027). 

I specialize in building intelligent backend applications, automation, and data-driven systems. My technical interests span artificial intelligence, machine learning, web APIs, and responsive front-end design. 

### 🛠️ Core Toolkit
- **Languages**: Python, Java, SQL, JavaScript (ES6+)
- **Frameworks & AI/ML**: Django, Flask, FastAPI, Scikit-Learn, TensorFlow, Gemini AI, NLP
- **Tools & Platforms**: Docker, PostgreSQL, AWS, Git, GitHub, Render, Android Studio
- **Hobbies**: Singing, Chess, Badminton, competitive Hackathons, and Quizzes

---

## 💻 About This Project

This repository hosts my **Personal Portfolio Website**—a premium, component-driven web application featuring a modern **dark-mode neumorphic and glassmorphic aesthetic**. 

The project was recently migrated from a monolithic, single-file HTML configuration to a modern, modular **React + Vite + Tailwind CSS v4** framework. This transition enables:
* **Modularity**: Components are separated into focused files, reducing complexity and easing maintenance.
* **Component-Driven State**: Dynamic interactions like the project slider, modal certificates, client-side contact validation, and dark/light mode toggles are managed through reactive states.
* **Asset Optimization**: High-weight documents like certificate PDFs are dynamically parsed and drawn onto thumbnail canvas elements using `pdf.js` to ensure extremely fast page loading speeds.
* **Automated CI/CD**: A built-in GitHub Actions pipeline compiles and deploys updates to GitHub Pages on every branch push.

---

## 📁 GitHub Folder Structure

Here is the modular folder structure of the repository:

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets served at root
│   ├── assets/                 # Custom PDFs (resume, results, certificates), images, logos
│   ├── favicon.svg             # Webpage browser tab icon
│   └── icons.svg               # SVG icons sheet
├── src/                        # React source directory
│   ├── components/             # Reusable modular components
│   │   ├── Navbar.jsx          # Sticky nav menu, section highlighting, and theme toggle
│   │   ├── Hero.jsx            # Hexagon avatar clipping structure & personal greeting
│   │   ├── Education.jsx       # Academic schooling & B.Tech details
│   │   ├── Skills.jsx          # Technical & interpersonal skills pills
│   │   ├── Projects.jsx        # Mouse drag-to-scroll projects carousel
│   │   ├── Experience.jsx      # Work timeline & internship achievements
│   │   ├── Certificates.jsx    # Certificate carousel with pdf.js rendering
│   │   ├── Activities.jsx      # Extracurricular hobbies grid
│   │   ├── Contact.jsx         # Contact card with validated feedback form & socials
│   │   └── Footer.jsx          # Footer with copyright notice
│   ├── App.jsx                 # Global wrapper (observer triggers, state-based dark/light theme)
│   ├── index.css               # Tailwind directives & custom neumorphic layout classes
│   └── main.jsx                # React DOM render entry point
├── eslint.config.js            # Code syntax linting rules
├── package.json                # Dependencies and run scripts
├── vite.config.js              # Vite server & build configurations
└── README.md                   # Project documentation & biography
```

---

## 🛠️ Local Development

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or above).

### 2. Setup
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Run the local dev server with hot reload:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To bundle and optimize the project files into the static `/dist` output directory:
```bash
npm run build
```

---

## 🚀 Automated Deployment to GitHub Pages

This project is configured with a GitHub Actions workflow to automate deployment to GitHub Pages.

1. Commit and push all your changes to the `main` branch.
2. Go to your repository on GitHub.
3. Navigate to **Settings** -> **Pages** in the left menu.
4. Under **Build and deployment**, look for **Source**.
5. Change the selection from **Deploy from a branch** to **GitHub Actions**.

The action will build your Vite React app and publish it live on your default GitHub Pages URL (e.g., `https://arunkg005.github.io/Portfolio/`).
