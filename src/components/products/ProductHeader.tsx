
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal, usePulseAnimation } from '@/utils/animations';

const ProductHeader = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const pulseRef = usePulseAnimation();
  
  return (
    <section 
      ref={headerRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div 
        className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-livrr-green/10 to-transparent"
        ref={pulseRef}
      />
      
      <div className={`container transition-all duration-700 ${
        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-livrr-green/10 text-livrr-green-dark px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            Pure • Natural • Organic
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-livrr-green-dark">
            Products That Enhance Longevity
          </h1>
          
          <p className="text-lg text-livrr-gray-dark mb-10">
            Discover our curated selection of organic foods, supplements, and wellness products
            designed to support your journey toward optimal health and longevity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#categories" 
              className="button-primary group"
            >
              <span className="flex items-center gap-2">
                Explore Categories
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#featured" 
              className="button-secondary"
            >
              View Featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;
