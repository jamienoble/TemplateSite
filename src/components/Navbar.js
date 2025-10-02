/**
 * Navbar Component
 * Provides navigation links for the application
 * Uses React Router's Link component for client-side routing
 */

const { Link } = window.ReactRouterDOM;

function Navbar() {
    return (
        <nav className="sticky-navbar bg-gradient-to-r from-emerald-900 to-green-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo/Brand */}
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        <Link to="/" className="hover:text-gray-200 transition">
                            React Blog
                        </Link>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <Link 
                            to="/" 
                            className="hover:text-gray-200 hover:underline font-medium text-lg transition"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/news" 
                            className="hover:text-gray-200 hover:underline font-medium text-lg transition"
                        >
                            News
                        </Link>
                        <Link 
                            to="/contact" 
                            className="hover:text-gray-200 hover:underline font-medium text-lg transition"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
