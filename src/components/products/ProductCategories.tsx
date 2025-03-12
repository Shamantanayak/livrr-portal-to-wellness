
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'ayurveda',
    title: 'Ayurveda',
    image: 'https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg',
    description: 'Ancient Indian system of medicine using herbs, diet, and lifestyle practices.'
  },
  {
    id: 'homeopathy',
    title: 'Homeopathy',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg',
    description: 'Alternative medicine based on the concept that "like cures like" with highly diluted substances.'
  },
  {
    id: 'unani',
    title: 'Unani',
    image: 'https://images.pexels.com/photos/6087669/pexels-photo-6087669.jpeg',
    description: 'Traditional Persian and Arabic system focusing on the balance of bodily humors.'
  },
  {
    id: 'siddha',
    title: 'Siddha',
    image: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg',
    description: 'Ancient Tamil medicinal system emphasizing spiritual practices and herbal remedies.'
  },
  {
    id: 'naturopathy',
    title: 'Naturopathy',
    image: 'https://images.pexels.com/photos/5699515/pexels-photo-5699515.jpeg',
    description: 'Natural healing methods focusing on diet, lifestyle, and preventative care.'
  },
  {
    id: 'tcm',
    title: 'Traditional Chinese Medicine',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=1935', // Fixed TCM image
    description: 'Holistic approach using acupuncture, herbs, and energy balance techniques.'
  }
];

const ProductCategories = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.1);
  
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark text-center mb-6">
            Traditional Medicine Categories
            <span className="block w-full h-1 mt-2 bg-gradient-to-r from-livrr-green to-livrr-blue"></span>
          </h2>
          <p className="text-center text-livrr-gray-dark">
            We offer a comprehensive range of traditional healing systems to support your health and longevity
          </p>
        </div>
        
        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{category.description}</p>
                <a 
                  href={`#${category.id}`} 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-livrr-green"
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
