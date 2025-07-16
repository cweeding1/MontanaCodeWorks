interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = '' }: NavbarProps) {
  const getLinkClass = (page: string) => {
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors";
    if (currentPage === page) {
      return `${baseClass} text-gray-900 hover:text-blue-600`;
    }
    return `${baseClass} text-gray-600 hover:text-blue-600`;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-900">
                  Galaxy Of Games
                </span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className={getLinkClass('home')}>
                Home
              </a>
              <a href="/about" className={getLinkClass('about')}>
                About
              </a>
              <a href="/services" className={getLinkClass('services')}>
                Services
              </a>
              <a href="/contact" className={getLinkClass('contact')}>
                Contact
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}