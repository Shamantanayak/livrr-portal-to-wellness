import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/utils/animations';
import { useToast } from '@/hooks/use-toast';
import { AudioLines, Video, Heart, Users, TreeDeciduous, Mountain, Sun, ArrowRight, Sparkle, Waves, CloudSun, Map, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlueZone = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const arContainerRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState('village');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showIntro, setShowIntro] = useState(true);
  const [objectsLoaded, setObjectsLoaded] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to the Blue Zone Experience",
        description: "You are now entering a virtual Blue Zone. Move your cursor to look around.",
      });
      setObjectsLoaded(true);
    }, 1500);

    const handleMouseMove = (e: MouseEvent) => {
      if (arContainerRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = arContainerRef.current.getBoundingClientRect();
        
        const normalizedX = (clientX / width) * 2 - 1;
        const normalizedY = (clientY / height) * 2 - 1;
        
        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    let gyroAvailable = false;
    
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        gyroAvailable = true;
        const normalizedX = Math.min(Math.max((e.gamma || 0) / 45, -1), 1);
        const normalizedY = Math.min(Math.max((e.beta || 0) / 45, -1), 1);
        
        setMousePosition({ x: normalizedX, y: -normalizedY });
      }
    };
    
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          setCurrentScene(prev => prev === 'village' ? 'beach' : (prev === 'mountains' ? 'village' : 'mountains'));
          toast({
            title: "Location Changed",
            description: `You moved to the ${currentScene === 'village' ? 'Beach' : (currentScene === 'mountains' ? 'Village' : 'Mountains')} area.`,
          });
          break;
        case 'ArrowRight':
          setCurrentScene(prev => prev === 'village' ? 'mountains' : (prev === 'beach' ? 'village' : 'beach'));
          toast({
            title: "Location Changed",
            description: `You moved to the ${currentScene === 'village' ? 'Mountains' : (currentScene === 'beach' ? 'Village' : 'Beach')} area.`,
          });
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      clearTimeout(introTimer);
    };
  }, [toast, currentScene]);

  const handlePlayAudio = (audioId: string) => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
      if (audio.id !== audioId) {
        audio.pause();
      }
    });
  };

  const sceneBackgrounds = {
    village: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mountains: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  };

  const sceneDescriptions = {
    village: "You're in a tranquil Blue Zone village where centenarians live their daily lives in harmony with nature. Notice the lush gardens, community spaces, and simple architecture.",
    mountains: "These mountains provide natural terrain for daily movement. Locals here often walk these paths well into their 90s, maintaining strength and cardiovascular health.",
    beach: "The coastal area provides fresh seafood rich in omega-3s and a calming environment that reduces stress. Many centenarians here swim daily."
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        ref={arContainerRef}
        className="fixed inset-0 w-full h-full z-0 overflow-hidden perspective-1000"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-out scale-110"
          style={{ 
            backgroundImage: `url(${sceneBackgrounds[currentScene as keyof typeof sceneBackgrounds]})`,
            transform: `translate3d(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px, 0) scale(1.1)`,
            filter: objectsLoaded ? 'none' : 'blur(10px)',
            transition: objectsLoaded ? 'transform 0.2s ease-out, filter 1s ease' : 'filter 1s ease'
          }}
        >
          <div className="absolute inset-0 bg-blue-500/20"></div>
        </div>

        <div 
          className="absolute top-40 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl transition-transform duration-500"
          style={{ transform: `translate3d(${-mousePosition.x * 50}px, ${-mousePosition.y * 50}px, 100px)` }}
        ></div>
        <div 
          className="absolute top-80 right-10 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl transition-transform duration-500"
          style={{ transform: `translate3d(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px, 50px)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-1/4 w-64 h-64 bg-blue-200/40 rounded-full blur-2xl transition-transform duration-500"
          style={{ transform: `translate3d(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px, 75px)` }}
        ></div>

        <div 
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full blur-md transition-transform duration-500"
          style={{ transform: `translate3d(${-mousePosition.x * 60}px, ${-mousePosition.y * 60}px, 150px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/20 rounded-full blur-sm transition-transform duration-500"
          style={{ transform: `translate3d(${-mousePosition.x * 70}px, ${-mousePosition.y * 70}px, 200px)` }}
        ></div>

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 w-11/12 max-w-2xl text-white shadow-2xl transition-all duration-500"
          style={{ transform: `translate(-50%, 0) translate3d(${-mousePosition.x * 10}px, ${-mousePosition.y * 10}px, 100px)` }}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/30 rounded-full">
              {currentScene === 'village' && <Users className="h-6 w-6" />}
              {currentScene === 'mountains' && <Mountain className="h-6 w-6" />}
              {currentScene === 'beach' && <Waves className="h-6 w-6" />}
            </div>
            <div>
              <h3 className="text-xl font-bold">{currentScene === 'village' ? 'Blue Zone Village' : currentScene === 'mountains' ? 'Mountain Pathways' : 'Coastal Living'}</h3>
              <p className="opacity-80 text-sm">{sceneDescriptions[currentScene as keyof typeof sceneDescriptions]}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-xs opacity-70">
            <div className="flex items-center gap-1">
              <Compass className="h-4 w-4" />
              <span>Use arrow keys to navigate between locations</span>
            </div>
            <div className="flex items-center gap-1">
              <Map className="h-4 w-4" />
              <span>Move mouse to look around</span>
            </div>
          </div>
        </div>
      </div>

      {showIntro && (
        <div className="fixed inset-0 z-50 bg-blue-900 flex flex-col items-center justify-center text-white transition-opacity duration-1000" style={{ opacity: showIntro ? 1 : 0 }}>
          <div className="animate-pulse mb-8">
            <CloudSun className="h-20 w-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">Enter The Blue Zone</h1>
          <p className="text-xl max-w-md text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Loading immersive experience...
          </p>
          <div className="mt-8 w-64 h-2 bg-blue-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 animate-[loading_2.5s_ease-in-out_forwards]"></div>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen bg-transparent">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        
        <main className="pt-24 pb-20 container relative z-10">
          <section ref={headerRef} className="relative py-20">
            <div className={`transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
                <CloudSun className="h-12 w-12 text-white mx-auto mb-4 animate-pulse" />
                <span className="bg-blue-500/30 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block backdrop-blur-sm">
                  Living Longer, Living Better
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white relative">
                  The Blue Zone Experience
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-blue-400 rounded-full"></span>
                </h1>
                
                <p className="text-lg text-white/90 mb-8">
                  Explore the lifestyles, practices, and wisdom of communities where people routinely live beyond 100 years 
                  with exceptional health and vitality.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <button 
                    className="px-6 py-3 bg-blue-600/80 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 backdrop-blur-sm"
                    onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Video className="h-5 w-5" />
                    <span>Watch Videos</span>
                  </button>
                  
                  <button 
                    className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg backdrop-blur-sm"
                    onClick={() => document.getElementById('audios')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <AudioLines className="h-5 w-5" />
                    <span>Listen to Stories</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-20 relative overflow-hidden">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="text-center mb-16">
                <Sparkle className="h-10 w-10 text-blue-300 mx-auto mb-2 animate-spin-slow" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative inline-block">
                  Why Blue Zones Matter
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"></span>
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">Blue Zones are regions where people live significantly longer and healthier lives. By studying these areas, we can uncover the secrets to longevity.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition group hover:-translate-y-1 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
                    <Heart className="h-8 w-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Natural Movement</h3>
                  <p className="text-white/70">People in Blue Zones move naturally throughout their day, not relying on gyms but integrating physical activity into daily life.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition group hover:-translate-y-1 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
                    <TreeDeciduous className="h-8 w-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Plant-Rich Diet</h3>
                  <p className="text-white/70">Centenarians in Blue Zones eat a predominantly plant-based diet with minimal processed foods and moderate caloric intake.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition group hover:-translate-y-1 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
                    <Users className="h-8 w-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strong Communities</h3>
                  <p className="text-white/70">Strong social connections and belonging to faith-based communities are common factors among the world's longest-lived people.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition group hover:-translate-y-1 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
                    <Sun className="h-8 w-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sense of Purpose</h3>
                  <p className="text-white/70">People in Blue Zones have a clear sense of purpose that gives meaning to their lives, often continuing to contribute well into their 90s and 100s.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="videos" className="py-20 relative">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="text-center mb-16">
                <Video className="h-10 w-10 text-blue-300 mx-auto mb-2" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative inline-block">
                  Blue Zone Videos
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"></span>
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">Watch and learn from the lifestyles of the world's longest-living communities.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card overflow-hidden rounded-xl hover:shadow-lg transition group transform hover:-translate-y-1">
                  <div className="aspect-video bg-gray-200 relative">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ff40YiMmVkU" 
                      title="Blue Zone Lifestyle"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-600 transition">Secrets of the Blue Zones</h3>
                    <p className="text-gray-600 mb-4">Discover the 9 common diet and lifestyle habits that keep the world's centenarians healthier for longer.</p>
                  </div>
                </div>
                
                <div className="glass-card overflow-hidden rounded-xl hover:shadow-lg transition group transform hover:-translate-y-1">
                  <div className="aspect-video bg-gray-200 relative">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/9AThycGCakk" 
                      title="Blue Zone Centenarians" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-600 transition">Living to 100+</h3>
                    <p className="text-gray-600 mb-4">Explore how centenarians in the Blue Zones maintain their vitality and health through simple daily practices.</p>
                  </div>
                </div>
                
                <div className="glass-card overflow-hidden rounded-xl hover:shadow-lg transition group transform hover:-translate-y-1">
                  <div className="aspect-video bg-gray-200 relative">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/mryzkO5QWWY" 
                      title="Blue Zone Diet" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-600 transition">The Blue Zone Diet</h3>
                    <p className="text-gray-600 mb-4">Learn about the nutritional principles that contribute to longevity in the world's Blue Zones.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="audios" className="py-20 relative overflow-hidden">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="text-center mb-16">
                <AudioLines className="h-10 w-10 text-blue-300 mx-auto mb-2" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative inline-block">
                  Blue Zone Audio Stories
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"></span>
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">Listen to the wisdom and experiences of centenarians and longevity experts.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Wisdom of Centenarians</h3>
                  <p className="text-gray-600 mb-4">Listen to the stories and advice from people who have lived beyond 100 years.</p>
                  <div className="mb-4 bg-blue-50 p-4 rounded-lg shadow-inner">
                    <audio 
                      id="audio1" 
                      ref={audioRef}
                      className="w-full" 
                      controls
                      onPlay={() => handlePlayAudio('audio1')}
                    >
                      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <p className="text-sm text-gray-500 italic">Sample audio - replace with actual centenarian interviews</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Expert Insights on Blue Zones</h3>
                  <p className="text-gray-600 mb-4">Hear from researchers and experts who study the Blue Zones phenomenon.</p>
                  <div className="mb-4 bg-blue-50 p-4 rounded-lg shadow-inner">
                    <audio 
                      id="audio2" 
                      className="w-full" 
                      controls
                      onPlay={() => handlePlayAudio('audio2')}
                    >
                      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <p className="text-sm text-gray-500 italic">Sample audio - replace with actual expert interviews</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Blue Zone Meditation</h3>
                  <p className="text-gray-600 mb-4">A guided meditation inspired by the stress-reduction practices found in Blue Zones.</p>
                  <div className="mb-4 bg-blue-50 p-4 rounded-lg shadow-inner">
                    <audio 
                      id="audio3" 
                      className="w-full" 
                      controls
                      onPlay={() => handlePlayAudio('audio3')}
                    >
                      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <p className="text-sm text-gray-500 italic">Sample audio - replace with actual meditation audio</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Traditional Blue Zone Music</h3>
                  <p className="text-gray-600 mb-4">Traditional music from regions known for their longevity and healthy lifestyles.</p>
                  <div className="mb-4 bg-blue-50 p-4 rounded-lg shadow-inner">
                    <audio 
                      id="audio4" 
                      className="w-full" 
                      controls
                      onPlay={() => handlePlayAudio('audio4')}
                    >
                      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <p className="text-sm text-gray-500 italic">Sample audio - replace with authentic traditional music</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-20 relative overflow-hidden">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <Mountain className="h-12 w-12 text-blue-300 mx-auto mb-6 animate-bounce-slow" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Join Our Waitlist to Experience Blue Zone</h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed">
                  Become part of a community dedicated to incorporating Blue Zone principles into modern life. 
                  Sign up today to be among the first to access our exclusive Blue Zone experiences, expert consultations, and customized longevity resources.
                </p>
                
                <Link 
                  to="/#waitlist" 
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600/80 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-300/30 hover:scale-105 transform duration-300 backdrop-blur-sm"
                >
                  <span>Join the Waitlist for Blue Zone Experience</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <div className="relative z-10">
          <Footer />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .glass-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .glass-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BlueZone;
