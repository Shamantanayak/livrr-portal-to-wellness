
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { useScrollReveal, usePulseAnimation } from '@/utils/animations';
import { Users, Leaf, Shield, Activity, ArrowRight, Award, Clock, Heart, Twitter, Instagram, Facebook, Hash, CheckCircle, Calendar, Store, Users2 } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';
import { useToast } from "@/hooks/use-toast";

const LivrrTribe = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const pulseRef = usePulseAnimation();
  const { toast } = useToast();
  
  // Form state for Join Movement
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);
  
  // Social media handles
  const socialMedia = [
    { platform: 'Instagram', handle: '@livrrtribe', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/' },
    { platform: 'Twitter', handle: '@livrrtribe', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/' },
    { platform: 'Facebook', handle: 'LivrrTribe', icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com/' },
  ];
  
  // Popular hashtags
  const hashtags = [
    '#LivrrTribe', 
    '#LiveBeyond100', 
    '#AncientWisdom', 
    '#ModernLongevity', 
    '#Vrushis',
    '#NaturalImmunity'
  ];
  
  const tribeStatistics = [
    { value: "25,000+", label: "Tribe Members", icon: <Users className="h-6 w-6" /> },
    { value: "15%", label: "Improved Immune Response", icon: <Shield className="h-6 w-6" /> },
    { value: "42%", label: "Reduced Illness Reports", icon: <Activity className="h-6 w-6" /> },
    { value: "7+", label: "Years Added to Lifespan", icon: <Clock className="h-6 w-6" /> },
  ];
  
  // Updated tribe features with correct content
  const tribeFeatures = [
    {
      title: "Weekly Progress Tracking",
      description: "Monitor your health improvements with our detailed weekly progress tracking system.",
      icon: <CheckCircle className="h-10 w-10" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Cheat Days Allowed",
      description: "Our flexible approach includes scheduled cheat days to keep your journey sustainable and enjoyable.",
      icon: <Calendar className="h-10 w-10" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Blue Zone 30 Days Full Access",
      description: "Get complete access to our exclusive Blue Zone resources and programs for a full month.",
      icon: <Shield className="h-10 w-10" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Structured Diet Plan for 10 Days",
      description: "Follow our expert-designed 10-day diet plan to kickstart your health transformation.",
      icon: <Leaf className="h-10 w-10" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Community Meet-ups",
      description: "Connect with fellow tribe members in regular community gatherings and support sessions.",
      icon: <Users2 className="h-10 w-10" />,
      color: "from-livrr-green to-livrr-blue"
    },
    {
      title: "Pure Products Discount",
      description: "Enjoy special discounts on our curated selection of organic and natural health products.",
      icon: <Store className="h-10 w-10" />,
      color: "from-teal-400 to-cyan-500"
    }
  ];
  
  const handleJoinMovement = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowForm(false);
      
      toast({
        title: "Welcome to the Livrr Tribe!",
        description: `Thank you ${name}! You've joined our movement to extend human lifespan.`,
      });
    }, 1500);
  };

  // Tribe member photos - updated with reliable images
  const tribeMembers = [
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
    "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
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
              
              <div className="bg-livrr-beige/30 p-6 rounded-xl mb-6">
                <p className="text-livrr-green-dark font-medium text-lg">
                  "Join the hands with us in our movement to extend human lifespan from 70 to 90+ years."
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {socialMedia.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-livrr-green/20 rounded-full text-sm text-livrr-green-dark transition-all hover:bg-livrr-green/10 hover:scale-105"
                  >
                    {social.icon}
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
              
              {/* Hashtag Section */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {hashtags.map((tag) => (
                  <span 
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10 rounded-full text-sm text-livrr-green-dark font-medium animate-pulse"
                    style={{animationDuration: `${3 + Math.random() * 2}s`}}
                  >
                    <Hash className="h-3 w-3" />
                    {tag.substring(1)}
                  </span>
                ))}
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
        
        {/* Tribe Photos Gallery */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="section-title text-center mb-12">Meet Our Tribe Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tribeMembers.map((photo, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 relative group"
                >
                  <img 
                    src={photo} 
                    alt={`Tribe member ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-livrr-green-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Tribe Member</p>
                      <p className="text-sm opacity-90">+{Math.floor(Math.random() * 10) + 5} years gained</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Movement Showcase */}
        <section className="py-16 bg-livrr-green/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Join The Movement</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Our global movement is changing how people think about aging. Share your journey with 
                <span className="font-semibold text-livrr-green-dark"> #LivrrTribe</span> and inspire others.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-display font-bold text-livrr-green-dark mb-4">Share Your Story</h3>
                  <p className="text-livrr-gray-dark mb-6">
                    Post your health transformation journey, favorite longevity practices, or ancestral wisdom on social media using our hashtags.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hashtags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-white/70 px-3 py-1 rounded-full text-sm text-livrr-green-dark font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {socialMedia.map((social) => (
                      <a 
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-livrr-green transition-transform hover:scale-110"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg" 
                      alt="Community member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg" 
                      alt="Community member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1153372/pexels-photo-1153372.jpeg" 
                      alt="Community member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3771809/pexels-photo-3771809.jpeg" 
                      alt="Community member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="tribe-stats" className="py-16 bg-livrr-beige/10">
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
        
        <section id="tribe-benefits" className="py-20 bg-white">
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
                  className="reveal glass-card rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
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
        
        <section id="join-movement" className="py-20 bg-livrr-beige/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title">Join Our Movement</h2>
              <p className="text-lg text-livrr-gray-dark mb-8">
                Be part of our mission to create a community of 1 million people with enhanced immunity and longevity by 2028.
              </p>
              
              <div className="bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-display font-bold text-livrr-green-dark mb-4">From 70 to 90+ Years</h3>
                
                {showForm ? (
                  <form onSubmit={handleJoinMovement} className="max-w-md mx-auto text-left">
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-livrr-gray-dark mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-livrr-green/30 rounded-lg focus:ring-2 focus:ring-livrr-green/30 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-livrr-gray-dark mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-livrr-green/30 rounded-lg focus:ring-2 focus:ring-livrr-green/30 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-livrr-gray-dark mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 border border-livrr-green/30 rounded-lg focus:ring-2 focus:ring-livrr-green/30 focus:outline-none"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="age" className="block text-sm font-medium text-livrr-gray-dark mb-1">Your Age</label>
                      <input
                        type="number"
                        id="age"
                        min="18"
                        max="120"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-3 border border-livrr-green/30 rounded-lg focus:ring-2 focus:ring-livrr-green/30 focus:outline-none"
                        placeholder="Your age"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="button-primary w-full py-3 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        "Join The Movement"
                      )}
                    </button>
                    
                    <p className="mt-4 text-xs text-livrr-gray-dark">
                      By joining, you'll receive updates about our community and programs. We respect your privacy.
                    </p>
                  </form>
                ) : (
                  <div className="text-center p-8">
                    <div className="bg-livrr-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-livrr-green">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-livrr-green-dark mb-2">
                      Thank you for joining the movement!
                    </h3>
                    <p className="text-livrr-gray-dark mb-6">
                      We're excited to have you as part of our tribe. We'll be in touch soon with more information.
                    </p>
                    <button 
                      onClick={() => setShowForm(true)}
                      className="button-secondary"
                    >
                      Add Another Member
                    </button>
                  </div>
                )}
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
