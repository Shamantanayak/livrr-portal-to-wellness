import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Livrr Tribe', href: '/livrr-tribe' },
  { name: 'Products', href: '/products' },
  { name: 'Survey', href: '/survey' },
  { name: 'Livrr AI', href: '/longi' },
  { name: 'Articles', href: '/articles' },
  { name: 'Blue Zone', href: '/blue-zone' },
];

const Navbar = () => {
  const { activeSection } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // If it's an anchor link on the homepage
    if (href.startsWith('/#') && location.pathname !== '/') {
      // Navigate to homepage first, then scroll to the anchor
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-livrr-green-dark flex items-center"
        >
          <span className="relative">
            Livrr
            <span 
              className={`absolute -bottom-1 left-0 h-0.5 bg-livrr-green transition-all duration-300 ${
                activeSection === 'hero' ? 'w-full' : 'w-0'
              }`} 
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            // Determine if this is an internal anchor link or a page link
            const isInternalAnchor = link.href.includes('/#');
            const isExternalPage = !link.href.startsWith('/#') && link.href !== '/';
            
            return isInternalAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative font-medium hover:text-livrr-green transition-colors duration-300 ${
                  activeSection === link.href.split('#')[1] && location.pathname === '/'
                    ? 'text-livrr-green'
                    : 'text-livrr-gray-dark'
                }`}
              >
                <span>{link.name}</span>
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-livrr-green transition-all duration-300 ${
                    activeSection === link.href.split('#')[1] && location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative font-medium hover:text-livrr-green transition-colors duration-300 group
                  ${location.pathname === link.href ? 'text-livrr-green' : 'text-livrr-gray-dark'}`}
              >
                <span>{link.name}</span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-livrr-green transition-all duration-300 
                  ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-livrr-gray-dark focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-white transition-opacity duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '61px' }}
      >
        <nav className="container flex flex-col py-8 space-y-6">
          {navLinks.map((link) => {
            const isInternalAnchor = link.href.includes('/#');
            
            return isInternalAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-xl font-medium hover:text-livrr-green transition-colors duration-300 ${
                  activeSection === link.href.split('#')[1] && location.pathname === '/'
                    ? 'text-livrr-green'
                    : 'text-livrr-gray-dark'
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-medium hover:text-livrr-green transition-colors duration-300 
                  ${location.pathname === link.href ? 'text-livrr-green' : 'text-livrr-gray-dark'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
