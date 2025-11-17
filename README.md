# Manish Vangara - Data Science & AI Engineering Portfolio

A modern, TypeScript-powered portfolio website showcasing data science projects, experience, and skills.

## 🚀 Features

- **TypeScript**: Full type safety and improved developer experience
- **Vite**: Lightning-fast development server and optimized production builds
- **Modern ES Modules**: Clean, modular code architecture
- **Responsive Design**: Works seamlessly across all devices
- **Interactive Components**: Dynamic typewriter effects, particle animations, and smooth scrolling
- **Data-Driven**: Content loaded from JSON files for easy updates

## 📁 Project Structure

```
├── src/
│   ├── main.ts           # Main TypeScript application
│   └── types.ts          # TypeScript type definitions
├── data/                 # JSON data files
│   ├── projects.json
│   ├── certifications.json
│   ├── experience.json
│   ├── education.json
│   ├── skills.json
│   ├── hobbies.json
│   ├── mystory.json
│   ├── askme.json
│   └── lessons.json
├── assets/               # Images and static files
├── index.html           # Main HTML file
├── styles.css           # Styles
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

This will start a local development server at `http://localhost:3000` with hot module replacement.

### Build

```bash
# Build for production
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run deploy` - Build the project (deployment happens automatically via GitHub Actions)

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

3. **Automatic deployment** will trigger:
   - GitHub Actions will build the project
   - Deploy to GitHub Pages automatically
   - Your site will be live at: `https://manishvangara.github.io/Data_Portfolio_Manish_Vangara/`

### How It Works

- Every push to the `main` branch triggers the deployment workflow
- The workflow:
  1. Checks out the code
  2. Installs dependencies
  3. Runs TypeScript compilation
  4. Builds with Vite
  5. Deploys the `dist/` folder to GitHub Pages

### Manual Deployment

You can also trigger deployment manually from the GitHub Actions tab.

## 🎨 Customization

### Update Content

Edit the JSON files in the `data/` directory to update:
- Projects
- Certifications
- Work experience
- Education
- Skills
- Hobbies
- Personal story
- Lessons learned

### Modify Styles

Update `styles.css` to customize the appearance.

### Add Features

Extend `src/main.ts` to add new interactive features or modify existing ones.

## 🔧 Technologies

- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **HTML5/CSS3** - Modern web standards
- **Canvas API** - Particle animation effects
- **Intersection Observer API** - Scroll-based animations

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👨‍💻 Author

**Manish Vangara**
- Email: manish.vangara16@gmail.com
- GitHub: [@ManishVangara](https://github.com/ManishVangara)
- LinkedIn: [manishvangara](https://www.linkedin.com/in/manishvangara)

---

Built with TypeScript and ❤️
