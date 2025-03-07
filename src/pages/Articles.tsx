
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { useScrollReveal } from '@/utils/animations';
import { BookOpen, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';

const Articles = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  
  const featuredArticles = [
    {
      title: "Secrets of Sadhus: The 100+ Year Lifespan Mystery",
      excerpt: "Discover how Hindu Sadhus maintain extraordinary longevity through specific dietary practices, yoga, and meditation techniques that anyone can adopt.",
      image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      author: "Dr. Anand Sharma",
      date: "May 15, 2023",
      readTime: "12 min read",
      category: "Ancient Wisdom"
    },
    {
      title: "Vrushi Traditions: Seasonal Eating for Maximum Vitality",
      excerpt: "How ancient Ayurvedic Vrushi practitioners developed a system of eating according to seasons that modern science now confirms boosts immunity and longevity.",
      image: "https://images.unsplash.com/photo-1611072172377-9aaaa1faab4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      author: "Maya Patel, PhD",
      date: "April 3, 2023",
      readTime: "9 min read",
      category: "Nutrition"
    },
    {
      title: "The Fasting Technique of Jain Monks: Living Beyond 100",
      excerpt: "An exploration of how specific fasting protocols practiced by Jain monks activate cellular regeneration pathways that extend lifespan significantly.",
      image: "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      author: "Rajiv Mehta",
      date: "June 28, 2023",
      readTime: "15 min read",
      category: "Fasting"
    }
  ];
  
  const articles = [
    {
      title: "Meditation Techniques of 100-Year-Old Yogis",
      excerpt: "Learn the specific breathing and meditation practices used by yogis who have surpassed the century mark in perfect health.",
      image: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      date: "March 18, 2023",
      readTime: "7 min read",
      category: "Meditation"
    },
    {
      title: "The Role of Herbs in Longevity: Lessons from Ancient Healers",
      excerpt: "Which herbs have been consistently used by centenarians across cultures? We explore the scientific evidence behind these botanical wonders.",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      date: "April 22, 2023",
      readTime: "10 min read",
      category: "Herbalism"
    },
    {
      title: "Sun Gazing: The Forgotten Technique of Vitality",
      excerpt: "How controlled exposure to early morning sunlight may influence hormonal patterns that impact longevity, as practiced by ancient cultures.",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      date: "May 5, 2023",
      readTime: "8 min read",
      category: "Natural Therapies"
    },
    {
      title: "Sleep Patterns of Long-Lived Mountain Dwellers",
      excerpt: "In the Himalayan regions, people regularly live past 90. Their unique sleep routines may hold the key to their extraordinary health.",
      image: "https://images.unsplash.com/photo-1493329025335-18542a61595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      date: "June 12, 2023",
      readTime: "6 min read",
      category: "Sleep Science"
    },
    {
      title: "Living Water: How Ancient Communities Purified and Energized Water",
      excerpt: "Before modern filtration, certain communities created water with unique properties that may have contributed to their remarkable lifespans.",
      image: "https://images.unsplash.com/photo-1470125634816-3383a79c2e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      date: "July 8, 2023",
      readTime: "11 min read",
      category: "Hydration"
    },
    {
      title: "The Movement Patterns of Centenarians",
      excerpt: "It's not just about exercise—specific ways of moving throughout the day may activate longevity pathways. Learn from those who've lived longest.",
      image: "https://images.unsplash.com/photo-1516307147043-4db20518dd5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      date: "August 15, 2023",
      readTime: "9 min read",
      category: "Movement"
    }
  ];
  
  const categories = [
    "All Articles", 
    "Ancient Wisdom", 
    "Nutrition", 
    "Meditation", 
    "Fasting", 
    "Herbalism", 
    "Movement", 
    "Sleep Science"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-livrr-beige/10">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24">
        <section 
          ref={headerRef}
          className="relative overflow-hidden py-16 md:py-20"
        >
          <div className={`container transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="bg-livrr-green/10 text-livrr-green-dark px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Join Livrr thrive longevity
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-livrr-green-dark">
                Longevity Articles
              </h1>
              
              <p className="text-lg text-livrr-gray-dark mb-10">
                Discover ancient wisdom and modern science on how sadhus, vrushis, and other practitioners 
                achieve extraordinary lifespans of 100+ years.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for articles..."
                  className="w-full py-3 pl-5 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-livrr-green/30"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-livrr-green">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <WaveDivider position="bottom" waveColor="fill-white" />
        </section>
        
        <section className="py-16 bg-white">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-livrr-green-dark">
                Featured Articles
              </h2>
              <a href="#" className="text-livrr-green font-medium flex items-center gap-1 hover:underline">
                View all
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <div 
                  key={index}
                  className="reveal glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-livrr-green-dark text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-livrr-green-dark mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-livrr-gray-dark text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-livrr-green/20 flex items-center justify-center text-livrr-green">
                          <User className="h-3 w-3" />
                        </div>
                        <span className="text-xs text-livrr-gray-dark">{article.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-livrr-green" />
                        <span className="text-xs text-livrr-gray-dark">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <a 
                      href="#" 
                      className="text-livrr-green font-medium text-sm flex items-center gap-1 group-hover:underline"
                    >
                      Read article
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-livrr-beige/10">
          <div className="container">
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-livrr-green-dark">
                  All Articles
                </h2>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-livrr-green" />
                  <span className="text-sm text-livrr-gray-dark">Filter by:</span>
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-livrr-green/30">
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        index === 0 
                          ? 'bg-livrr-green text-white' 
                          : 'bg-white text-livrr-gray-dark hover:bg-livrr-green/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div 
                  key={index}
                  className="reveal glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-livrr-green-dark text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-livrr-green-dark mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-livrr-gray-dark text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-livrr-green" />
                        <span className="text-xs text-livrr-gray-dark">{article.readTime}</span>
                      </div>
                      
                      <a 
                        href="#" 
                        className="text-livrr-green font-medium text-sm flex items-center gap-1 group-hover:underline"
                      >
                        Read more
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="button-secondary">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
