# Aditya Janjanam Portfolio - Replit Documentation

## Project Overview

This is a personal portfolio website for Aditya Janjanam, a Full Stack Developer specializing in React, Node.js, Flutter, and mobile app development. The portfolio showcases skills, experience, projects, education, certifications, and awards.

**Live Site:** [adityajanjanam.com](https://adityajanjanam.com)

## Technology Stack

- **Frontend Framework:** React 17.0.2
- **Styling:** Tailwind CSS 3.4.1
- **Animation:** Framer Motion 4.1.17
- **Internationalization:** i18next 22.4.9 & react-i18next 11.18.6
- **Routing:** React Router DOM 6.22.3
- **Email Integration:** EmailJS Browser 4.4.1
- **Backend Services:** Firebase 10.14.1 (optional for feedback/visitor tracking)
- **Build Tool:** React Scripts 5.0.1 (Create React App)
- **Language:** TypeScript 4.9.5 with JavaScript components

## Project Structure

```
/
├── public/              # Static assets (images, icons, manifest)
├── src/
│   ├── components/      # React components
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Home/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Social/
│   │   ├── Theme/
│   │   └── ...
│   ├── data/           # Constants and data files
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries (fingerprinting, storage)
│   ├── ts/             # TypeScript source files
│   ├── assets/         # Images and CSS files
│   └── App.tsx         # Main application component
├── .env                # Environment config (DO NOT EDIT - managed by Replit)
├── .env.local          # Local development overrides
└── package.json        # Dependencies and scripts
```

## Development Setup in Replit

### Port Configuration

The application runs on **port 5000** with host **0.0.0.0** to work with Replit's proxy environment. This is configured in `.env.local`:

```
PORT=5000
HOST=0.0.0.0
WDS_SOCKET_PORT=0
```

### Running the Development Server

The "Frontend" workflow is configured to run:
```bash
npm start
```

This starts the React development server on port 5000, accessible through Replit's webview.

## Key Features

1. **Modern UI:** High-contrast theme with dark/light mode toggle
2. **Animated Greetings:** Multi-language greeting animations
3. **Interactive Sections:**
   - About Me
   - Experience (timeline view)
   - Projects (grid view with details)
   - Education
   - Skills & Technologies
4. **Responsive Design:** Mobile, tablet, and desktop support
5. **Contact Form:** EmailJS integration for direct contact
6. **Emoji Feedback Widget:** 
   - Device fingerprinting to prevent duplicate votes
   - Daily/weekly totals
   - Optional Firebase persistence
7. **Visitor Counter:** Track site visitors
8. **Application Packaging Section:** Detailed skills showcase

## Optional Firebase Configuration

To enable Firebase for visitor tracking and feedback persistence:

1. Create a Firebase project with Firestore enabled
2. Add Firebase credentials through Replit Secrets:
   - `REACT_APP_FIREBASE_API_KEY`
   - `REACT_APP_FIREBASE_AUTH_DOMAIN`
   - `REACT_APP_FIREBASE_PROJECT_ID`
   - `REACT_APP_FIREBASE_STORAGE_BUCKET`
   - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
   - `REACT_APP_FIREBASE_APP_ID`

Without Firebase, the app uses localStorage for feedback/visitor data.

## Deployment

The project is configured for Replit deployment with:
- **Deployment Type:** Autoscale (stateless website)
- **Build Command:** `npm run build`
- **Run Command:** `npx serve -s build`

The build creates optimized production files in the `build/` directory.

## Known Issues & Notes

1. **ESLint Configuration:** Strict import ordering rules are enforced
   - External packages (react, framer-motion) grouped together
   - Internal imports separated by blank line
   - Alphabetical ordering within groups

2. **Legacy Node Options:** The project uses `--openssl-legacy-provider` flag for compatibility with older dependencies

3. **TypeScript & JavaScript Mix:** The codebase contains both .tsx and .jsx files as it's being gradually migrated to TypeScript

## Scripts

- `npm start` - Start development server on port 5000
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run jest` - Run Jest tests
- `npm run generate-favicon` - Generate favicon files

## Recent Changes (Replit Setup)

- Configured port 5000 and host 0.0.0.0 for Replit proxy compatibility
- Fixed import ordering issues in Footer and VisitorCounter components
- Added missing props to Footer component (setActiveTab, activeTab)
- Set up "Frontend" workflow for development server
- Configured deployment settings for production

## Contact Information

- **Email:** janjanamaditya@gmail.com
- **LinkedIn:** [linkedin.com/in/janjanamaditya](https://www.linkedin.com/in/janjanamaditya)
- **GitHub:** [github.com/adityajanjanam](https://github.com/adityajanjanam)

---
Last Updated: November 11, 2025
