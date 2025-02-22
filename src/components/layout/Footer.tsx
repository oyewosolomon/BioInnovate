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
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h3 className="text-xl font-bold">BioInnovate Labs</h3>
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