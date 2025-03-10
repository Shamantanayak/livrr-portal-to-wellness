
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal, usePulseAnimation } from '@/utils/animations';
import { Cpu, Zap, BrainCircuit, WifiOff, SmartphoneCharging, Activity, Watch, BadgeCheck, Clock, BarChart4, Sparkles } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';
import { useToast } from "@/hooks/use-toast";
import { toast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';
import Waitlist from '@/components/Waitlist';

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
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || "0.5";
        const yPos = -(scrollY * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gradient-to-b from-white to-livrr-beige/10 overflow-hidden">
      <Navbar />
      
      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section 
          ref={headerRef}
          className="relative py-20 md:py-28"
        >
          {/* Background elements */}
          <div className="absolute -z-10 inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-livrr-green/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-livrr-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute top-10 right-10 w-20 h-20 animate-pulse bg-yellow-500/10 rounded-full blur-xl"></div>
            <div 
              className="absolute top-0 left-0 w-full h-full opacity-20"
              style={{ 
                backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(76, 175, 80, 0.3) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(33, 150, 243, 0.3) 0%, transparent 30%)'
              }}
            ></div>
          </div>
          
          <div 
            className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-livrr-green/5 to-transparent"
            ref={pulseRef}
          />
          
          <div className={`container transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-livrr-green/20 to-livrr-blue/20 text-livrr-green-dark rounded-full text-sm font-medium mb-4 border border-livrr-green/10">
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-livrr-blue" />
                    <span>Coming Soon</span>
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-livrr-green-dark relative">
                  Livrr <span className="text-livrr-blue inline-block relative">α
                    <span className="absolute -top-2 right-0 text-xl bg-gradient-to-r from-livrr-green to-livrr-blue bg-clip-text text-transparent animate-pulse">BETA</span>
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
                <div className="relative z-10 animation-float flex justify-center">
                  <img 
                    src="/lovable-uploads/ffde7008-ba37-42d6-8b1c-82590d605e0f.png" 
                    alt="Livrr Alpha Algorithm Visualization" 
                    className="rounded-lg shadow-2xl max-w-full h-auto object-contain max-h-[400px]"
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-livrr-green/20 to-livrr-blue/20 blur-xl rounded-full transform scale-90 opacity-80"></div>
                  
                  {/* Animated elements */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-livrr-green rounded-full animate-ping"></div>
                    <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-livrr-blue rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-purple-500/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
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
                <div className="relative flex justify-center">
                  <img 
                    src="/lovable-uploads/23504447-cda8-4dd3-96bc-a11bb140ec01.png" 
                    alt="Livrr Alpha Algorithm Flow" 
                    className="w-full max-w-[800px] h-auto rounded-lg shadow-md object-contain"
                    style={{ maxHeight: "400px" }}
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
                    className="glass-card text-center p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="bg-gradient-to-r from-livrr-green/20 to-livrr-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-livrr-green">
                      {metric.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-livrr-green-dark bg-gradient-to-r from-livrr-green to-livrr-blue bg-clip-text text-transparent">{metric.value}</h3>
                    <p className="text-livrr-gray-dark text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-4">
                Transform Your Digital Lifestyle
              </h2>
              <p className="text-lg text-livrr-gray-dark max-w-3xl mx-auto">
                Discover how Livrr α helps you maintain a healthy relationship with technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="glass-card p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-livrr-green/10 to-transparent rounded-bl-full"></div>
                
                <h3 className="text-2xl font-display font-semibold text-livrr-green-dark mb-4">Before Livrr α</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span>3+ hours daily spent mindlessly scrolling through social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span>Constant digital distractions preventing deep work and focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span>Tech-induced anxiety and disrupted sleep patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span>Disconnected health tracking data across multiple apps</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-livrr-blue/10 to-transparent rounded-bl-full"></div>
                
                <h3 className="text-2xl font-display font-semibold text-livrr-blue mb-4">After Livrr α</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Mindful screen time with intelligent alerts when you're scrolling too long</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Scheduled focus time and digital wellness breaks throughout the day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Improved sleep quality through evening device usage optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Unified health dashboard combining data from all your devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Early Access */}
        <section id="early-access" className="py-20 bg-livrr-beige/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-6">
                Get Early Access to Livrr α
              </h2>
              <p className="text-lg text-livrr-gray-dark mb-6">
                Join our exclusive beta testing program and be among the first to experience the future of digital wellness.
              </p>
              
              <div className="bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10 p-8 rounded-xl mb-12">
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-livrr-green/10 flex items-center justify-center text-livrr-green mr-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-livrr-gray-dark">Sign Up</h4>
                  </div>
                  <p className="text-sm text-livrr-gray">Join our waitlist to be considered for the beta program</p>
                </div>
                
                <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-livrr-green/10 flex items-center justify-center text-livrr-green mr-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-livrr-gray-dark">Get Selected</h4>
                  </div>
                  <p className="text-sm text-livrr-gray">If chosen, you'll receive an invitation with installation instructions</p>
                </div>
                
                <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-livrr-green/10 flex items-center justify-center text-livrr-green mr-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-livrr-gray-dark">Experience Livrr α</h4>
                  </div>
                  <p className="text-sm text-livrr-gray">Install the app, connect your devices, and transform your digital life</p>
                </div>
              </div>
            </div>
            
            <Waitlist />
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-4">
                Early Tester Feedback
              </h2>
              <p className="text-lg text-livrr-gray-dark max-w-3xl mx-auto">
                Here's what our initial users are saying about Livrr α
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/616cfb5d-5174-4a03-92d2-1d81eb5bcc7b.png" 
                      alt="Testimonial user" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-livrr-green-dark">Sarah K.</h4>
                    <p className="text-xs text-livrr-gray">Digital Marketer, 34</p>
                  </div>
                </div>
                <p className="text-livrr-gray-dark italic">
                  "Livrr α has completely changed my relationship with my phone. I'm saving at least 2 hours daily that I used to waste on social media."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/2c2efda5-e17b-4942-9261-576d0886330b.png" 
                      alt="Testimonial user" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-livrr-green-dark">Michael T.</h4>
                    <p className="text-xs text-livrr-gray">Software Engineer, 28</p>
                  </div>
                </div>
                <p className="text-livrr-gray-dark italic">
                  "The API integration is brilliant. I connected all my devices and now have a complete picture of my health and digital habits in one place."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-livrr-green to-livrr-blue flex items-center justify-center text-white font-bold">
                    JL
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-livrr-green-dark">Jennifer L.</h4>
                    <p className="text-xs text-livrr-gray">Yoga Instructor, 41</p>
                  </div>
                </div>
                <p className="text-livrr-gray-dark italic">
                  "The mindful alerts are game-changing. I no longer find myself endlessly scrolling. My screen time is down 65% and I feel so much more present!"
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${index < 4 ? 'text-yellow-500' : 'text-yellow-300'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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

