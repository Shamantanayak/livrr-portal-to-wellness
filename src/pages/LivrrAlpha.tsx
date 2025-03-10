
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal, usePulseAnimation } from '@/utils/animations';
import { Cpu, Zap, BrainCircuit, WifiOff, SmartphoneCharging, Activity, Watch, BadgeCheck, Clock, BarChart4 } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const LivrrAlpha = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal(0.1);
  const pulseRef = usePulseAnimation();
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast
    toast({
      title: "Introducing Livrr α",
      description: "Our revolutionary algorithm for a healthier digital lifestyle",
      duration: 5000,
    });
  }, [toast]);

  // Features of the Livrr α algorithm
  const alphaFeatures = [
    {
      title: "Smart Screen Time Management",
      description: "AI-powered monitoring that alerts you when you're scrolling mindlessly through reels or social media.",
      icon: <WifiOff className="h-7 w-7" />,
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Wearable Integration",
      description: "Connects to your smartwatch, fitness tracker, and other health devices for comprehensive monitoring.",
      icon: <Watch className="h-7 w-7" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Personalized Health Insights",
      description: "Provides actionable insights based on your personal health data and daily activities.",
      icon: <BrainCircuit className="h-7 w-7" />,
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Digital Detox Reminders",
      description: "Gentle nudges to take breaks from your devices and engage in mindful activities.",
      icon: <SmartphoneCharging className="h-7 w-7" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Real-time Health Monitoring",
      description: "Continuously analyzes your vital signs and activity patterns to detect potential health issues.",
      icon: <Activity className="h-7 w-7" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "API Ecosystem",
      description: "Open API architecture that integrates with your favorite health and fitness apps.",
      icon: <Cpu className="h-7 w-7" />,
      color: "from-livrr-green to-livrr-blue"
    }
  ];
  
  const keyMetrics = [
    { value: "85%", label: "Digital Wellbeing Improvement", icon: <BadgeCheck className="h-6 w-6" /> },
    { value: "68%", label: "Reduction in Mindless Scrolling", icon: <Clock className="h-6 w-6" /> },
    { value: "47%", label: "Increase in Physical Activity", icon: <BarChart4 className="h-6 w-6" /> },
    { value: "93%", label: "User Satisfaction Rate", icon: <Zap className="h-6 w-6" /> },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-livrr-beige/10">
      <Navbar />
      
      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section 
          ref={headerRef}
          className="relative py-20 md:py-28"
        >
          <div 
            className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-livrr-green/5 to-transparent"
            ref={pulseRef}
          />
          
          <div className={`container transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <span className="inline-block px-4 py-1 bg-livrr-green/10 text-livrr-green-dark rounded-full text-sm font-medium mb-4">
                  Introducing Our Revolutionary Algorithm
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-livrr-green-dark relative">
                  Livrr <span className="text-livrr-blue inline-block relative">α
                    <span className="absolute -top-2 right-0 text-xl">BETA</span>
                  </span>
                  <span className="block w-1/2 h-1 mt-2 bg-gradient-to-r from-livrr-green to-livrr-blue"></span>
                </h1>
                
                <p className="text-lg text-livrr-gray-dark mb-8">
                  An AI-powered algorithm that connects to your wearables and smartphone to make your life healthier with minimal screen time. Say goodbye to mindless scrolling and hello to mindful living.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="#features" 
                    className="button-primary"
                  >
                    Explore Features
                  </a>
                  
                  <a 
                    href="#early-access" 
                    className="button-secondary"
                  >
                    Get Early Access
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="relative z-10 animation-float">
                  <img 
                    src="/public/lovable-uploads/821d048d-90e5-4692-aacd-a66f6d0fdef8.png" 
                    alt="Livrr Alpha Algorithm Visualization" 
                    className="rounded-lg shadow-2xl max-w-full"
                  />
                  
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-livrr-green/20 to-livrr-blue/20 blur-xl rounded-full transform scale-90 opacity-80"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          <WaveDivider position="bottom" waveColor="fill-white" />
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-4">
                Powered By AI & Connected To Your Life
              </h2>
              <p className="text-lg text-livrr-gray-dark max-w-3xl mx-auto">
                Livrr α uses advanced algorithms to analyze your daily habits and provide personalized recommendations for a healthier lifestyle.
              </p>
            </div>
            
            <div 
              ref={featuresRef as React.RefObject<HTMLDivElement>}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {alphaFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-card rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-livrr-green-dark mb-3">{feature.title}</h3>
                    <p className="text-livrr-gray-dark">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-livrr-beige/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-4">
                How Livrr α Works
              </h2>
              <p className="text-lg text-livrr-gray-dark max-w-3xl mx-auto">
                Our algorithm integrates seamlessly with your digital ecosystem
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Algorithm flow diagram */}
              <div className="glass-card rounded-xl p-8 mb-12">
                <div className="relative">
                  <img 
                    src="/public/lovable-uploads/23504447-cda8-4dd3-96bc-a11bb140ec01.png" 
                    alt="Livrr Alpha Algorithm Flow" 
                    className="w-full rounded-lg shadow-md"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">API-First Architecture</h3>
                      <p>Connects to wearables, health apps, and digital services to create a comprehensive health profile.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyMetrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="glass-card text-center p-6 rounded-xl"
                  >
                    <div className="bg-livrr-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-livrr-green">
                      {metric.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-livrr-green-dark">{metric.value}</h3>
                    <p className="text-livrr-gray-dark text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Early Access */}
        <section id="early-access" className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-6">
                Get Early Access to Livrr α
              </h2>
              <p className="text-lg text-livrr-gray-dark mb-10">
                Join our exclusive beta testing program and be among the first to experience the future of digital wellness.
              </p>
              
              <div className="bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-semibold text-livrr-green-dark mb-4">
                  Limited Spots Available
                </h3>
                <p className="mb-8">
                  We're selecting a small group of users to test and provide feedback on Livrr α. Sign up now to secure your spot.
                </p>
                
                <Link 
                  to="/#waitlist" 
                  className="button-primary px-8 py-3 text-lg"
                >
                  Join The Waitlist
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LivrrAlpha;
