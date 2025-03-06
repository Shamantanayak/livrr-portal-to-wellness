
import React, { useRef, useEffect } from 'react';
import { useTypewriter, useParallax } from '@/utils/animations';
import WaveDivider from './ui/WaveDivider';

const Hero = () => {
  const typedText = useTypewriter('Thrive Beyond Time', 80, 2500);
  const parallaxBg = useParallax(0.02);
  const parallaxLeaf1 = useParallax(0.05);
  const parallaxLeaf2 = useParallax(0.03);
  const parallaxCircle = useParallax(0.06);
  
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (floatingRef.current) {
        const scrollValue = window.scrollY;
        floatingRef.current.style.transform = `translateY(${scrollValue * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-b from-white to-livrr-green/5">
      <div 
        className="absolute inset-0 opacity-70"
        ref={parallaxBg}
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Decorative Elements */}
      <div 
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-livrr-green/10 animate-float" 
        ref={parallaxCircle}
      />
      <div 
        className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-livrr-blue/10 animate-pulse-slow"
        ref={parallaxLeaf1}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-livrr-beige/30 animate-spin-slow opacity-60"
        ref={parallaxLeaf2}
      />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-2 inline-block">
              <span className="bg-livrr-green/10 text-livrr-green-dark px-4 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-livrr-green-dark mb-6 leading-tight">
              <span className="relative">
                Livrr
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-livrr-green/80" />
              </span>
              <br />
              <span className="text-livrr-gray-dark h-[40px] md:h-[48px] lg:h-[60px] inline-block">
                {typedText}
                <span className="animate-pulse ml-0.5">|</span>
              </span>
            </h1>
            
            <p className="text-livrr-gray-dark text-lg md:text-xl mb-8 max-w-xl">
              Unlock your full wellness potential with our revolutionary health tracking, 
              fitness assistance, and organic food platform. Join the movement toward a 
              longer, healthier life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#waitlist" 
                className="button-primary group"
              >
                <span className="relative z-10">Join the Waitlist</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#features" 
                className="button-secondary"
              >
                Discover More
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center" ref={floatingRef}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Abstract Circles */}
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-livrr-green/10 animate-pulse-slow" />
              <div className="absolute -bottom-5 -right-5 w-48 h-48 rounded-full bg-livrr-blue/10 animate-float" />
              
              {/* Main image wrapper */}
              <div className="relative z-10 glass rounded-2xl h-full w-full overflow-hidden shadow-glass-lg">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Wellness and nature" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 glass-card px-4 py-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 rounded-full bg-livrr-green flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-livrr-green-dark">
                      Personalized health insights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WaveDivider position="bottom" waveColor="fill-white" />
    </section>
  );
};

export default Hero;
