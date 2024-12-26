# Blog Platform

A modern blog platform built with React and Tailwind CSS, featuring both desktop and mobile views with dynamic content loading.

## 🚀 Live Demo
- Live Site: [[Click to see live](https://rha-notebook.netlify.app/blog)]
- GitHub Repository: [[Repo Link](https://github.com/ashumsd7/hey-notebooks)]

## 📖 Overview
This project is built on top of a React + Tailwind template, utilizing React Router for navigation and RTK Query for efficient API calls. The platform features a responsive design with dedicated mobile views and dynamic content loading.

## 🛠️ Tech Stack
- React
- Tailwind CSS
- React Router
- RTK Query
- Rhythm UI Components
- REST APIs

## 📁 Project Structure
```
src/
├── pages/
│   ├── blogsList.jsx/        # Blog-related pages
│   └── MobileBlogPage.jsx/       # Mobile-specific views
├── -- components/       # Reusable components
└── ...
```

## ✨ Features

### Desktop View (`/blog`)
1. **Blog Listing**
   - Dynamic fetch of blog posts from REST API
   - Responsive grid layout
   - Real-time search functionality
   - Tag-based filtering system

2. **Blog Details** (`/blog/:id`)
   - Dynamic content loading based on blog ID
   - Complete blog post display
   - Comments section with:
     - Existing comments display
     - Add new comments functionality

### Mobile View (`/mobile-blog`)
- Dedicated mobile-optimized interface
- Full feature parity with desktop version
- Enhanced mobile user experience
- Search and tag filtering support

## 🔌 API Integration
- Uses [DummyJSON](https://dummyjson.com/posts) for blog data
- RESTful API integration for:
  - Blog posts
  - Comments
  - User interactions

## ⚡ Quick Start

1. Clone the repository
```bash
git clone [[repository-url](https://github.com/ashumsd7/hey-notebooks)]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Visit `http://localhost:5173` to view the application

## ⏱️ Development Timeline
- Development time: 4+ hours
- Includes code cleanup and optimization
- Focus on component reusability and clean code practices

## 🎨 UI Components
- Built using Rhythm UI components
- Enhanced with custom Tailwind CSS styling


## 💭 Feedback
Feel free to review the code and add comments. Your feedback and suggestions are welcome!

## 👨‍💻 Author
**Ashutosh Anand Tiwari**  
Portfolio: [heyashu.in](https://heyashu.in)

---

Built with ❤️ by Ashu | &copy; 2024
