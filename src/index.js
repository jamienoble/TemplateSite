/**
 * Entry Point for React Application
 * Renders the main App component into the DOM
 * Uses React 18's createRoot API for rendering
 */

// Get React and ReactDOM from global scope (loaded via CDN)
const { createRoot } = ReactDOM;

// Get the root DOM element where the app will be mounted
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(rootElement);

// Render the App component wrapped in React.StrictMode for development checks
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Log a message to confirm the app has loaded
console.log('React Blog App loaded successfully!');
