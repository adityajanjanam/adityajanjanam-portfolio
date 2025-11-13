

---

# Aditya Janjanam - Portfolio

A modern, interactive portfolio website showcasing my professional experience, skills, projects, certifications, and awards.

**Live Site:** [adityajanjanam-portfolio.web.app](https://adityajanjanam-portfolio.web.app)

## ✨ Features

- **🎨 Modern UI/UX:** Built with React and Tailwind CSS featuring dark/light theme toggle
- **🎯 10 Interactive Sections:**
  - Home with animated greetings in multiple languages
  - Experience with timeline visualization
  - Education journey
  - Skills with interactive tech grid
  - Real Projects from GitHub
  - Certifications showcase
  - Awards & Achievements
  - Testimonials
  - Application Packaging expertise
  - Contact form with EmailJS integration
- **🎬 Smooth Animations:** Powered by Framer Motion with scroll-to-top on navigation
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices
- **🎮 Interactive Elements:** Custom cursor, particle background, floating navigation
- **📊 Analytics Integration:** Google Analytics 4 tracking
- **👥 Visitor Counter:** Real-time visitor tracking with Firebase
- **📧 Contact Form:** Functional contact form using EmailJS
- **⚡ Performance Optimized:** Fast loading with code splitting and lazy loading

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library with TypeScript support
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Client-side routing (via tab state)
- **React Icons** - Icon library
- **React Helmet Async** - SEO meta tags management

### Backend & Services
- **Firebase Hosting** - Production deployment
- **Firebase Firestore** - Visitor counter database
- **EmailJS** - Contact form email service
- **Google Analytics 4** - Website analytics

### Development Tools
- **Create React App** - Build tooling
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Git & GitHub** - Version control

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityajanjanam/adityajanjanam-portfolio.git
   cd adityajanjanam-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory (use `.env.example` as template):
   ```env
   # Firebase Configuration
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   
   # EmailJS Configuration (for contact form)
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Google Analytics
   REACT_APP_GA_TRACKING_ID=your_ga_tracking_id
   
   # GitHub Token (for fetching projects)
   REACT_APP_GITHUB_TOKEN=your_github_token
   ```

4. **Run the development server:**
   ```bash
   npm start
   ```
   
   The application will open at `http://localhost:3000`

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Firebase Hosting (Current)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

### Alternative: Netlify/Vercel

- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Environment Variables:** Configure in deployment platform settings

## 📊 Project Structure

```
adityajanjanam-portfolio/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── index.html
│   ├── Aditya_Janjanam_Resume.docx
│   └── assets/          # Images, certificates, awards
├── src/
│   ├── components/      # React components
│   │   ├── Home/
│   │   ├── Experience/
│   │   ├── Education/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Certifications/
│   │   ├── Awards/
│   │   ├── Testimonials/
│   │   ├── Contact.tsx
│   │   ├── FloatingNav.jsx
│   │   └── Footer.jsx
│   ├── data/            # Static data (testimonials, constants)
│   ├── assets/          # CSS and images
│   ├── utils/           # Utility functions (analytics, etc.)
│   ├── lib/             # External libraries integration
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   └── index.tsx        # Entry point
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── firebase.json        # Firebase configuration
└── package.json         # Project dependencies
```

## 🔧 Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add email service and template
3. Get Service ID, Template ID, and Public Key
4. Add to `.env` file

### Google Analytics Setup
1. Create GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get Measurement ID
3. Add to `.env` file

### Firebase Setup
1. Create project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Add web app and get configuration
4. Add credentials to `.env` file

## 📈 Recent Updates (v2.0)

- ✅ Added Certifications section with 4 professional certificates
- ✅ Added Awards section showcasing 5 achievements
- ✅ Integrated Google Analytics 4 for visitor tracking
- ✅ Added real-time visitor counter with Firebase
- ✅ Implemented functional contact form with EmailJS
- ✅ Added real GitHub projects integration
- ✅ Implemented scroll-to-top on tab navigation
- ✅ Fixed TypeScript compilation errors
- ✅ Enhanced responsive design
- ✅ Improved dark/light theme toggle
- ✅ Added custom cursor and particle effects

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email:** janjanamaditya@gmail.com
- **LinkedIn:** [linkedin.com/in/janjanamaditya](https://www.linkedin.com/in/janjanamaditya)
- **GitHub:** [github.com/adityajanjanam](https://github.com/adityajanjanam)
- **Portfolio:** [adityajanjanam-portfolio.web.app](https://adityajanjanam-portfolio.web.app)

---

**Built with ❤️ using React & Tailwind CSS**

---
