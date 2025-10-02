/**
 * About Component (template)
 * Minimal, accessible About page for CE Geotech
 */

function About() {
    return (
        <main id="about-main" className="container mx-auto px-4 py-8">
            <section className="mb-8 text-center" aria-labelledby="about-hero">
                <h1 id="about-hero" className="text-3xl md:text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">This is a generic About page template. Replace this text with organization-specific information, mission statements, team bios, or any other content you'd like to show here.</p>
            </section>

            <section aria-labelledby="company-overview" className="mb-8">
                <h2 id="company-overview" className="text-2xl font-semibold mb-3">Overview</h2>
                <p className="text-gray-700">Add a short overview of the company or project here. Use this space to introduce visitors to your organisation, highlight key strengths, and provide context for the rest of the site.</p>
            </section>

            <section aria-labelledby="mission" className="mb-8">
                <h2 id="mission" className="text-2xl font-semibold mb-3">Mission</h2>
                <p className="text-gray-700">State your mission, values, or positioning statement here. Keep it concise and focused on what differentiates your organisation.</p>
            </section>

            <section aria-labelledby="services" className="mb-8">
                <h2 id="services" className="text-2xl font-semibold mb-3">What we do</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Service or feature one — brief description.</li>
                    <li>Service or feature two — brief description.</li>
                    <li>Service or feature three — brief description.</li>
                    <li>Service or feature four — brief description.</li>
                </ul>
            </section>

            <section aria-labelledby="contact-cta" className="mb-8 text-center">
                <h2 id="contact-cta" className="text-2xl font-semibold mb-3">Contact</h2>
                <p className="text-gray-700 mb-4">Include a call to action — a link to the contact page, a phone number, or an email address.</p>
                <a className="inline-block bg-cyan-600 text-white px-4 py-2 rounded" href="contact.html">Contact</a>
            </section>

            <section className="pt-6 border-t text-center text-sm text-gray-600">
                <p>Template page — replace with real content.</p>
            </section>
        </main>
    );
}

export default About;
