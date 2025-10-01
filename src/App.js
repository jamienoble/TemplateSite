/**
 * App Component
 * Main application component that sets up routing
 * Uses React Router for navigation between pages
 */

const { BrowserRouter, Routes, Route } = window.ReactRouterDOM;

function App() {
    return (
        <BrowserRouter>
            {/* Navigation bar appears on all pages */}
            <Navbar />
            
            {/* Main content area with minimum height */}
            <main className="min-h-screen bg-gray-50">
                {/* Define routes for different pages */}
                <Routes>
                    {/* Home page route */}
                    <Route path="/" element={<Home />} />
                    
                    {/* News page route */}
                    <Route path="/news" element={<News />} />
                    
                    {/* Contact page route */}
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* 404 Not Found route - catches all undefined routes */}
                    <Route 
                        path="*" 
                        element={
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
                        } 
                    />
                </Routes>
            </main>
            
            {/* Footer section */}
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg mb-2">© 2024 React Blog. All rights reserved.</p>
                    <p className="text-gray-400">
                        Built with React, React Router, and Tailwind CSS
                    </p>
                </div>
            </footer>
        </BrowserRouter>
    );
}
