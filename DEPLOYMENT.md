# Deploying to GitHub Pages

## Option 1: Deploy from this repository

1. Create a new branch called `gh-pages`
2. Copy the contents of the `sunset-site/` folder to the root of the `gh-pages` branch
3. Push the branch to GitHub
4. Go to your repository Settings → Pages
5. Set Source to "Deploy from a branch"
6. Select the `gh-pages` branch
7. Your site will be available at `https://yourusername.github.io/subscription_killer`

## Option 2: Create a new repository (Recommended for free hosting)

1. Create a new GitHub repository called `subscription-killer-sunset`
2. Copy all files from the `sunset-site/` folder to the new repository
3. Push to the main branch
4. Go to Settings → Pages
5. Set Source to "Deploy from a branch" and select "main"
6. Your site will be available at `https://yourusername.github.io/subscription-killer-sunset`

## Option 3: Using GitHub Actions (Most Flexible)

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./sunset-site
```

This will automatically deploy the sunset-site folder contents whenever you push to main.

## Testing Locally

```bash
cd sunset-site
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## What the site does:

- Shows the original homepage design
- Intercepts clicks on "Start Saving Free" buttons
- Shows a modal explaining the service is discontinued
- Provides contact information for bookkeeper referrals
- Preserves all original branding and testimonials