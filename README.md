# Subscription Killer - Sunset Site

This is a static version of the Subscription Killer homepage with a sunset notice for users.

## Deployment to GitHub Pages

This folder can be deployed to GitHub Pages as a static site. The site will show the original homepage but intercept any interactive elements to show a notice that the service has been discontinued.

## Features

- Static HTML/CSS/JS site
- Bootstrap 5.3.0 for styling
- Modal popup for sunset notice
- All original branding and testimonials preserved
- Contact information for referrals to bookkeepers

## Files

- `index.html` - Main page with original content
- `css/style.css` - Extracted styles from the original app
- `js/sunset.js` - JavaScript to intercept interactions
- `images/` - Logo and testimonial photos
- `.nojekyll` - Tells GitHub Pages not to use Jekyll

## Local Testing

Open `index.html` in a browser to test locally, or serve with:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server .
```