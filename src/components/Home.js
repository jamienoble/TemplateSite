/**
 * CE Geotech Home Component
 * Converted from the site's homepage copy (index.html) into a React component.
 * Includes: Hero, Intro, Statistics, Services, News banner, and Location with Google Maps iframe.
 */

function Home() {
    return (
        <main id="main" className="container mx-auto px-4 py-8 fade-in">
            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white rounded-lg shadow-lg p-8 md:p-12 mb-8" aria-label="Hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">CE Geotech: Experts in Hydraulically Bound Soil Solutions for Ground Engineering Projects</h1>
                    <h2 className="text-lg md:text-xl font-medium mb-6">From site characterisation to final validation, CE Geotech ensures seamless project delivery with precision, innovation, and unmatched technical expertise.</h2>
                </div>
            </section>

            <section id="intro" className="mb-8" aria-labelledby="intro-heading">
                <h2 id="intro-heading" className="text-2xl font-semibold text-center mb-4">Cutting Edge Geotechnical</h2>
                <div className="prose max-w-3xl mx-auto text-gray-800">
                    <p>At CE Geotech, we are passionate about transforming challenging ground conditions into opportunities for innovation. As specialists in hydraulically bound soils, we deliver tailored geotechnical solutions that drive the success of ground engineering projects across the UK.</p>
                    <p>We don’t just test samples, we deliver projects! This approach ensures our clients receive the highest level of continuity and project management, all the way through a stabilisation project lifecycle; from initial site characterisation, laboratory mix design study phases, and project sign-off through on-site control and validation testing.</p>
                    <p>Discover how CE Geotech can add value to your next project—download our <a className="font-semibold text-cyan-600 underline" href="Files/CE GeoTech Cap Stat Overview 12pp v3.indd.pdf" target="_blank" rel="noopener noreferrer">Capability Statement (PDF)</a> to explore our full range of services and expertise.</p>
                </div>
            </section>

            <section id="statistics" className="mb-8" aria-label="Statistics">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="mb-2">
                            <span className="inline-block w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">🏗️</span>
                        </div>
                        <div className="text-3xl font-bold">1000+</div>
                        <div className="mt-1">Projects Completed</div>
                    </div>

                    <div>
                        <div className="mb-2">
                            <span className="inline-block w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">👥</span>
                        </div>
                        <div className="text-3xl font-bold">60+</div>
                        <div className="mt-1">Clients Served</div>
                    </div>

                    <div>
                        <div className="mb-2">
                            <span className="inline-block w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">🌍</span>
                        </div>
                        <div className="text-3xl font-bold">8</div>
                        <div className="mt-1">Years Experience</div>
                    </div>

                    <div>
                        <div className="mb-2">
                            <span className="inline-block w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">🧪</span>
                        </div>
                        <div className="text-3xl font-bold">20,000+</div>
                        <div className="mt-1">Laboratory Tests Performed</div>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <section id="services" className="mb-8" aria-label="Services">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <article className="relative rounded-lg overflow-hidden shadow-lg">
                        <div className="p-6 bg-[url('Files/010.webp')] bg-cover bg-center h-48 flex items-end text-white">
                            <div className="bg-black bg-opacity-40 p-4 rounded w-full">
                                <h3 className="text-xl font-bold">Site Testing Services</h3>
                            </div>
                        </div>
                        <div className="p-6 bg-white">
                            <p className="text-gray-700">End-to-end site testing and control for soil stabilisation: site visits, sampling, trial pitting, DCP and on-site validation during construction. We deliver timely, actionable data and expert interpretation for difficult ground conditions.</p>
                            <a className="inline-block mt-4 text-cyan-600 font-semibold" href="LaboratoryMixDesignStudiesBootstrap.html?view=site">Learn more about Site Testing Services</a>
                        </div>
                    </article>

                    <article className="relative rounded-lg overflow-hidden shadow-lg">
                        <div className="p-6 bg-[url('Files/009.webp')] bg-cover bg-center h-48 flex items-end text-white">
                            <div className="bg-black bg-opacity-40 p-4 rounded w-full">
                                <h3 className="text-xl font-bold">Laboratory Mix Design Studies</h3>
                            </div>
                        </div>
                        <div className="p-6 bg-white">
                            <p className="text-gray-700">Project-specific laboratory mix design and optimisation for hydraulically bound soils. Typical tests: OMC/MDD, MCV, sulphate suite, PSD, plasticity and lime demand — producing validated mixes ready for site implementation.</p>
                            <a className="inline-block mt-4 text-cyan-600 font-semibold" href="LaboratoryMixDesignStudiesBootstrap.html?view=lab">Learn more about Laboratory Mix Design Studies</a>
                        </div>
                    </article>
                </div>
            </section>

            {/* News Banner */}
            <section id="news" className="mb-8 bg-gray-50 rounded-lg p-6" aria-labelledby="news-heading">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-2/3">
                        <h2 id="news-heading" className="text-2xl font-semibold mb-2">News</h2>
                        <p className="text-gray-700">Keep up to date with the latest news, updates, and project highlights from CE Geotech. Stay informed about our innovations, achievements, and industry insights.</p>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0 flex items-center justify-center">
                        <a className="bg-cyan-600 text-white px-4 py-2 rounded shadow" href="news.html">View All News</a>
                    </div>
                </div>
            </section>

            {/* Location / Google Maps */}
            <section id="location" className="mb-8" aria-labelledby="location-heading">
                <h2 id="location-heading" className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-7">
                        <div className="rounded shadow overflow-hidden">
                            <iframe
                                title="CE Geotech Location map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9566.316934463834!2d-1.4925063!3d53.1715886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x882ba5afaae03d08!2sCEG%20Laboratories!5e0!3m2!1sen!2suk!4v1621333115318!5m2!1sen!2suk"
                                width="100%"
                                height="350"
                                style={{border:0, display: 'block'}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                aria-label="Map showing CE Geotech location"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-5 flex items-center">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">CE Geotech / CEG Laboratories</h3>
                            <address className="not-italic text-gray-700 mb-2">
                                Ashover Business Centre,<br />
                                Matlock Road, Kelstedge,<br />
                                Ashover, Derbyshire,<br />
                                S45 0DX, United Kingdom
                            </address>
                            <p className="mb-1">T: <a className="font-semibold text-cyan-600" href="tel:+441629584416">(+44) 01629 584 416</a></p>
                            <p>E: <a className="font-semibold text-cyan-600" href="mailto:enquiries@cegeotech.co.uk">enquiries@cegeotech.co.uk</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimal footer contact/snippet (keeps contact info visible on home page) */}
            <section className="pt-6 border-t text-center text-sm text-gray-600">
                <p>CE Geotech is a multidisciplinary geotechnical solution provider for hydraulically bound material used in earth work stabilisation.</p>
                <p className="mt-2">&copy; 2025 CE Geotech. All rights reserved.</p>
            </section>
        </main>
    );
}

export default Home;
