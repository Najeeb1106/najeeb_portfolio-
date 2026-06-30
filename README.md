# 🚀 My-Portfolio (Najeeb Ullah Tahir)

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r152-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.41.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-4ade80?style=for-the-badge&logo=mit&logoColor=white)](LICENSE)

**Live Demo:** [https://najeeb-ullah-786.vercel.app/](https://najeeb-ullah-786.vercel.app/)

A modern, interactive portfolio website built with React, Three.js, and Framer Motion for Najeeb Ullah Tahir.

---

## ✨ Features

- 🎨 Interactive 3D design and glowing typography
- 📱 Fully responsive grid and card layouts for mobile viewports
- 🎯 Glass-morphism UI with dark theme
- 📧 Functional contact form with EmailJS integration
- 🖼️ Dynamic project showcase featuring 11 interactive projects
- 📊 Visual skill levels and certifications
- 🚀 Smooth scroll and page transitions

---

## 📁 Project Structure

```
my-portfolio/
├── .gitignore
├── README.md
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── mylogo.png           ← Customized letter 'N' favicon
    ├── src/
    │   ├── assets/
    │   │   ├── CV/              ← Najeeb's CV
    │   │   └── images/          ← Project preview images
    │   ├── components/          ← Layout & Page Components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Contact.jsx
    │   │   └── Footer.jsx
    │   ├── data/
    │   │   └── PortfolioContent.js  ← Portfolio content data
    │   ├── styles/              ← Component CSS Stylesheets
    │   ├── App.js
    │   └── index.js
    ├── .env                     ← EmailJS credentials
    ├── package.json
    └── README.md
```

---

## 🚀 Quick Setup

```bash
git clone https://github.com/Najeeb1106/my-portfolio.git
cd my-portfolio/frontend
npm install
npm start
```

---

## ✏️ Development & Customization

### Step 1: Content Configuration
Customize details (Hero bio, certifications, stats, and project showcases) inside:
`/frontend/src/data/PortfolioContent.js`

### Step 2: Running Locally
Verify edits and start the development server using:
```bash
npm start
```

### Step 3: Production Build
Compile and bundle the production files using:
```bash
npm run build
```

---

## 📧 Contact Form Setup

1. Create a service and email template on [EmailJS](https://www.emailjs.com/).
2. Place your keys in `/frontend/.env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Three.js + React Three Fiber** - 3D Graphics
- **Framer Motion** - Animations
- **EmailJS** - Contact Form
- **CSS3** - Styling

---

## 📝 License

MIT License

---

## 👨‍💻 Owner

**Najeeb Ullah Tahir** - Full Stack & Mobile Engineer

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Najeeb1106)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/najeeb-ullah-tahir)

---

## ⭐ Support

If you found this useful, please give it a ⭐ on GitHub!

---

**Made with ❤️ by Najeeb**
