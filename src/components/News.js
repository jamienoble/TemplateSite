/**
 * News Component
 * Displays a list of blog posts
 * Contains 3 hardcoded news articles with title, date, excerpt, and content
 */

function News() {
    // Hardcoded blog posts data
    const posts = [
        {
            id: 1,
            title: "Getting Started with React Router",
            date: "January 15, 2024",
            author: "Jane Doe",
            category: "Tutorial",
            excerpt: "Learn the fundamentals of React Router and how to implement client-side routing in your React applications.",
            content: "React Router is the standard routing library for React applications. It enables navigation between different views, manages browser history, and keeps your UI in sync with the URL. In this comprehensive guide, we'll explore the basics of React Router and build a simple navigation system.",
            image: "🚀"
        },
        {
            id: 2,
            title: "Styling with Tailwind CSS",
            date: "January 10, 2024",
            author: "John Smith",
            category: "Design",
            excerpt: "Discover how Tailwind CSS can revolutionize your styling workflow with utility-first classes.",
            content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Unlike traditional CSS frameworks, Tailwind doesn't come with pre-designed components. Instead, it gives you the building blocks to create your own unique designs quickly and efficiently.",
            image: "🎨"
        },
        {
            id: 3,
            title: "Modern React Best Practices",
            date: "January 5, 2024",
            author: "Sarah Johnson",
            category: "Best Practices",
            excerpt: "Explore the latest best practices for writing clean, maintainable React code in 2024.",
            content: "Writing maintainable React code requires following best practices and staying up-to-date with the latest patterns. From using functional components and hooks to implementing proper state management, this article covers essential techniques every React developer should know to build scalable applications.",
            image: "⚛️"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 fade-in">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Latest News
                </h1>
                <p className="text-xl text-gray-600">
                    Stay informed with our latest articles and blog posts.
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 gap-8">
                {posts.map((post) => (
                    <article 
                        key={post.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
                    >
                        <div className="p-6 md:p-8">
                            {/* Post Header */}
                            <div className="flex flex-col md:flex-row md:items-center mb-4">
                                <div className="text-5xl mr-4 mb-4 md:mb-0">{post.image}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                                        <span className="mr-4">📅 {post.date}</span>
                                        <span className="mr-4">✍️ {post.author}</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                        {post.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Post Excerpt */}
                            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                                {post.excerpt}
                            </p>

                            {/* Post Content */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {post.content}
                            </p>

                            {/* Read More Button */}
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium">
                                Read More →
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {/* Pagination or Load More Section */}
            <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg">
                    More articles coming soon! Stay tuned for updates.
                </p>
            </div>
        </div>
    );
}
