# Bokeh - Professional Photography & Design Website

A modern, responsive website for a photography studio specializing in bokeh effects and artistic blur techniques. Built with React and featuring a sophisticated grey color scheme.

## 🎯 Project Overview

Bokeh is a professional photography and design studio website that showcases the art of depth and blur in visual storytelling. The website features a clean, modern design using various shades of grey to create an elegant and professional appearance.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Navigation**: Sticky navigation bar with active page highlighting
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Grey Color Scheme**: Sophisticated monochromatic design using various shades of grey
- **Single Page Application**: Built with React Router for smooth page transitions

### Page Structure
1. **Home (Landing Page)**: Hero section, features, stats, and call-to-action
2. **About**: Company story, team members, and values
3. **Gallery**: Portfolio showcase with category filtering
4. **Services**: Detailed service offerings with pricing and process
5. **Contact**: Contact form, business information, and location details

### Visual Elements
- **Animated Bokeh Effects**: CSS animations simulating photography bokeh
- **Interactive Gallery**: Filterable portfolio with hover overlays
- **Professional Forms**: Styled contact forms with validation
- **Gradient Backgrounds**: Subtle grey gradients throughout the design
- **Card-based Layout**: Modern card components with shadow effects

## 🛠 Technical Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM
- **Styling**: Pure CSS with CSS Variables
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website icon
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── src/
│   ├── pages/              # Page components
│   │   ├── Home.js         # Landing page
│   │   ├── About.js        # About page
│   │   ├── Gallery.js      # Gallery page
│   │   ├── Services.js     # Services page
│   │   └── Contact.js      # Contact page
│   ├── App.js              # Main app component with routing
│   ├── App.css             # Main stylesheet
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
└── README.md              # This documentation
```

## 🎨 Design System

### Color Palette
The website uses a sophisticated grey color scheme defined in CSS variables:

- **Primary Grey**: `#2d2d2d` - Main headings and navigation
- **Secondary Grey**: `#4a4a4a` - Subheadings and important text
- **Light Grey**: `#6c757d` - Body text and descriptions
- **Lighter Grey**: `#adb5bd` - Subtle elements and borders
- **Lightest Grey**: `#e9ecef` - Background highlights
- **Background Grey**: `#f8f9fa` - Main background color
- **White**: `#ffffff` - Cards and contrast elements

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semi-bold)
- **Responsive Font Sizes**: Scales appropriately across devices

### Layout Principles
- **Grid-based Layout**: CSS Grid for responsive component arrangement
- **Consistent Spacing**: 80px section padding, 2rem component gaps
- **Card Design**: Rounded corners (15px), subtle shadows, hover effects
- **Maximum Width**: 1200px container with centered alignment

## 🔧 Component Documentation

### Navigation Component
- **Location**: `src/App.js`
- **Features**: 
  - Sticky positioning
  - Active page highlighting
  - Responsive mobile menu
  - Smooth hover transitions

### Page Components

#### Home Page (`src/pages/Home.js`)
- **Hero Section**: Main landing area with animated bokeh elements
- **Features Grid**: 4-column responsive grid showcasing key benefits
- **Stats Section**: Company statistics with dark background
- **Call-to-Action**: Prominent conversion section

#### About Page (`src/pages/About.js`)
- **Story Section**: Company history and mission
- **Team Grid**: Team member profiles with avatars
- **Values Section**: Core company values
- **Interactive Bokeh Demo**: Animated visual elements

#### Gallery Page (`src/pages/Gallery.js`)
- **Filter System**: Category-based portfolio filtering
- **Image Grid**: Responsive gallery with hover overlays
- **Interactive Elements**: View buttons and category switching

#### Services Page (`src/pages/Services.js`)
- **Service Cards**: Detailed service offerings with pricing
- **Process Timeline**: 4-step process visualization
- **FAQ Section**: Common questions and answers

#### Contact Page (`src/pages/Contact.js`)
- **Contact Form**: Full-featured form with validation
- **Business Information**: Contact details and hours
- **Map Placeholder**: Location information section

## 🎯 Key Features Explained

### Responsive Design
The website is fully responsive with breakpoints at:
- **768px**: Tablet layout adjustments
- **480px**: Mobile layout optimizations

### Animation System
- **Bokeh Circles**: Floating animation with staggered delays
- **Pulse Effects**: Rhythmic scaling for visual interest
- **Hover Transitions**: Smooth transform and shadow effects

### Interactive Elements
- **Gallery Filtering**: JavaScript-powered category filtering
- **Form Handling**: React state management for form inputs
- **Navigation States**: Active page highlighting and hover effects

## 🚀 Performance Optimizations

### CSS Optimizations
- **CSS Variables**: Centralized color management
- **Efficient Selectors**: Optimized CSS for fast rendering
- **Minimal Reflows**: Transform-based animations

### React Optimizations
- **Functional Components**: Modern React hooks usage
- **State Management**: Efficient local state handling
- **Component Structure**: Modular, reusable components

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **CSS Features**: CSS Grid, Flexbox, CSS Variables, CSS Animations

## 🔧 Development Guidelines

### Code Style
- **Naming Convention**: camelCase for variables, kebab-case for CSS classes
- **Component Structure**: Functional components with hooks
- **CSS Organization**: Logical grouping with clear section comments

### File Organization
- **Pages**: Separate files for each page component
- **Styles**: Single CSS file with organized sections
- **Assets**: Public folder for static assets

## 🚀 Deployment

### Build Process
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: AWS CloudFront, Cloudflare
- **Traditional Hosting**: Any web server capable of serving static files

## 🔍 SEO Optimization

### Meta Tags
- **Title**: Descriptive page title
- **Description**: SEO-friendly meta description
- **Theme Color**: Matches brand color scheme
- **Viewport**: Mobile-responsive viewport settings

### Semantic HTML
- **Header Structure**: Proper heading hierarchy (h1, h2, h3)
- **Navigation**: Semantic nav elements
- **Content Sections**: Meaningful section elements

## 🎨 Customization Guide

### Color Scheme
To modify the color scheme, update the CSS variables in `App.css`:
```css
:root {
  --primary-grey: #2d2d2d;
  --secondary-grey: #4a4a4a;
  /* ... other color variables */
}
```

### Content Updates
- **Text Content**: Update directly in component JSX
- **Images**: Replace placeholder elements with actual images
- **Contact Info**: Modify contact details in Contact.js

### Adding New Pages
1. Create new component in `src/pages/`
2. Import in `App.js`
3. Add route to Routes component
4. Update navigation menu

## 🐛 Troubleshooting

### Common Issues

#### Navigation Not Working
- Ensure React Router is properly installed
- Check that all page components are imported correctly
- Verify route paths match navigation links

#### Styling Issues
- Check CSS variable definitions
- Ensure proper class name usage
- Verify responsive breakpoints

#### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in JavaScript files
- Verify import/export statements

## 📄 License

This project is created for demonstration purposes. Please ensure you have appropriate licenses for any production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support regarding this website:
- **Email**: hello@bokehstudio.com
- **Phone**: (555) 123-BOKEH
- **Studio**: 123 Photography Lane, San Francisco, CA

---

**Built with ❤️ using React and modern web technologies**