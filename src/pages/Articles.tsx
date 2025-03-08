
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { useScrollReveal } from '@/utils/animations';
import { Newspaper, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
  category: string;
  url: string;
}

// Enhanced articles with more focused content on longevity, sages, and traditional practices
const sampleArticles: Article[] = [
  {
    id: 1,
    title: "The Secrets of 100+ Year Old Sages: Ancient Wisdom for Modern Longevity",
    description: "Discover how Himalayan sages maintain extraordinary health well beyond 100 years through specific meditation techniques and lifestyle practices.",
    image: "https://images.unsplash.com/photo-1578843493941-c4241c94a3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Longevity Research Journal",
    date: "2023-05-15",
    category: "Ancient Wisdom",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6125071/"
  },
  {
    id: 2,
    title: "Vrushis: The Plant Compounds That Extended Lifespans in Traditional Communities",
    description: "Research into historical texts reveals how specific 'vrushi' compounds found in rare Himalayan plants activate longevity pathways and cellular regeneration.",
    image: "https://images.unsplash.com/photo-1506365069540-904bcc762636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Health Sciences Journal",
    date: "2023-06-02",
    category: "Traditional Medicine",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0944711318300151"
  },
  {
    id: 3,
    title: "Fasting Rituals of Centenarian Yogis: Scientific Validation of Ancient Practices",
    description: "Modern scientific analysis confirms how the specific fasting protocols of long-lived yogis activate autophagy and cellular cleansing mechanisms.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Medical Research Weekly",
    date: "2023-07-10",
    category: "Nutrition",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMra1905136"
  },
  {
    id: 4,
    title: "Rare Herbs Used by 100+ Year Old Sadhus for Cognitive Preservation",
    description: "A rare look into the herbal formulations used by century-old sadhus to maintain sharp cognitive function and neural plasticity throughout their long lives.",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Natural Health Magazine",
    date: "2023-08-05",
    category: "Herbal Medicine",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0378874117321955"
  },
  {
    id: 5,
    title: "The Breath Techniques of Mountain Sages: How Specific Pranayama Extends Life",
    description: "Investigation into the specific breathing protocols practiced by long-lived mountain sages reveals how controlled breath work alters genetic expression and longevity.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Yogic Science Journal",
    date: "2023-09-12",
    category: "Breathwork",
    url: "https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01827/full"
  },
  {
    id: 6,
    title: "Living Beyond 100: The Daily Rituals of Himalayan Masters",
    description: "Researchers document the precise daily routines of Himalayan masters who have lived beyond 100 years, revealing surprising simplicity in their longevity practices.",
    image: "https://images.unsplash.com/photo-1551847678-53d631835d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Longevity Studies Institute",
    date: "2023-04-25",
    category: "Lifestyle",
    url: "https://www.bluezones.com/2018/06/science-says-these-10-things-may-help-you-live-to-be-100/"
  },
  {
    id: 7,
    title: "The Mind-Body Practices of Ancient Vrushis for Disease Prevention",
    description: "Ancient vrushi practitioners developed specific mind-body techniques that modern science now confirms can prevent chronic disease and extend healthy lifespan.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Preventive Medicine Today",
    date: "2023-03-18",
    category: "Mind-Body",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6047893/"
  },
  {
    id: 8,
    title: "Sacred Plant Medicine: How Sages Used Rare Botanicals for Longevity",
    description: "The specific botanical preparations used by centenarian sages contain compounds now being studied by pharmaceutical companies for anti-aging properties.",
    image: "https://images.unsplash.com/photo-1566221856939-23e9278ad39a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Ethnobotany Research",
    date: "2023-02-05",
    category: "Plant Medicine",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0378874119315569"
  }
];

// List of all categories for filtering
const allCategories = Array.from(new Set(sampleArticles.map(article => article.category)));

const Articles = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    // Fetch articles - simulated API call
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        setTimeout(() => {
          setArticles(sampleArticles);
          setIsLoading(false);
          
          toast({
            title: "Ancient Wisdom Articles",
            description: "Discover the secrets of those who have lived beyond 100 years.",
          });
        }, 1000);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
        toast({
          title: "Error",
          description: "Failed to fetch articles. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchArticles();
  }, [toast]);

  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Handle article click to open in a new tab
  const handleArticleClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-livrr-beige/10">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section
          ref={headerRef}
          className="relative overflow-hidden py-20"
        >
          <div className={`container transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="bg-livrr-green/10 text-livrr-green-dark px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Ancient Wisdom For Modern Life
              </span>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-livrr-green-dark">
                Secrets of 100+ Year Old Sages
              </h1>
              
              <p className="text-lg text-livrr-gray-dark mb-6">
                Explore the ancient practices, herbal remedies, and lifestyle wisdom of those who have lived beyond a century through traditional wisdom and Vrushi science.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container">
            <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-display font-bold text-livrr-green-dark">Longevity Articles</h2>
              
              <div className="flex w-full md:w-auto flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-livrr-green/20 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-livrr-green/30"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-livrr-gray" />
                </div>
                
                <div className="relative w-full sm:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-livrr-green/20 rounded-full w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-livrr-green/30 appearance-none"
                  >
                    <option value="">All Categories</option>
                    {allCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-livrr-gray" />
                </div>
              </div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="glass-card rounded-xl overflow-hidden animate-pulse">
                    <div className="bg-gray-200 aspect-video w-full"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-livrr-gray mb-4">
                  <Newspaper className="h-16 w-16 mx-auto opacity-30" />
                </div>
                <h3 className="text-xl font-semibold text-livrr-green-dark mb-2">No Articles Found</h3>
                <p className="text-livrr-gray-dark mb-6">Try adjusting your search or filter criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="text-livrr-green hover:underline flex items-center gap-1 mx-auto"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <a 
                    key={article.id}
                    href={article.url}
                    onClick={(e) => handleArticleClick(article.url, e)}
                    className="reveal glass-card rounded-xl overflow-hidden transition-transform hover:scale-[1.02] group cursor-pointer"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium bg-livrr-green/10 text-livrr-green-dark px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-livrr-gray text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(article.date)}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-livrr-green-dark mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-livrr-gray-dark mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-livrr-gray">{article.source}</span>
                        <span className="text-livrr-green flex items-center text-sm group-hover:underline">
                          Read more
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
