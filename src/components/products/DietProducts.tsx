
import React from 'react';

const dietProducts = [
  {
    name: "Keto Diet Box",
    description: "Complete meal essentials for 7 days of keto-friendly eating",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?q=80&w=800",
    tag: "Popular",
    category: "Diet Plan"
  },
  {
    name: "Plant-Based Protein Pack",
    description: "Organic plant proteins for vegetarians and vegans",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1624442332789-88cd524f9e62?q=80&w=800",
    tag: "Bestseller",
    category: "Diet Plan"
  },
  {
    name: "Low-Carb Essentials",
    description: "Carb-conscious foods for managed weight loss",
    price: "$119.99",
    image: "https://images.unsplash.com/photo-1606914707708-5180546f153a?q=80&w=800",
    tag: "New",
    category: "Diet Plan"
  },
  {
    name: "Meal Planning Consultation",
    description: "Personalized nutrition guidance for your health goals",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
    tag: "Essential",
    category: "Diet Plan"
  },
  {
    name: "7-Day Balanced Meal Plan",
    description: "Complete weekly meal plan with shopping list and recipes",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=800",
    tag: "New",
    category: "Diet Plan"
  },
  {
    name: "Health Coach Consultation",
    description: "One-on-one session with a certified nutrition expert",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1508049084338-3426647764d4?q=80&w=800",
    tag: "Premium",
    category: "Diet Plan"
  }
];

const DietProducts = () => {
  return (
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
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500";
                    console.log(`Failed to load image: ${product.image}`);
                  }}
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
  );
};

export default DietProducts;
