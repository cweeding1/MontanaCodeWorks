'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
  currentPage?: string;
}

interface NavItem {
  name: string;
  href: string;
  id: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define your navigation items
  const navigationItems: NavItem[] = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Contact', href: '/contact', id: 'contact' },
    { name: 'Test Blob', href: '/test-blob', id: 'test-blob' }, // Added your blob test page
  ];

  const getLinkClass = (item: NavItem) => {
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors";
    
    // Check if current page matches either the pathname or the provided currentPage prop
    const isActive = pathname === item.href || currentPage === item.id;
    
    if (isActive) {
      return `${baseClass} text-white bg-brand-blue rounded-md`;
    }
    return `${baseClass} text-gray-300 hover:text-white hover:bg-gray-700 rounded-md`;
  };

  const getMobileLinkClass = (item: NavItem) => {
    const baseClass = "block px-3 py-2 text-base font-medium transition-colors";
    
    const isActive = pathname === item.href || currentPage === item.id;
    
    if (isActive) {
      return `${baseClass} text-white bg-brand-blue rounded-md`;
    }
    return `${baseClass} text-gray-300 hover:text-white hover:bg-gray-700 rounded-md`;
  };

  return (
    <nav className="bg-brand-navy shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-white hidden sm:block">
                Montana Code Works
              </span>
              <span className="ml-2 text-lg font-semibold text-white sm:hidden">
                MCW
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.href} 
                  className={getLinkClass(item)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-32 sm:w-48 md:w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                placeholder="Search..."
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  // Close icon
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              {navigationItems.map((item) => (
                <Link
                  key={`mobile-${item.id}`}
                  href={item.href}
                  className={getMobileLinkClass(item)}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on navigation
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Debug info - Remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-yellow-100 text-yellow-800 text-xs p-2">
          <strong>Debug:</strong> Current pathname: {pathname} | Current page prop: {currentPage || 'none'}
        </div>
      )}
    </nav>
  );
}