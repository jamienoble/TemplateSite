/**
 * Contact Component
 * Displays static contact information
 * Includes contact details and a message form layout
 */

function Contact() {
    return (
        <div className="container mx-auto px-4 py-8 fade-in">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600">
                    We'd love to hear from you! Get in touch with us through any of the following channels.
                </p>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Email Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="flex items-start">
                        <div className="text-blue-600 text-3xl mr-4">📧</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
                            <p className="text-gray-600 mb-2">
                                Send us an email and we'll get back to you within 24 hours.
                            </p>
                            <a 
                                href="mailto:info@reactblog.com" 
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                info@reactblog.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="flex items-start">
                        <div className="text-green-600 text-3xl mr-4">📞</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                            <p className="text-gray-600 mb-2">
                                Give us a call during business hours (Mon-Fri, 9AM-5PM).
                            </p>
                            <a 
                                href="tel:+1234567890" 
                                className="text-green-600 hover:text-green-800 font-medium"
                            >
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="flex items-start">
                        <div className="text-purple-600 text-3xl mr-4">📍</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Address</h3>
                            <p className="text-gray-600">
                                123 React Street<br />
                                Tech City, TC 12345<br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                    <div className="flex items-start">
                        <div className="text-pink-600 text-3xl mr-4">🌐</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Social Media</h3>
                            <p className="text-gray-600 mb-2">
                                Connect with us on social media platforms.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                                <a href="#" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
                                <a href="#" className="text-purple-600 hover:text-purple-800">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-lg mb-6 opacity-90">
                    Fill out the form below and we'll respond as soon as possible.
                </p>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                    <p className="text-center text-lg">
                        📝 Contact form coming soon!
                    </p>
                    <p className="text-center text-sm mt-2 opacity-80">
                        For now, please use the contact information above to reach us.
                    </p>
                </div>
            </div>
        </div>
    );
}
