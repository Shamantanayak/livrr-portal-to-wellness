
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a 
              href="#" 
              className="text-2xl font-display font-bold text-livrr-green-dark inline-block mb-4"
            >
              Livrr
            </a>
            <p className="text-livrr-gray-dark mb-6 max-w-xs">
              Promoting longevity through health tracking, fitness assistance, and organic food solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/livrrtribe/profilecard/?igsh=MWFxYTJnYjE3bzR4dg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-livrr-green/10 hover:bg-livrr-green rounded-full flex items-center justify-center text-livrr-green hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/livrr120670" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-livrr-green/10 hover:bg-livrr-green rounded-full flex items-center justify-center text-livrr-green hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-livrr-green/10 hover:bg-livrr-green rounded-full flex items-center justify-center text-livrr-green hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-livrr-gray-dark mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Press
                </a>
              </li>
              <li>
                <a href="/articles" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Articles
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-livrr-gray-dark mb-4">
              Features
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Health Tracking
                </a>
              </li>
              <li>
                <a href="#features" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Fitness Assistance
                </a>
              </li>
              <li>
                <a href="#features" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Organic Marketplace
                </a>
              </li>
              <li>
                <a href="#features" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Doctor Consultations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-livrr-gray-dark mb-4">
              Join Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/livrr-tribe" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Livrr Tribe
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  #LivrrTribe Movement
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Ambassador Program
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  <Instagram className="w-4 h-4" />
                  <span>@livrrtribe</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-livrr-gray text-sm mb-4 md:mb-0">
            © {currentYear} Livrr. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300 text-sm">
              Privacy
            </a>
            <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300 text-sm">
              Terms
            </a>
            <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
