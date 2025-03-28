import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
            <svg width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <defs>
                <style>{`
                  .cls-3{fill:#77acf1;}
                  .cls-4{fill:#ffffff;}
                `}</style>
              </defs>
              <g data-name="28. Pile Box" id="_28._Pile_Box">
                <path className="cls-3" d="M6,16h4a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16A0,0,0,0,1,6,16Z"/>
                <path className="cls-3" d="M22,16h4a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H23a1,1,0,0,1-1-1V16A0,0,0,0,1,22,16Z"/>
                <path className="cls-3" d="M14,4h4a0,0,0,0,1,0,0V7a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V4A0,0,0,0,1,14,4Z"/>
                <path className="cls-4" d="M31,27h-.18A3,3,0,0,0,31,26V18a3,3,0,0,0-3-3H22.82A3,3,0,0,0,23,14V6a3,3,0,0,0-3-3H12A3,3,0,0,0,9,6v8a3,3,0,0,0,.18,1H4a3,3,0,0,0-3,3v8a3,3,0,0,0,.18,1H1a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2ZM11,14V6a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H12A1,1,0,0,1,11,14Zm6.18,13H14.82A3,3,0,0,0,15,26V18a3,3,0,0,0-.18-1h2.36A3,3,0,0,0,17,18v8A3,3,0,0,0,17.18,27ZM4,27a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1Zm16,0a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1Z"/>
                <path className="cls-4" d="M7,25H6a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"/>
                <path className="cls-4" d="M23,25H22a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/>
                <path className="cls-4" d="M15,13H14a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/>
              </g>
            </svg>
              <h3 className="text-xl font-bold ml-2">BioInnovate Labs</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of personalized medicine through genomic innovation and AI-driven research.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'youtube'].map(platform => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 bg-blue-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Research", href: "#research" },
                { label: "Clinical Trials", href: "#trials" },
                { label: "Partnerships", href: "#partnerships" },
                { label: "News & Publications", href: "#news" },
                { label: "Careers", href: "#careers" },
                { label: "Contact Us", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Research Publications", href: "#publications" },
                { label: "Patient Resources", href: "#patients" },
                { label: "Healthcare Providers", href: "#providers" },
                { label: "Genomic Data Platform", href: "#platform" },
                { label: "Technology Licensing", href: "#licensing" },
                { label: "Investor Relations", href: "#investors" },
                { label: "Press Kit", href: "#press" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest research breakthroughs and company updates.
            </p>
            <form>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from BioInnovate Labs.
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BioInnovate Laboratories, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {[
              { label: "Privacy Policy", href: "#privacy" },
              { label: "Terms of Service", href: "#terms" },
              { label: "Cookies", href: "#cookies" },
              { label: "Accessibility", href: "#accessibility" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;