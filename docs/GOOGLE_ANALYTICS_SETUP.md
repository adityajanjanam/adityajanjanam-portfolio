# 🎯 Google Analytics Setup Guide

## Overview
Google Analytics 4 (GA4) has been integrated into your portfolio to track:
- Page views and navigation
- Button clicks and user interactions
- Resume downloads
- Social media link clicks
- Contact form submissions
- Project views

## Setup Instructions

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** → **"Create Property"**
3. Fill in property details:
   - **Property name**: Aditya Janjanam Portfolio
   - **Time zone**: Your timezone
   - **Currency**: Your currency

### Step 2: Set Up Data Stream
1. After creating the property, select **"Web"** as the platform
2. Enter your website URL: `https://adityajanjanam-portfolio.web.app`
3. Enter stream name: **Portfolio Website**
4. Click **"Create stream"**

### Step 3: Get Your Measurement ID
1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

### Step 4: Add to Your Portfolio
1. Open your `.env` file (create one if it doesn't exist)
2. Add this line:
   ```env
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Step 5: Deploy
1. Rebuild your project:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## What's Being Tracked

### 📊 Automatic Tracking
- **Page Views**: Every time someone navigates to a different section
- **Session Duration**: How long users stay on your site
- **Device & Location**: User demographics (anonymized)

### 🎯 Custom Events
1. **Resume Downloads**: `trackDownload("Aditya_Janjanam_Resume.docx")`
2. **Social Media Clicks**: GitHub, LinkedIn, Email, Linktree
3. **Navigation**: Tab changes between sections
4. **Form Submissions**: Contact form success/error
5. **Project Views**: When someone views a project

### 📈 Available Reports
Once configured, you'll see:
- Real-time visitor count
- Top pages visited
- User flow and navigation patterns
- Conversion tracking (downloads, form submissions)
- Traffic sources (organic, direct, social)
- Device breakdown (mobile, desktop, tablet)

## Privacy & GDPR Compliance

✅ IP Anonymization enabled by default
✅ Only tracks in production mode
✅ Doesn't track during development (`localhost`)
✅ No personal data collected without consent

## Verification

After deployment, verify tracking works:
1. Go to **Google Analytics → Reports → Realtime**
2. Visit your live portfolio
3. You should see yourself in the real-time report
4. Click around, download resume, etc.
5. Check if events appear in GA4

## Troubleshooting

### Not Seeing Data?
1. Check if `REACT_APP_GA_TRACKING_ID` is set in `.env`
2. Verify Measurement ID is correct (starts with `G-`)
3. Make sure you deployed the latest build
4. GA4 data can take 24-48 hours to fully populate
5. Use Realtime reports to see immediate data

### Testing Locally
Analytics won't track on `localhost` by design. To test:
```javascript
// Temporarily change in src/utils/analytics.ts
if (process.env.NODE_ENV === "production" || true) { // Force enable
  ReactGA.initialize(TRACKING_ID);
}
```
Remember to remove `|| true` before deploying!

## Additional Features

### Enhanced Ecommerce Tracking
Want to track specific goals? Add custom events:

```javascript
import { trackEvent } from "./utils/analytics";

// Track when someone spends 30+ seconds on a section
trackEvent("Engagement", "Deep View", "Experience Section", 30);

// Track external link clicks
trackEvent("External Link", "Click", "GitHub Project", 1);
```

### Conversion Goals
Set up goals in GA4:
1. Go to **Admin → Events → Create Event**
2. Create goals for:
   - Resume downloads
   - Contact form submissions
   - Social media clicks
   - Project link clicks

## Support

For issues with Google Analytics:
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [React GA4 Package](https://github.com/codler/react-ga4)

---

**Status**: ✅ Configured (needs Measurement ID)  
**Package**: `react-ga4@^2.1.0`  
**Last Updated**: November 13, 2025
