import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar currentPage="services" />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-6">
              Custom websites and web applications built with modern technologies. From simple landing pages to complex e-commerce platforms.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Responsive design</li>
              <li>• Modern frameworks</li>
              <li>• Performance optimization</li>
              <li>• SEO friendly</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Mobile Development */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-6">
              Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with smooth performance.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• iOS & Android apps</li>
              <li>• Cross-platform solutions</li>
              <li>• App Store optimization</li>
              <li>• Push notifications</li>
            </ul>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 mb-6">
              Beautiful, intuitive designs that provide exceptional user experiences. From wireframes to final designs.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• User research</li>
              <li>• Wireframing & prototyping</li>
              <li>• Visual design</li>
              <li>• Usability testing</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive digital marketing strategies to increase your online presence and drive more customers to your business.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• SEO optimization</li>
              <li>• Social media marketing</li>
              <li>• Content strategy</li>
              <li>• Analytics & reporting</li>
            </ul>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* E-commerce Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600 mb-6">
              Complete online store solutions with secure payment processing, inventory management, and customer analytics.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Online store setup</li>
              <li>• Payment integration</li>
              <li>• Inventory management</li>
              <li>• Order tracking</li>
            </ul>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Consulting */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Consulting</h3>
            <p className="text-gray-600 mb-6">
              Strategic technology consulting to help you make informed decisions about your digital transformation journey.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Technology strategy</li>
              <li>• System architecture</li>
              <li>• Digital transformation</li>
              <li>• Technical audits</li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business goals, target audience, and project requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy and create detailed project plans and timelines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">
                Our team brings your project to life using the latest technologies and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">
                We deploy your solution and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $999
                <span className="text-lg font-normal text-gray-600">/project</span>
              </div>
              <ul className="text-gray-600 space-y-3 mb-8">
                <li>• Landing page design</li>
                <li>• Responsive layout</li>
                <li>• Basic SEO setup</li>
                <li>• 3 revisions included</li>
                <li>• 30 days support</li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $2,999
                <span className="text-lg font-normal text-gray-600">/project</span>
              </div>
              <ul className="text-gray-600 space-y-3 mb-8">
                <li>• Custom website design</li>
                <li>• Content management system</li>
                <li>• Advanced SEO optimization</li>
                <li>• Contact forms & integrations</li>
                <li>• 5 revisions included</li>
                <li>• 90 days support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                Custom
                <span className="text-lg font-normal text-gray-600">/quote</span>
              </div>
              <ul className="text-gray-600 space-y-3 mb-8">
                <li>• Complex web applications</li>
                <li>• E-commerce functionality</li>
                <li>• Custom integrations</li>
                <li>• Performance optimization</li>
                <li>• Unlimited revisions</li>
                <li>• 1 year support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-6">Let's discuss your project and bring your ideas to life.</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </a>
        </div>
      </main>

     <Footer/>
    </div>
  );
}