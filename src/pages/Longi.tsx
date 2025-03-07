
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Send, Bot, User, Sparkles, Brain, Activity, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Longi = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; timestamp: Date }[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Longi, your Livrr medical AI assistant. I can answer questions about longevity, wellness, fitness, and medical health. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = {
      role: 'user' as const,
      content: inputMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Medical-focused responses
    setTimeout(() => {
      const responses = [
        "Based on peer-reviewed medical research, regular exercise and a plant-based diet rich in antioxidants can support your longevity goals and reduce risk of cardiovascular disease.",
        "The medical literature suggests intermittent fasting has shown promising results for cellular repair and metabolic health in several clinical studies.",
        "From a medical perspective, quality sleep is crucial for immune function and recovery. Aim for 7-9 hours of uninterrupted sleep each night for optimal health outcomes.",
        "Medical research indicates that chronic stress management techniques like meditation have been linked to reduced inflammatory markers and improved longevity indicators.",
        "Clinical studies demonstrate that regular strength training helps maintain muscle mass and bone density as you age, which is critical for mobility and independence in later years.",
        "Medical guidelines recommend proper hydration for optimal cellular function. The Institute of Medicine suggests approximately 3.7 liters daily for men and 2.7 liters for women."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage = {
        role: 'assistant' as const,
        content: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      
      toast({
        title: "Medical Insight",
        description: "New health information available!",
        variant: "default",
      });
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const wellnessCategories = [
    { icon: <Brain className="h-5 w-5" />, label: "Cognitive Health" },
    { icon: <Heart className="h-5 w-5" />, label: "Heart Health" },
    { icon: <Activity className="h-5 w-5" />, label: "Fitness" },
    { icon: <Sparkles className="h-5 w-5" />, label: "Nutrition" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-livrr-beige/10">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-livrr-green-dark mb-4">
              Longi - Medical AI Assistant
            </h1>
            <p className="text-livrr-gray-dark max-w-2xl mx-auto">
              Get personalized medical answers about health, longevity, nutrition, and fitness from our specialized healthcare AI.
            </p>
            <div className="mt-4 bg-livrr-green/10 text-livrr-green-dark px-4 py-2 rounded-lg inline-block">
              Join Livrr thrive longevity
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Suggested Topics */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-livrr-green-dark mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Medical Topics
                </h3>
                
                <div className="space-y-2">
                  {wellnessCategories.map((category) => (
                    <button 
                      key={category.label}
                      onClick={() => setInputMessage(`Tell me about ${category.label.toLowerCase()} from a medical perspective`)}
                      className="w-full text-left p-2 rounded-lg hover:bg-livrr-beige/20 transition-colors flex items-center gap-2 text-sm"
                    >
                      {category.icon}
                      <span>{category.label}</span>
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h3 className="font-semibold text-livrr-green-dark mb-3 text-sm">Medical Questions</h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => setInputMessage("What foods promote longevity according to medical research?")}
                      className="w-full text-left p-2 rounded-lg hover:bg-livrr-beige/20 transition-colors text-xs text-livrr-gray-dark"
                    >
                      What foods promote longevity according to medical research?
                    </button>
                    <button 
                      onClick={() => setInputMessage("How can I improve my sleep quality based on clinical studies?")}
                      className="w-full text-left p-2 rounded-lg hover:bg-livrr-beige/20 transition-colors text-xs text-livrr-gray-dark"
                    >
                      How can I improve my sleep quality based on clinical studies?
                    </button>
                    <button 
                      onClick={() => setInputMessage("Best evidence-based exercises for joint health?")}
                      className="w-full text-left p-2 rounded-lg hover:bg-livrr-beige/20 transition-colors text-xs text-livrr-gray-dark"
                    >
                      Best evidence-based exercises for joint health?
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="md:w-3/4 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 bg-gradient-to-r from-livrr-green/10 to-livrr-blue/10">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-livrr-green to-livrr-blue w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-livrr-green-dark">Longi - Medical Assistant</h3>
                    <p className="text-xs text-livrr-gray-dark">Powered by advanced medical knowledge</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 max-h-[400px]">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          message.role === 'user' 
                            ? 'bg-livrr-green text-white rounded-tr-none' 
                            : 'bg-gray-100 text-livrr-gray-dark rounded-tl-none'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.role === 'assistant' && (
                            <Bot className="h-4 w-4 text-livrr-green" />
                          )}
                          {message.role === 'user' && (
                            <User className="h-4 w-4 text-white" />
                          )}
                          <span className="text-xs opacity-70">
                            {message.role === 'assistant' ? 'Longi' : 'You'} • {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl p-3 bg-gray-100 text-livrr-gray-dark rounded-tl-none">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-livrr-green" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-livrr-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-livrr-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-livrr-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask a medical question about health and wellness..."
                    className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-livrr-green/30"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-livrr-green to-livrr-blue text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
                <p className="text-xs text-center mt-2 text-livrr-gray-dark">
                  Ask about medical research, clinical studies, nutrition, fitness, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Longi;
