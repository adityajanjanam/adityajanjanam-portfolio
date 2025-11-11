

---

# Aditya Janjanam - Portfolio

This repository contains the source code for my personal portfolio website, showcasing my skills, experience, and projects.

**Live Site:** [adityajanjanam.com](https://adityajanjanam.com)

## Features

- **Modern UI:** Built with React and styled using Tailwind CSS with a high-contrast theme.
- **Animated Greetings:** Displays greetings in various Indian and world languages with fade animations.
- **Interactive Sections:** Includes sections for About Me, Experience (timeline view), Projects (grid view with details), Education, and Technologies Used.
- **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
- **Contact Form/Modal:** Provides easy ways to get in touch.
- **Application Packaging Section:** Dedicated section detailing specific skills (initially accessible via Tech Grid).

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Animation:** Framer Motion
- **Deployment:** Netlify (or chosen provider)
- **Version Control:** Git, GitHub

## Getting Started (Local Development)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/adityajanjanam/adityajanjanam-portfolio.git
    cd adityajanjanam-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    The application should open at `http://localhost:3000` (or another port if 3000 is busy).

### Emoji Feedback widget

This project includes an enhanced emoji feedback widget that lets visitors react with quick emojis and see totals.

**Features:**
- ✅ Device fingerprinting to prevent duplicate votes (beyond localStorage)
- ✅ Micro-animations on click for better UX
- ✅ Daily and weekly totals ("X reacted today • Y this week")
- ✅ Privacy notice and opt-out toggle
- ✅ Admin reset functionality
- ✅ Backend persistence via Firestore (optional)

**Storage:**
- By default, counts persist in the browser via `localStorage` and a single vote per device is enforced using device fingerprinting.
- If you provide Firebase config, counts will be stored in Firestore so totals are shared across all visitors.

**To enable Firebase:**

1. Create a Firebase project and enable Firestore (in Native mode).
2. Add a web app to get your config.
3. Create a `.env` file in the project root with the following keys:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

On next `npm start`, the widget will auto-detect Firebase and store counts in the `feedback/portfolio` document.

**Admin Reset:**
To enable admin reset functionality, pass an `adminKey` prop to the `EmojiFeedback` component:

```jsx
<EmojiFeedback isDarkMode={isDarkMode} adminKey="your-secret-key" />
```

Users can then click "Admin" in the widget, enter the key, and reset all feedback data.

## Deployment

This site is configured for deployment on Netlify.

- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Redirects:** A `public/_redirects` file is included to handle client-side routing.

## Contact

- **Email:** janjanamaditya@gmail.com
- **LinkedIn:** [linkedin.com/in/janjanamaditya](https://www.linkedin.com/in/janjanamaditya)

---
