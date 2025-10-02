/**
 * Portfolio Component (template)
 * Generic art portfolio page template
 */

function Portfolio() {
    return (
        <main id="portfolio-main" className="container mx-auto px-4 py-8">
            <section className="mb-8 text-center" aria-labelledby="portfolio-hero">
                <h1 id="portfolio-hero" className="text-3xl md:text-4xl font-bold">Portfolio</h1>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">A showcase of artworks, projects, and creative experiments. Replace these placeholders with images, descriptions and project details.</p>
            </section>

            <section aria-labelledby="gallery" className="mb-8">
                <h2 id="gallery" className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Placeholder cards - replace with actual images */}
                    <div className="bg-gray-100 rounded shadow p-4 text-center">
                        <div className="h-48 bg-gray-300 mb-4"></div>
                        <h3 className="font-semibold">Artwork Title</h3>
                        <p className="text-sm text-gray-600">Short description or medium.</p>
                    </div>
                    <div className="bg-gray-100 rounded shadow p-4 text-center">
                        <div className="h-48 bg-gray-300 mb-4"></div>
                        <h3 className="font-semibold">Artwork Title</h3>
                        <p className="text-sm text-gray-600">Short description or medium.</p>
                    </div>
                    <div className="bg-gray-100 rounded shadow p-4 text-center">
                        <div className="h-48 bg-gray-300 mb-4"></div>
                        <h3 className="font-semibold">Artwork Title</h3>
                        <p className="text-sm text-gray-600">Short description or medium.</p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="about-artist" className="mb-8">
                <h2 id="about-artist" className="text-2xl font-semibold mb-3">About the artist</h2>
                <p className="text-gray-700">A short bio or artist statement. Optionally include links to exhibitions, CV, or downloadable portfolio PDF.</p>
            </section>

            <section className="pt-6 border-t text-center text-sm text-gray-600">
                <p>Template portfolio page — replace with real content.</p>
            </section>
        </main>
    );
}

export default Portfolio;
