
import React from 'react';

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
              <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </a>
              <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </a>
              <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
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
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Blog
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
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-livrr-gray hover:text-livrr-green transition-colors duration-300">
                  GDPR
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
