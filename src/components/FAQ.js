/**
 * FAQ Component (template)
 * Generic Frequently Asked Questions page
 */

function FAQ() {
    return (
        <main id="faq-main" className="container mx-auto px-4 py-8 text-center">
            <section className="mb-8" aria-labelledby="faq-hero">
                <h1 id="faq-hero" className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Common questions and answers about this site or service. Replace these with project-specific FAQs.</p>
            </section>

            <section aria-labelledby="questions" className="mb-8 max-w-3xl mx-auto text-left">
                <h2 id="questions" className="text-2xl font-semibold mb-4 text-center">General</h2>
                <div className="space-y-4">
                    <details className="bg-white rounded shadow p-4" open={false}>
                        <summary className="font-semibold cursor-pointer">Question one?</summary>
                        <div className="mt-2 text-gray-700">Short answer for the first common question.</div>
                    </details>

                    <details className="bg-white rounded shadow p-4">
                        <summary className="font-semibold cursor-pointer">Question two?</summary>
                        <div className="mt-2 text-gray-700">Short answer for the second common question.</div>
                    </details>

                    <details className="bg-white rounded shadow p-4">
                        <summary className="font-semibold cursor-pointer">Question three?</summary>
                        <div className="mt-2 text-gray-700">Short answer for the third common question.</div>
                    </details>
                </div>
            </section>

            <section className="pt-6 border-t text-center text-sm text-gray-600">
                <p>Template FAQ page — replace with real content.</p>
            </section>
        </main>
    );
}

export default FAQ;
