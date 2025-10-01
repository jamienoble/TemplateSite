# TemplateSite

A modern React Single Page Application (SPA) blog featuring Home, Contact, and News pages. Built with React Router for seamless navigation and Tailwind CSS for beautiful, responsive styling.

## Features

- **Home Page**: Welcome page with feature cards and about section
- **News Page**: Blog posts section with 3 hardcoded articles
- **Contact Page**: Static contact information with multiple contact methods
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Client-Side Routing**: Fast navigation with React Router
- **No Build Required**: Runs directly in the browser using CDN-hosted libraries

## Project Structure

```
TemplateSite/
├── index.html              # Main HTML file with CDN links
├── src/
│   ├── index.js           # Application entry point
│   ├── App.js             # Main app component with routing
│   ├── styles.css         # Custom CSS styles
│   └── components/
│       ├── Navbar.js      # Navigation component
│       ├── Home.js        # Home page component
│       ├── News.js        # News page with blog posts
│       └── Contact.js     # Contact page component
└── README.md              # This file
```

## Technologies Used

- **React 18**: JavaScript library for building user interfaces
- **React Router 6**: Client-side routing for SPAs
- **Tailwind CSS**: Utility-first CSS framework
- **Babel Standalone**: JSX transformation in the browser

## How to Run

### Option 1: Using Python's Built-in Server

```bash
# Navigate to the project directory
cd TemplateSite

# Start a local server on port 8080
python3 -m http.server 8080

# Open your browser and visit:
# http://localhost:8080
```

### Option 2: Using Node.js http-server

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd TemplateSite

# Start the server
http-server -p 8080

# Open your browser and visit:
# http://localhost:8080
```

### Option 3: Using Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Access

Simply open `index.html` directly in your web browser. Note that some browsers may have restrictions with CORS when opening files directly, so using a local server is recommended.

## Pages

### Home (/)
The landing page features:
- Hero section with welcome message
- Three feature cards highlighting blog capabilities
- About section describing the application

### News (/news)
Displays three hardcoded blog posts with:
- Post titles and metadata (date, author, category)
- Post excerpts and full content
- Responsive card layout

### Contact (/contact)
Shows static contact information including:
- Email address
- Phone number
- Physical address
- Social media links

## Component Details

### Navbar
- Responsive navigation bar with links to all pages
- Gradient background (blue to purple)
- Mobile-friendly layout

### App
- Sets up React Router with BrowserRouter
- Defines routes for all pages
- Includes 404 error handling
- Contains footer section

### Functional Components
All components are built using modern React functional components for optimal performance and clean code.

## Customization

### Adding New Blog Posts
Edit `src/components/News.js` and add new objects to the `posts` array:

```javascript
{
    id: 4,
    title: "Your New Post Title",
    date: "January 20, 2024",
    author: "Author Name",
    category: "Category",
    excerpt: "Brief description...",
    content: "Full content...",
    image: "📝"
}
```

### Changing Colors
The application uses Tailwind CSS classes. Modify the color classes in any component file to change the color scheme.

### Modifying Contact Information
Update the contact details in `src/components/Contact.js`.

## Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript features
- React 18
- CSS Grid and Flexbox

Tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available for anyone to use and modify.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements!