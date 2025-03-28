import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = {
    Research: [
      { name: 'Genomic Sequencing', href: '#genomic-sequencing' },
      { name: 'AI Analytics', href: '#ai-analytics' },
      { name: 'Clinical Trials', href: '#clinical-trials' },
      { name: 'Publications', href: '#publications' }
    ],
    Solutions: [
      { name: 'For Pharmaceutical Companies', href: '#pharma' },
      { name: 'For Healthcare Providers', href: '#healthcare' },
      { name: 'For Research Institutions', href: '#research' },
      { name: 'For Patients', href: '#patients' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'News', href: '#news' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white rounded-lg mx-5 my-3  shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors`}>
           <svg width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <defs>
                <style>{`
                  .cls-1{fill:#77acf1;}
                  .cls-2{fill:${isScrolled?'rgb(37 99 235)':'#ffffff;'}
                `}</style>
              </defs>
              <g data-name="28. Pile Box" id="_28._Pile_Box">
                <path className="cls-1" d="M6,16h4a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16A0,0,0,0,1,6,16Z"/>
                <path className="cls-1" d="M22,16h4a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H23a1,1,0,0,1-1-1V16A0,0,0,0,1,22,16Z"/>
                <path className="cls-1" d="M14,4h4a0,0,0,0,1,0,0V7a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V4A0,0,0,0,1,14,4Z"/>
                <path className="cls-2" d="M31,27h-.18A3,3,0,0,0,31,26V18a3,3,0,0,0-3-3H22.82A3,3,0,0,0,23,14V6a3,3,0,0,0-3-3H12A3,3,0,0,0,9,6v8a3,3,0,0,0,.18,1H4a3,3,0,0,0-3,3v8a3,3,0,0,0,.18,1H1a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2ZM11,14V6a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H12A1,1,0,0,1,11,14Zm6.18,13H14.82A3,3,0,0,0,15,26V18a3,3,0,0,0-.18-1h2.36A3,3,0,0,0,17,18v8A3,3,0,0,0,17.18,27ZM4,27a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1Zm16,0a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1Z"/>
                <path className="cls-2" d="M7,25H6a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"/>
                <path className="cls-2" d="M23,25H22a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/>
                <path className="cls-2" d="M15,13H14a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/>
              </g>
            </svg>
            </div>
            <span className={`font-bold text-xl ${
              isScrolled ? 'hidden text-gray-900' : 'flex text-white'
            }`}>
              BioInnovate Labs
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(navigationItems).map(([category, items]) => (
              <div 
                key={category}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 font-medium ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-blue-600' 
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === category && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isScrolled
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-white hover:text-blue-100'
              }`}>
                Login
              </button>
              <button className={`px-5 py-2 rounded-lg font-medium transition-all ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}>
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="container mx-auto px-4 py-4">
              {Object.entries(navigationItems).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <button className="w-full px-5 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Login
                </button>
                <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;