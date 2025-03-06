
import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const Index = () => {
  const { loading } = useApp();

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [loading]);

  return (
    <>
      <Loader />
      
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <About />
          <Waitlist />
        </main>
        <Footer />
        
        {/* Back to top button */}
        <a 
          href="#" 
          className="fixed bottom-6 right-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-livrr-green transition-all duration-300 hover:bg-livrr-green hover:text-white hover:shadow-lg"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Index;
