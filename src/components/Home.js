/**
 * Home Component
 * Welcome page with introduction and overview of the blog
 * Uses Tailwind CSS for responsive styling
 */

function Home() {
    return (
        <div className="container mx-auto px-4 py-8 fade-in">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-cyan-800 to-cyan-800 text-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to React Blog
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                    Your source for the latest news and updates
                </p>
                <p className="text-lg opacity-90">
                    Explore our collection of articles, stay informed, and connect with us!
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="text-blue-600 text-4xl mb-4">📰</div>
                    <h3 className="text-xl font-bold mb-2">Latest News</h3>
                    <p className="text-gray-600">
                        Stay up to date with our latest blog posts and articles covering various topics.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="text-purple-600 text-4xl mb-4">💡</div>
                    <h3 className="text-xl font-bold mb-2">Insights</h3>
                    <p className="text-gray-600">
                        Get valuable insights and perspectives on trending topics and industry news.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="text-green-600 text-4xl mb-4">🤝</div>
                    <h3 className="text-xl font-bold mb-2">Connect</h3>
                    <p className="text-gray-600">
                        Reach out to us through our contact page. We'd love to hear from you!
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">About This Blog</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    This is a modern React Single Page Application (SPA) built with React Router for seamless navigation
                    and Tailwind CSS for beautiful, responsive styling.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Explore our news section to read the latest posts, or visit the contact page to get in touch with us.
                    All components are built using functional React components for optimal performance.
                </p>
            </div>
        </div>
    );
}
