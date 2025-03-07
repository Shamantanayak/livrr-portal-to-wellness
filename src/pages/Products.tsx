import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/ui/WaveDivider';
import CustomCursor from '@/components/CustomCursor';
import { ArrowRight, ArrowUp, Leaf, Shield, Heart, Badge, Sparkles } from 'lucide-react';
import { useScrollReveal, usePulseAnimation } from '@/utils/animations';

const Products = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const pulseRef = usePulseAnimation();
  
  const productCategories = [
    {
      title: "Homeopathy",
      description: "Natural remedies that stimulate the body's self-healing mechanisms for improved wellness and vitality.",
      icon: <Leaf className="h-8 w-8" />,
      image: "/lovable-uploads/6e34af2c-c2c5-4e25-9b92-e3cb9c62c2e5.png",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Unani Medicine",
      description: "Traditional holistic healing system focusing on balancing vital humors in the body for optimal health.",
      icon: <Shield className="h-8 w-8" />,
      image: "/lovable-uploads/c75fb903-da12-44b3-be27-3c08bf44a0b7.png",
      color: "from-green-600 to-green-800"
    },
    {
      title: "Naturopathy",
      description: "Holistic approach using the natural healing power of nature to maintain health and overall wellbeing.",
      icon: <Heart className="h-8 w-8" />,
      image: "/lovable-uploads/d1fc7efd-9398-452c-bf68-6a1dba87c2eb.png",
      color: "from-emerald-400 to-green-600"
    },
    {
      title: "Ayurveda",
      description: "Ancient natural healing system focusing on perfect balance between mind, body, and spirit for longevity.",
      icon: <Sparkles className="h-8 w-8" />,
      image: "/lovable-uploads/d877c9ba-f70b-454e-b3bb-d5c54e3b1bbc.png",
      color: "from-amber-400 to-yellow-600"
    },
    {
      title: "Siddha Medicine",
      description: "Traditional South Indian medical system using herbs, minerals, and animal products for holistic healing.",
      icon: <Badge className="h-8 w-8" />,
      image: "/lovable-uploads/9f3bdcaa-b254-4fb3-b42d-0c46dd4c2cff.png",
      color: "from-stone-600 to-stone-800"
    }
  ];
  
  const dietProducts = [
    {
      name: "Keto Diet Box",
      description: "Complete meal essentials for 7 days of keto-friendly eating",
      price: "$149.99",
      image: "/lovable-uploads/c24e08c5-840d-4a5d-9b2b-8d30086e21c7.png",
      tag: "Popular",
      category: "Diet Plan"
    },
    {
      name: "Plant-Based Protein Pack",
      description: "Organic plant proteins for vegetarians and vegans",
      price: "$89.99",
      image: "/lovable-uploads/6d1e0a2f-b6f5-4575-ab34-cf6b7d7485d7.png",
      tag: "Bestseller",
      category: "Diet Plan"
    },
    {
      name: "Low-Carb Essentials",
      description: "Carb-conscious foods for managed weight loss",
      price: "$119.99",
      image: "/lovable-uploads/724eccf5-f1d3-44c2-ae25-94fa58236734.png",
      tag: "New",
      category: "Diet Plan"
    },
    {
      name: "Meal Planning Consultation",
      description: "Personalized nutrition guidance for your health goals",
      price: "$79.99",
      image: "/lovable-uploads/ffde7008-ba37-42d6-8b1c-82590d605e0f.png",
      tag: "Essential",
      category: "Diet Plan"
    },
    {
      name: "7-Day Balanced Meal Plan",
      description: "Complete weekly meal plan with shopping list and recipes",
      price: "$59.99",
      image: "/lovable-uploads/b13c76d6-d0a5-4749-a854-b73df29be6c4.png",
      tag: "New",
      category: "Diet Plan"
    },
    {
      name: "Health Coach Consultation",
      description: "One-on-one session with a certified nutrition expert",
      price: "$99.99",
      image: "/lovable-uploads/74dbb061-3495-4f67-bb93-3b705eff61ed.png",
      tag: "Premium",
      category: "Diet Plan"
    }
  ];
  
  const featuredProducts = [
    {
      name: "Organic Superfood Mix",
      price: "$24.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      tag: "Bestseller"
    },
    {
      name: "Longevity Support Complex",
      price: "$39.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      tag: "New"
    },
    {
      name: "Premium Yoga Set",
      price: "$89.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      tag: "Popular"
    },
    {
      name: "Natural Sleep Aid",
      price: "$19.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      tag: "Essential"
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-white to-livrr-beige/10 min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24">
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
              
              <div className="flex justify-center gap-4">
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
          
          <WaveDivider position="bottom" waveColor="fill-white" />
        </section>
        
        <section id="categories" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">Traditional Medicine Categories</h2>
              <p className="section-subtitle">
                We offer a comprehensive range of traditional healing systems to support your health and longevity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className="reveal glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-30`}></div>
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 glass w-12 h-12 rounded-full flex items-center justify-center text-livrr-green-dark">
                      {category.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-livrr-green-dark mb-2">{category.title}</h3>
                    <p className="text-livrr-gray-dark mb-4">{category.description}</p>
                    <a href="#waitlist" className="text-livrr-green font-medium flex items-center gap-2 group-hover:underline">
                      Browse Products
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="diet-plans" className="py-20 bg-gradient-to-b from-livrr-beige/10 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">Diet-Based Products</h2>
              <p className="section-subtitle">
                Specially curated diet plans and products to support your nutritional needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dietProducts.map((product, index) => (
                <div 
                  key={product.name}
                  className="reveal glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute top-4 right-4 bg-livrr-green text-white text-xs font-medium px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 bg-livrr-beige/80 backdrop-blur-sm text-livrr-green-dark text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-livrr-green-dark">{product.name}</h3>
                      <span className="font-bold text-livrr-green">{product.price}</span>
                    </div>
                    
                    <p className="text-livrr-gray-dark text-sm mb-4">{product.description}</p>
                    
                    <a href="#waitlist" className="w-full button-primary text-sm py-2 block text-center">
                      Join Waitlist
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="featured" className="py-20 bg-gradient-to-b from-white to-livrr-beige/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Our most popular and highly-rated products for optimal wellness
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.name}
                  className="reveal glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute top-4 right-4 bg-livrr-green text-white text-xs font-medium px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-livrr-green-dark">{product.name}</h3>
                      <span className="font-bold text-livrr-green">{product.price}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-livrr-gray-dark">{product.rating}/5.0</span>
                    </div>
                    
                    <a href="#waitlist" className="mt-4 w-full button-primary text-sm py-2 block text-center">
                      Join Waitlist
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="#waitlist" className="button-secondary group">
                <span className="flex items-center gap-2">
                  Join Waitlist for Early Access
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-gradient-to-r from-livrr-green to-livrr-blue w-12 h-12 rounded-full shadow-md flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Products;
