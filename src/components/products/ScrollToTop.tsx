
import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  return (
    <a 
      href="#" 
      className="fixed bottom-6 right-6 bg-gradient-to-r from-livrr-green to-livrr-blue w-12 h-12 rounded-full shadow-md flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:scale-110 z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </a>
  );
};

export default ScrollToTop;
