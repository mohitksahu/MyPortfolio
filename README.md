# Portfolio Project - React + Vite + Three.js

![Portfolio Banner](./public/images/img_logo.svg)

A modern, interactive portfolio website built with the latest web technologies. This project showcases professional work, skills, and contact information in an engaging, visually appealing interface with 3D elements and smooth animations.

## ✨ Features

- **Interactive 3D Elements** - Engaging Three.js powered 3D models and animations
- **Modern React (v19)** - Built with the latest React features and patterns
- **Lightning-fast Vite** - Optimized build tooling for excellent development experience
- **Responsive Design** - Fully responsive layout works on all device sizes
- **Animated UI** - Smooth transitions and animations using Framer Motion
- **Dark Theme** - Sleek dark mode design with accent highlights
- **Component-Driven** - Modular architecture with reusable components
- **Clean Code** - Well-documented and organized codebase

## 🔧 Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Type Checking**: PropTypes
- **Code Formatting**: Prettier

## 📋 Prerequisites

- Node.js (v16.x or higher recommended)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react_project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the optimized production version:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
/
├── public/               # Static assets and images
│   └── images/           # Image assets used in the project
│
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── 3d/           # Three.js 3D components
│   │   ├── common/       # Common components used across pages
│   │   └── ui/           # Basic UI elements (buttons, tags, etc.)
│   │
│   ├── pages/            # Page components
│   │   └── Home/         # Homepage sections
│   │
│   ├── styles/           # Global styles and Tailwind CSS configuration
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── Routes.jsx        # Application routing configuration
│
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## 🧩 Project Sections

- **Hero Section**: Introduction and primary call-to-action
- **Projects Section**: Showcase of portfolio work
- **Skills Section**: Technical and professional skills display
- **About Section**: Personal information and background
- **Contact Section**: Contact information and form
- **Quote Section**: Inspirational quote display

## 🔍 Code Quality Features

- Comprehensive commenting and documentation
- Consistent code style with Prettier formatting
- Component-based architecture for reusability
- Prop validation with PropTypes
- Responsive design best practices
- Optimized rendering performance

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly across:
- Desktop/large screens
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#) for open tasks.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React, Vite, Three.js and Tailwind CSS

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with [Rocket.new
](https: //rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new