
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/utils/animations';
import { useToast } from '@/hooks/use-toast';
import { AudioLines, Video, Heart, Users, TreeDeciduous, Mountain, Sun, ArrowRight, Sparkle, Waves, CloudSun, Map, Compass, ChevronLeft, ChevronRight, Play, Headphones, Car, PersonStanding, TimerReset, Pause, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const BlueZone = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const arContainerRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState('village');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showIntro, setShowIntro] = useState(true);
  const [objectsLoaded, setObjectsLoaded] = useState(false);
  const [vrMode, setVrMode] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState<string>('ambient');
  const [audioVolume, setAudioVolume] = useState(0.5);
  const [showAudioControls, setShowAudioControls] = useState(false);
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
      if (vrMode) {
        switch (e.key) {
          case 'ArrowLeft':
            setCurrentScene(prev => prev === 'village' ? 'beach' : (prev === 'mountains' ? 'village' : 'mountains'));
            toast({
              title: "Scene Changed",
              description: `You moved to the ${currentScene === 'village' ? 'Beach' : (currentScene === 'mountains' ? 'Village' : 'Mountains')} area.`,
            });
            break;
          case 'ArrowRight':
            setCurrentScene(prev => prev === 'village' ? 'mountains' : (prev === 'beach' ? 'village' : 'beach'));
            toast({
              title: "Scene Changed",
              description: `You moved to the ${currentScene === 'village' ? 'Mountains' : (currentScene === 'beach' ? 'Village' : 'Beach')} area.`,
            });
            break;
          case 'm':
            toggleAudio();
            break;
        }
      } else {
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
  }, [toast, currentScene, vrMode]);

  // Audio Management Functions
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setAudioVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const changeMusic = (type: string) => {
    setCurrentMusic(type);
    if (audioRef.current) {
      let audioSrc = "";
      switch (type) {
        case "ambient":
          audioSrc = "https://freesound.org/data/previews/463/463745_4929134-lq.mp3";
          break;
        case "meditation":
          audioSrc = "https://freesound.org/data/previews/474/474243_8587596-lq.mp3";
          break;
        case "nature":
          audioSrc = "https://freesound.org/data/previews/531/531953_2391539-lq.mp3";
          break;
        case "ocean":
          audioSrc = "https://freesound.org/data/previews/527/527409_6668427-lq.mp3";
          break;
      }
      audioRef.current.src = audioSrc;
      if (audioPlaying) {
        audioRef.current.play();
      }
    }
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

  const sceneMeditations = {
    village: "Close your eyes and imagine walking through this village. Feel the sense of community, the peaceful pace of life. Breathe deeply, just as the centenarians do every day.",
    mountains: "Take a deep breath of the mountain air. Visualize yourself walking these paths, feeling stronger with each step. The rhythm of your movement synchronizes with your heartbeat.",
    beach: "Listen to the waves. Let each breath match their rhythm - in with the wave coming to shore, out as it recedes. Feel the tension leaving your body with each exhale."
  };

  const enterVRMode = () => {
    setVrMode(true);
    setShowControls(true);
    document.body.requestFullscreen().catch(err => {
      console.log('Error attempting to enable fullscreen:', err);
    });
    toast({
      title: "VR Experience Activated",
      description: "Use arrow keys to change scenes. Press M to toggle music. Relax and enjoy the immersive experience.",
    });
    
    // Start playing ambient music
    if (audioRef.current) {
      audioRef.current.src = "https://freesound.org/data/previews/463/463745_4929134-lq.mp3";
      audioRef.current.volume = audioVolume;
      audioRef.current.play().catch(err => {
        console.log('Error playing audio:', err);
      });
      setAudioPlaying(true);
    }
  };

  const exitVRMode = () => {
    setVrMode(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.log('Error attempting to exit fullscreen:', err);
      });
    }
    
    // Pause music when exiting VR mode
    if (audioRef.current && audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  };

  if (vrMode) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black overflow-hidden perspective-1000">
        {/* Audio Element */}
        <audio ref={audioRef} loop />

        <div 
          ref={arContainerRef}
          className="absolute inset-0 w-full h-full overflow-hidden perspective-1000"
        >
          {/* Background Scene */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out scale-110"
            style={{ 
              backgroundImage: `url(${sceneBackgrounds[currentScene as keyof typeof sceneBackgrounds]})`,
              transform: `translate3d(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px, 0) scale(1.2)`,
              filter: objectsLoaded ? 'none' : 'blur(10px)',
              transition: objectsLoaded ? 'transform 0.5s ease-out, filter 1s ease' : 'filter 1s ease'
            }}
          >
            <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-4 h-4 rounded-full bg-white/30 animate-float"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                  transform: `scale(${Math.random() * 0.5 + 0.5})`
                }}
              />
            ))}
          </div>

          {/* 3D Effect Layers */}
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

          {/* VR UI Elements */}
          {showControls && (
            <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-500/50 backdrop-blur-sm rounded">
                  Location: {currentScene === 'village' ? 'Blue Zone Village' : currentScene === 'mountains' ? 'Mountains' : 'Beach'}
                </span>
                <button 
                  className="p-2 bg-red-500/50 backdrop-blur-sm rounded hover:bg-red-600/70 transition"
                  onClick={exitVRMode}
                >
                  Exit VR Mode
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 bg-purple-500/50 backdrop-blur-sm rounded hover:bg-purple-600/70 transition"
                  onClick={() => setShowAudioControls(prev => !prev)}
                >
                  <Headphones className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 bg-blue-500/50 backdrop-blur-sm rounded hover:bg-blue-600/70 transition"
                  onClick={toggleAudio}
                >
                  {audioPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
              </div>
            </div>
          )}

          {/* Audio Controls Panel */}
          {showAudioControls && (
            <div className="fixed top-16 right-4 w-64 p-4 bg-black/70 backdrop-blur-md border border-white/30 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Audio Controls</h4>
              <div className="flex items-center justify-between mb-2">
                <span>Volume</span>
                <div className="flex items-center gap-2">
                  <VolumeX className="h-4 w-4" />
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={audioVolume} 
                    onChange={handleVolumeChange}
                    className="w-20"
                  />
                  <Volume2 className="h-4 w-4" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium mb-1">Sound Themes</p>
                <button 
                  className={`w-full p-1.5 text-sm rounded ${currentMusic === 'ambient' ? 'bg-blue-600' : 'bg-blue-900/50'}`}
                  onClick={() => changeMusic('ambient')}
                >
                  Ambient
                </button>
                <button 
                  className={`w-full p-1.5 text-sm rounded ${currentMusic === 'meditation' ? 'bg-blue-600' : 'bg-blue-900/50'}`}
                  onClick={() => changeMusic('meditation')}
                >
                  Meditation
                </button>
                <button 
                  className={`w-full p-1.5 text-sm rounded ${currentMusic === 'nature' ? 'bg-blue-600' : 'bg-blue-900/50'}`}
                  onClick={() => changeMusic('nature')}
                >
                  Nature
                </button>
                <button 
                  className={`w-full p-1.5 text-sm rounded ${currentMusic === 'ocean' ? 'bg-blue-600' : 'bg-blue-900/50'}`}
                  onClick={() => changeMusic('ocean')}
                >
                  Ocean Waves
                </button>
              </div>
            </div>
          )}

          {/* Meditation Panel */}
          <div 
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 w-11/12 max-w-md text-white shadow-2xl transition-all duration-500"
            style={{ transform: `translate(-50%, 0) translate3d(${-mousePosition.x * 10}px, ${-mousePosition.y * 10}px, 100px)` }}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{currentScene === 'village' ? 'Blue Zone Village' : currentScene === 'mountains' ? 'Mountain Pathways' : 'Coastal Living'}</h3>
              <p className="text-lg opacity-90 italic mb-4">"{sceneMeditations[currentScene as keyof typeof sceneMeditations]}"</p>
              <div className="text-sm opacity-70 mt-2">
                <p>Move your cursor or tilt your device to look around</p>
                <p>Use left and right arrow keys to change locations</p>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <div className="w-full flex justify-center">
                <div className="inline-flex animate-pulse items-center justify-center p-1 px-3 bg-white/10 rounded-full text-xs font-medium">
                  <span>Take deep breaths...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scene Navigation Arrows */}
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2">
            <button 
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
              onClick={() => setCurrentScene(prev => prev === 'village' ? 'beach' : (prev === 'mountains' ? 'village' : 'mountains'))}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
            <button 
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
              onClick={() => setCurrentScene(prev => prev === 'village' ? 'mountains' : (prev === 'beach' ? 'village' : 'beach'))}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1 text-xs opacity-70">
              <Compass className="h-4 w-4" />
              <span>Use arrow keys to navigate between locations</span>
            </div>
            <div className="flex items-center gap-1 text-xs opacity-70">
              <Map className="h-4 w-4" />
              <span>Move mouse to look around</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button
              onClick={enterVRMode}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 animate-pulse"
            >
              <Headphones className="h-5 w-5" />
              <span>Enter VR Experience</span>
            </Button>
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
                  
                  <button 
                    className="px-6 py-3 bg-purple-600/80 hover:bg-purple-700 text-white rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/40 backdrop-blur-sm animate-pulse"
                    onClick={enterVRMode}
                  >
                    <Headphones className="h-5 w-5" />
                    <span>Enter VR Experience</span>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Plant-Based Diet</h3>
                  <p className="text-white/70">The Blue Zone diet consists primarily of plant foods, with beans, nuts, and whole grains as staples that provide essential nutrients.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition group hover:-translate-y-1 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
                    <Users className="h-8 w-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Social Connection</h3>
                  <p className="text-white/70">Close-knit communities and strong family bonds provide emotional support and purpose, reducing stress and promoting well-being.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition group hover:-translate-y-1 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
                    <Sun className="h-8 w-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Life Purpose</h3>
                  <p className="text-white/70">Having clear purpose and meaning in life, what Okinawans call "ikigai," contributes to longer, healthier lives with reduced stress.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <audio ref={audioRef} loop />
    </div>
  );
};

export default BlueZone;
