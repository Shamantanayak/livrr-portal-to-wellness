
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { useScrollReveal, usePulseAnimation } from '@/utils/animations';
import { Users, Leaf, Shield, Activity, ArrowRight, Award, Clock, Heart } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';

const LivrrTribe = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const pulseRef = usePulseAnimation();
  
  const tribeStatistics = [
    { value: "25,000+", label: "Tribe Members", icon: <Users className="h-6 w-6" /> },
    { value: "15%", label: "Improved Immune Response", icon: <Shield className="h-6 w-6" /> },
    { value: "42%", label: "Reduced Illness Reports", icon: <Activity className="h-6 w-6" /> },
    { value: "7+", label: "Years Added to Lifespan", icon: <Clock className="h-6 w-6" /> },
  ];
  
  const tribeFeatures = [
    {
      title: "Disease Resistance Network",
      description: "Our members benefit from shared immunity knowledge and practices that help resist common infections and diseases.",
      icon: <Shield className="h-10 w-10" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Toxic Environment Protection",
      description: "Learn proven strategies to counteract the negative effects of environmental toxins and stressors.",
      icon: <Leaf className="h-10 w-10" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Longevity Support Group",
      description: "Connect with fellow tribe members focused on extending not just lifespan, but healthspan.",
      icon: <Heart className="h-10 w-10" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Age Reversal Practices",
      description: "Access traditional and modern techniques shown to slow or reverse biological aging markers.",
      icon: <Clock className="h-10 w-10" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Achievement Recognition",
      description: "Celebrate milestones and health improvements with our community recognition system.",
      icon: <Award className="h-10 w-10" />,
      color: "from-livrr-green to-livrr-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-livrr-beige/10">
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
                Join Livrr thrive longevity
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-livrr-green-dark">
                The Livrr Tribe Community
              </h1>
              
              <p className="text-lg text-livrr-gray-dark mb-6">
                We are on the journey to build a 1 Million+ high-immune community in the next 5 years. 
                Our tribe members are resistant to different infections and lead disease-free lives despite our toxic environment.
              </p>
              
              <div className="bg-livrr-beige/30 p-6 rounded-xl mb-10">
                <p className="text-livrr-green-dark font-medium text-lg">
                  "Join the hands with us in our movement to extend human lifespan from 70 to 90+ years."
                </p>
              </div>
              
              <div className="flex justify-center gap-4">
                <a 
                  href="#join-movement" 
                  className="button-primary group"
                >
                  <span className="flex items-center gap-2">
                    Join The Movement
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a 
                  href="#tribe-benefits" 
                  className="button-secondary"
                >
                  Explore Benefits
                </a>
              </div>
            </div>
          </div>
          
          <WaveDivider position="bottom" waveColor="fill-white" />
        </section>
        
        <section id="tribe-stats" className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tribeStatistics.map((stat, index) => (
                <div 
                  key={index} 
                  className="reveal glass-card text-center p-8 rounded-xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-livrr-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-livrr-green">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark">{stat.value}</h3>
                  <p className="text-livrr-gray-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="tribe-benefits" className="py-20 bg-livrr-beige/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">Tribe Benefits</h2>
              <p className="section-subtitle">
                Join a community focused on disease resistance and longevity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tribeFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="reveal glass-card rounded-xl overflow-hidden group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-livrr-green-dark mb-3">{feature.title}</h3>
                    <p className="text-livrr-gray-dark mb-4">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="join-movement" className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title">Join Our Movement</h2>
              <p className="text-lg text-livrr-gray-dark mb-8">
                Be part of our mission to create a community of 1 million people with enhanced immunity and longevity by 2028.
              </p>
              
              <div className="bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-display font-bold text-livrr-green-dark mb-4">From 70 to 90+ Years</h3>
                <p className="text-livrr-gray-dark mb-6">
                  Our community members follow evidence-based protocols drawn from both ancient wisdom and modern science to extend their healthy lifespan.
                </p>
                <a 
                  href="#" 
                  className="button-primary"
                >
                  I Want To Join The Tribe
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LivrrTribe;
