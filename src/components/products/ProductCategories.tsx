
import React from 'react';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Badge } from 'lucide-react';

const productCategories = [
  {
    title: "Homeopathy",
    description: "Natural remedies that stimulate the body's self-healing mechanisms for improved wellness and vitality.",
    icon: <Leaf className="h-8 w-8" />,
    image: "/assets/products/homeopathy.jpg",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Unani Medicine",
    description: "Traditional holistic healing system focusing on balancing vital humors in the body for optimal health.",
    icon: <Shield className="h-8 w-8" />,
    image: "/assets/products/unani.jpg",
    color: "from-green-600 to-green-800"
  },
  {
    title: "Naturopathy",
    description: "Holistic approach using the natural healing power of nature to maintain health and overall wellbeing.",
    icon: <Heart className="h-8 w-8" />,
    image: "/assets/products/naturopathy.jpg",
    color: "from-emerald-400 to-green-600"
  },
  {
    title: "Ayurveda",
    description: "Ancient natural healing system focusing on perfect balance between mind, body, and spirit for longevity.",
    icon: <Sparkles className="h-8 w-8" />,
    image: "/assets/products/ayurveda.jpg",
    color: "from-amber-400 to-yellow-600"
  },
  {
    title: "Siddha Medicine",
    description: "Traditional South Indian medical system using herbs, minerals, and animal products for holistic healing.",
    icon: <Badge className="h-8 w-8" />,
    image: "/assets/products/siddha.jpg",
    color: "from-stone-600 to-stone-800"
  }
];

const ProductCategories = () => {
  return (
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
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1592085549010-2ef5f91b6cc9?q=80&w=500";
                    console.log(`Failed to load image: ${category.image}`);
                  }}
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
  );
};

export default ProductCategories;
