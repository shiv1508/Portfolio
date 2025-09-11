# Shivdayal Singh - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my experience as a Machine Learning Engineer. Built with clean HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

## Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Modern UI/UX**: Clean, minimal design with smooth animations and hover effects
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Resume Integration**: Direct view and download functionality for resume PDF
- **Project Showcase**: Interactive project cards with hover effects and external links
- **Contact Form**: Functional contact form with email integration
- **Performance Optimized**: Fast loading times and smooth animations

## Sections

1. **Home**: Professional introduction with call-to-action buttons
2. **About**: Background, education, and career highlights
3. **Skills**: Technical expertise organized by categories
4. **Projects**: Featured projects with descriptions and tech stacks
5. **Resume**: View and download resume functionality
6. **Contact**: Contact information and interactive form

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Flexbox/Grid, CSS animations
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages compatible

## Local Development

1. Clone this repository:
```bash
git clone https://github.com/[your-username]/portfolio.git
cd portfolio
```

2. Start a local server:
```bash
# Using Python 3
python -m http.server 5000

# Using Node.js (if you have it installed)
npx serve -l 5000

# Using PHP (if you have it installed)
php -S localhost:5000
```

3. Open your browser and navigate to `http://localhost:5000`

## GitHub Pages Deployment

### Method 1: Direct Upload

1. Create a new repository on GitHub named `[your-username].github.io` (for user site) or any name (for project site)
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save

Your site will be available at:
- User site: `https://[your-username].github.io`
- Project site: `https://[your-username].github.io/[repository-name]`

### Method 2: Git Deployment

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Add GitHub remote:
```bash
git remote add origin https://github.com/[your-username]/[repository-name].git
git branch -M main
git push -u origin main
```

3. Enable GitHub Pages in repository settings (as described in Method 1)

### Method 3: GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Choose your portfolio folder
3. Commit all changes with a descriptive message
4. Publish repository to GitHub
5. Enable GitHub Pages in repository settings

## Customization

### Personal Information
- Update contact details in `index.html` (email, phone, LinkedIn, GitHub)
- Replace resume PDF file with your own resume
- Modify the about section with your background

### Projects
- Update project cards in the Projects section
- Add your GitHub repository links
- Include live demo links where applicable

### Styling
- Modify colors in `styles.css` by changing the CSS variables
- Adjust animations and transitions to your preference
- Customize the responsive breakpoints if needed

### Content
- Update skills and technologies in the Skills section
- Modify the home section introduction
- Add or remove sections as needed

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume PDF
└── README.md          # This file
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance Optimization

- Optimized images and assets
- Minified CSS and JavaScript for production
- Efficient loading and caching strategies
- Mobile-first responsive design

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized page titles and descriptions
- Fast loading times

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: shivdayal.15aug@gmail.com
- **LinkedIn**: [linkedin.com/in/shiv](https://linkedin.com/in/shiv)
- **GitHub**: [github.com/shiv1508](https://github.com/shiv1508)

---

**Note**: Remember to replace placeholder links and information with your actual details before deploying to GitHub Pages.
