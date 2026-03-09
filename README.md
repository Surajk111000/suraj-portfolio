# Suraj Kumar Portfolio Website

> 🌐 **[Live Portfolio](https://stately-kulfi-e34491.netlify.app/profile)** - Visit the deployed portfolio online!

A modern, interactive, and fully responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features smooth navigation, dark mode support, professional card-based UI, and multiple portfolio sections showcasing experience, education, skills, projects, and achievements.

---

## 🚀 Quick Links

| 🌐 Live Portfolio | 📦 GitHub Repo | 📖 Documentation | 🔧 Deployment |
|---|---|---|---|
| [**View Live**](https://stately-kulfi-e34491.netlify.app/profile) | [**Repo**](https://github.com/Surajk111000/suraj-portfolio) | [**README**](https://github.com/Surajk111000/suraj-portfolio#readme) | [**Netlify**](https://netlify.com) |

---

## 🎯 Live Portfolio Stats

- 🌍 **Hosted on:** Netlify (Free)
- 🔝 **Performance:** Lightning fast with Vite
- 📱 **Responsive:** Mobile, Tablet, Desktop optimized
- 🌙 **Dark Mode:** Fully supported
- 🔄 **Auto-Deploy:** Updates on every GitHub push

---

## 🌟 Features

- ✨ **Modern Card-Based UI** - Professional gradient-topped cards with hover animations
- 🎨 **Dark Mode Support** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🚀 **Fast Performance** - Built with Vite for instant load times
- 🔗 **Social Media Integration** - LinkedIn, LeetCode, Facebook, Instagram profiles
- 📊 **Skills Section** - 5 categories: Programming, Frameworks, Tools, Soft Skills, Other
- 🏆 **Achievements & Awards** - Display achievements with logos and icons
- 💼 **Professional Experience** - Detailed role cards with skills highlights
- 🎓 **Education & Certifications** - Institution and certification details with logos
- 🎯 **Projects Showcase** - GitHub, Kaggle, and college projects with descriptions
- 🎭 **Hobbies & Interests** - Personal interests with Heroicons
- 👔 **Leadership Roles** - Positions of responsibility with detailed descriptions
- 🎯 **Smooth Navigation** - Navbar with active page highlighting
- 📥 **Resume Button** - View and download resume in PDF

## 📋 Sections

1. **Profile** - Hero section with summary, resume buttons, and professional experience
2. **Education** - Educational institutions and professional certifications
3. **Social Media** - Social media profiles with cover gradients and stats
4. **Projects** - GitHub, Kaggle profiles and key college projects
5. **Hobbies** - Personal interests and learning activities
6. **Achievements** - Awards, competitions, and positions of responsibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Icons**: Heroicons
- **Routing**: React Router
- **Dark Mode**: TailwindCSS Dark Mode

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd suraj-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The portfolio will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```
The optimized build will be in the `dist` folder.

## 🎨 Project Structure

```
suraj-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar with theme toggle
│   │   ├── SectionCard.jsx  # Card wrapper for sections
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── ProfilePage.jsx
│   │   ├── EducationPage.jsx
│   │   ├── SocialPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── HobbiesPage.jsx
│   │   └── AchievementsPage.jsx
│   ├── data/
│   │   └── portfolioData.js # All portfolio data (centralized)
│   ├── image/               # Logos, photos, resume
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   ├── main.jsx             # Vite entry point
│   └── index.html           # HTML template
├── package.json
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.js           # Vite config
└── README.md
```

## 🎯 Customization Guide

### 1. **Update Personal Information**

Edit `src/data/portfolioData.js`:

```javascript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your@email.com',
  profileImage: profileImage,
  summary: 'Your professional summary...'
}
```

### 2. **Add Your Logo/Profile Image**

- Place your profile image in `src/image/`
- Update the import in `portfolioData.js`:
```javascript
import profileImage from '../image/your-image.png'
```

### 3. **Update Experience**

Edit the `experience` array in `portfolioData.js`:

```javascript
export const experience = [
  {
    role: 'Your Job Title',
    org: 'Company Name',
    duration: 'Jan 2024 - Present',
    type: 'Full-time',
    logoKey: 'companylogo', // Add logo to src/image/
    description: 'Your role description...'
  },
  // ... more roles
]
```

### 4. **Add Company Logos**

- Save company logos as PNG/JPG in `src/image/` folder
- Name them logically (e.g., `company_logo.png`)
- Reference the filename (without extension) in `logoKey` field
- Update the import map in the relevant page component

### 5. **Update Education**

Edit the `education` array:

```javascript
export const education = [
  {
    institute: 'University Name',
    degree: 'Degree Name',
    duration: 'Year - Year',
    grade: 'GPA/Grade',
    logoKey: 'university_logo'
  },
  // ... more institutions
]
```

### 6. **Update Skills**

Edit the `skills` array:

```javascript
export const skills = [
  {
    category: 'Programming',
    icon: 'code',
    items: ['Python', 'JavaScript', 'SQL', ...]
  },
  // ... more categories
]
```

Available icons: `code`, `frame`, `tool`, `people`, `sparkle`

### 7. **Update Social Media**

Edit the `socialMedia` array:

```javascript
export const socialMedia = [
  {
    label: 'LinkedIn',
    handle: 'Your Handle',
    url: 'https://linkedin.com/in/your-profile/',
    // ... other fields
  },
  // ... more platforms
]
```

### 8. **Update Projects**

Edit the `projects` array:

```javascript
export const projects = [
  {
    name: 'Project Name',
    logoKey: 'logo_key',
    projectType: 'Web App / Research / etc',
    details: 'Description of the project'
  },
  // ... more projects
]
```

### 9. **Update Resume**

- Place your resume PDF in `src/image/` folder
- Update the import in `ProfilePage.jsx`:
```javascript
import resumePdf from '../image/Your_Resume.pdf'
```

### 10. **Customize Theme Colors**

Edit `tailwind.config.js` to change brand colors:

```javascript
theme: {
  colors: {
    'brand-primary': '#your-color',
    'brand-accent': '#your-color',
    'brand-secondary': '#your-color',
    // ... dark mode colors
  }
}
```

### 11. **Update Favicon**

Edit `index.html` to customize the favicon:

```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,..." />
```

## 🎓 For Others Wanting to Use This Template

### Steps to Copy & Customize:

1. **Fork/Clone this repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update all data in `src/data/portfolioData.js`**
   - Replace personal information
   - Update experience, education, skills
   - Add social media links
   - Update certifications and achievements

4. **Replace images in `src/image/`**
   - Add your profile photo
   - Add company/organization logos
   - Replace your resume PDF
   - Update favicon if desired

5. **Update color scheme (optional)**
   - Edit `tailwind.config.js`
   - Modify `index.html` favicon

6. **Test locally**
   ```bash
   npm run dev
   ```

7. **Build for production**
   ```bash
   npm run build
   ```

8. **Deploy**
   - Netlify: Connect GitHub repo and deploy
   - Vercel: Connect GitHub repo and deploy
   - GitHub Pages: Push `dist` folder
   - Other hosting: Upload `dist` folder contents

## 🚀 Deployment

### Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel
1. Push code to GitHub
2. Import project on Vercel
3. Vercel auto-detects Vite and builds
4. Deploy!

### GitHub Pages
1. Update `package.json` with your repo name
2. Run `npm run build`
3. Push `dist` folder to GitHub
4. Enable GitHub Pages in repo settings

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for lint errors
npm run lint
```

## 🎨 Color Customization

The portfolio uses CSS variables for easy theming. Main colors:

- **Primary**: Brand primary color
- **Accent**: Highlight/hover color
- **Secondary**: Text and secondary color
- **Dark Mode**: Corresponding dark theme colors

## 🔒 Dark Mode

Dark mode is automatically enabled based on system preferences but can be toggled using the sun/moon icon in the navbar. Theme preference is saved to localStorage.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Images not showing
- Check image paths in `portfolioData.js`
- Ensure images exist in `src/image/` folder
- Use correct file extensions (.png, .jpg, .jfif)

### Styles not applying
- Restart dev server
- Clear browser cache
- Check Tailwind CSS config

## 📄 License

This project is open source and available for personal and commercial use. Feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Feel free to fork, modify, and create your own version of this portfolio. Share your improvements!

## 💡 Tips for Best Results

1. **Keep content concise** - Hover cards work best with 2-3 lines of text
2. **Use professional images** - High-quality logos and photos make a difference
3. **Update regularly** - Keep your portfolio current with latest projects
4. **Test mobile view** - Ensure responsiveness across devices
5. **Optimize images** - Use compressed images for faster loading
6. **Add achievement dates** - Include when you achieved certifications/awards
7. **Write compelling summaries** - Make your bio engaging and informative

---

**Built with ❤️ by Suraj Kumar**

For questions or support, feel free to reach out through the contact information in the portfolio.
