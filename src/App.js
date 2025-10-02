/**
 * App Component
 * Main application component that sets up routing
 * Uses React Router for navigation between pages
 */

const { BrowserRouter, Switch, Route } = window.ReactRouterDOM;

// ...existing components are assumed to be globally available (Home, News, Contact, Navbar)
// Prefer global components where available, but provide lightweight fallbacks
// so the app won't crash in environments that don't support dynamic requires.
const About = window.About || function AboutFallback() {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">About</h1>
            <p className="text-gray-600">About component not loaded. If you're developing locally, ensure the About component is included in your bundle or restart the dev server.</p>
        </div>
    );
};

const Portfolio = window.Portfolio || function PortfolioFallback() {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
            <p className="text-gray-600">Portfolio component not loaded. Add the Portfolio component to the project or rebuild the bundle to view this page.</p>
        </div>
    );
};

const FAQ = window.FAQ || function FAQFallback() {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">FAQ</h1>
            <p className="text-gray-600">FAQ component not loaded. Add the FAQ component to the project or rebuild the bundle to view this page.</p>
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            {/* Navigation bar appears on all pages */}
            <Navbar />
            {/* Main content area with minimum height */}
            <main className="min-h-screen bg-gray-50">
                {/* Define routes for different pages */}
                <Switch>
                    {/* Home page route */}
                    <Route exact path="/" component={Home} />
                    {/* News page route */}
                    <Route path="/news" component={News} />
                    {/* About page route */}
                    <Route path="/about" component={About} />
                    {/* Portfolio page route */}
                    <Route path="/portfolio" component={Portfolio} />
                    {/* FAQ page route */}
                    <Route path="/faq" component={FAQ} />
                    {/* Contact page route */}
                    <Route path="/contact" component={Contact} />
                    {/* 404 Not Found route - catches all undefined routes */}
                    <Route render={() => (
                        <div className="container mx-auto px-4 py-16 text-center">
                            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                            <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
                            <a 
                                href="/" 
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Go Home
                            </a>
                        </div>
                    )} />
                </Switch>
            </main>
            {/* Footer section */}
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg mb-2">© 2025 Template Site. All rights reserved.</p>
                    <p className="text-gray-400">
                        Built with React, React Router, and Tailwind CSS
                    </p>
                </div>
            </footer>
        </BrowserRouter>
    );
}
