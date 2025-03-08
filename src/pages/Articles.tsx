
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { useScrollReveal } from '@/utils/animations';
import { Newspaper, Clock, ArrowRight } from 'lucide-react';
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

const sampleArticles: Article[] = [
  {
    id: 1,
    title: "Ancient Wisdom: How Sadhus Achieve Longevity Through Meditation",
    description: "Exploring the centuries-old practices of sadhus and how their meditation techniques contribute to their extraordinary lifespans.",
    image: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Wellness Today",
    date: "2023-05-15",
    category: "Traditional Practices",
    url: "#"
  },
  {
    id: 2,
    title: "The Science Behind Vrushis: Natural Plant-Based Compounds for Longevity",
    description: "Research reveals how ancient vrushi compounds from specific plants can promote cellular rejuvenation and extend lifespan.",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Health Sciences Journal",
    date: "2023-06-02",
    category: "Nutrition",
    url: "#"
  },
  {
    id: 3,
    title: "Modern Medical Study Confirms Benefits of Traditional Fasting Practices",
    description: "New research from leading universities validates the health benefits of intermittent fasting techniques practiced for centuries.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Medical Research Weekly",
    date: "2023-07-10",
    category: "Nutrition",
    url: "#"
  },
  {
    id: 4,
    title: "Himalayan Herbs: Nature's Secret to Combat Cellular Aging",
    description: "Exploring the rare herbs used by mountain communities to maintain vitality and cognitive function well into their 90s.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Natural Health Magazine",
    date: "2023-08-05",
    category: "Herbal Medicine",
    url: "#"
  },
  {
    id: 5,
    title: "Cold Exposure Therapy: Ancient Practice Now Backed by Science",
    description: "How controlled exposure to cold environments can trigger longevity pathways in the human body, a practice used for centuries.",
    image: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Biohacking Journal",
    date: "2023-09-12",
    category: "Lifestyle",
    url: "#"
  },
  {
    id: 6,
    title: "The Role of Community in Centenarian Villages: Lessons from the Blue Zones",
    description: "Study of communities with high concentrations of centenarians reveals the importance of social connections to longevity.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    source: "Social Sciences Review",
    date: "2023-04-25",
    category: "Community",
    url: "#"
  }
];

const Articles = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
            title: "Articles Updated",
            description: "Latest health and longevity articles loaded.",
          });
        }, 1500);
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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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
                Join Livrr thrive longevity
              </span>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-livrr-green-dark">
                Longevity & Wellness Articles
              </h1>
              
              <p className="text-lg text-livrr-gray-dark mb-6">
                Discover ancient wisdom and modern research on extending human lifespan naturally.
                Learn from those who have lived beyond 100 years through traditional practices.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-livrr-green-dark">Latest Articles</h2>
              
              <div className="flex items-center gap-2 text-livrr-green">
                <Newspaper className="h-5 w-5" />
                <span className="text-sm font-medium">Updated Daily</span>
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <a 
                    key={article.id}
                    href={article.url}
                    className="reveal glass-card rounded-xl overflow-hidden transition-transform hover:scale-[1.02] group"
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
