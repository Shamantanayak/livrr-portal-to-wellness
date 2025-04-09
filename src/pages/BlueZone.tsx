
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/utils/animations';
import { useToast } from '@/hooks/use-toast';
import { 
  AudioLines, Video, Heart, Users, TreeDeciduous, Mountain, Sun, 
  ArrowRight, Sparkle, Waves, CloudSun, Map, Compass, ChevronLeft, 
  ChevronRight, Play, Headphones, Car, PersonStanding, TimerReset, 
  Pause, Volume2, VolumeX, MousePointer, GripHorizontal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
  const [showTextOverlay, setShowTextOverlay] = useState(false);
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
          case 't':
            setShowTextOverlay(prev => !prev);
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

        {/* Interactive Cursor */}
        <div className="fixed w-8 h-8 pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
          style={{ 
            left: `calc(${50 + mousePosition.x * 50}% - 16px)`, 
            top: `calc(${50 + mousePosition.y * 50}% - 16px)`,
            transition: 'transform 0.1s ease-out'
          }}>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute w-8 h-8 border border-white rounded-full animate-ping opacity-50"></div>
        </div>

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
              filter: objectsLoaded ? 'brightness(0.7) contrast(1.1)' : 'blur(10px) brightness(0.7)',
              transition: objectsLoaded ? 'transform 0.5s ease-out, filter 1s ease' : 'filter 1s ease'
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          {/* 3D Floating Elements - Inspired by wlt.design */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full animate-float mix-blend-screen"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  background: `rgba(${120 + Math.random() * 135}, ${200 + Math.random() * 55}, ${230 + Math.random() * 25}, ${0.3 + Math.random() * 0.5})`,
                  boxShadow: `0 0 ${10 + Math.random() * 20}px ${Math.random() * 10}px rgba(${120 + Math.random() * 135}, ${200 + Math.random() * 55}, ${230 + Math.random() * 25}, 0.5)`,
                  animationDuration: `${5 + Math.random() * 15}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `translateZ(${Math.random() * 200}px) scale(${Math.random() * 1 + 0.5})`
                }}
              />
            ))}
          </div>

          {/* Floating Text Nodes - wlt.design style */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={`text-${i}`}
                className="absolute text-white/40 text-xs font-mono p-3 border border-white/10 rounded-lg backdrop-blur-sm"
                style={{ 
                  left: `${10 + Math.random() * 80}%`, 
                  top: `${10 + Math.random() * 80}%`,
                  transform: `translate3d(${-mousePosition.x * (20 + i * 10)}px, ${-mousePosition.y * (20 + i * 10)}px, ${100 + i * 50}px)`,
                  transition: 'transform 0.3s ease-out',
                  opacity: showTextOverlay ? 0.9 : 0.4
                }}
              >
                {i === 0 && (
                  <div className="flex flex-col gap-1">
                    <div className="text-blue-300">{"<BlueZoneExperience>"}</div>
                    <div className="pl-2 text-white/60">longevity: 100+</div>
                    <div className="text-blue-300">{"</BlueZoneExperience>"}</div>
                  </div>
                )}
                {i === 1 && (
                  <div className="flex flex-col gap-1">
                    <span className="text-purple-300">// Natural movement patterns</span>
                    <span className="text-green-300">const activity = 'walking';</span>
                  </div>
                )}
                {i === 2 && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
                    <span>meditation_mode: active</span>
                  </div>
                )}
                {i === 3 && (
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div 
                        key={j} 
                        className="w-2 h-2 bg-blue-500/50 rounded-full"
                        style={{
                          animation: `pulse-slow ${1 + Math.random() * 2}s infinite alternate`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                {i === 4 && (
                  <div className="flex flex-col gap-1">
                    <span className="text-yellow-300">scene.load('{currentScene}')</span>
                    <span className="text-blue-300">audio.play()</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3D Effect Layers - more pronounced with wlt.design aesthetic */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-transform duration-500 mix-blend-screen"
            style={{ 
              background: 'radial-gradient(circle, rgba(56,182,255,0.3) 0%, rgba(20,90,143,0.1) 70%, rgba(0,27,45,0) 100%)',
              transform: `translate3d(${-mousePosition.x * 50}px, ${-mousePosition.y * 50}px, 100px)` 
            }}
          ></div>
          
          <div 
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl transition-transform duration-500 mix-blend-screen"
            style={{ 
              background: 'radial-gradient(circle, rgba(98,0,255,0.2) 0%, rgba(76,0,167,0.1) 70%, rgba(32,0,73,0) 100%)',
              transform: `translate3d(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px, 50px)` 
            }}
          ></div>

          {/* VR UI Elements - styled like wlt.design interface */}
          {showControls && (
            <div className="fixed top-6 left-6 right-6 flex items-center justify-between px-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl text-white z-30 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-900/50 border border-blue-500/30 backdrop-blur-sm rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>{currentScene === 'village' ? 'BLUE.ZONE/VILLAGE' : currentScene === 'mountains' ? 'BLUE.ZONE/MOUNTAINS' : 'BLUE.ZONE/BEACH'}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  className="px-3 py-1 border border-red-500/30 bg-red-900/30 backdrop-blur-sm rounded-xl hover:bg-red-900/50 transition flex items-center gap-2"
                  onClick={exitVRMode}
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>EXIT</span>
                </button>
                <button 
                  className="px-3 py-1 border border-purple-500/30 bg-purple-900/30 backdrop-blur-sm rounded-xl hover:bg-purple-900/50 transition flex items-center gap-2"
                  onClick={() => setShowTextOverlay(prev => !prev)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>DATA</span>
                </button>
                <button 
                  className="px-3 py-1 border border-blue-500/30 bg-blue-900/30 backdrop-blur-sm rounded-xl hover:bg-blue-900/50 transition flex items-center gap-2"
                  onClick={() => setShowAudioControls(prev => !prev)}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>AUDIO</span>
                </button>
              </div>
            </div>
          )}

          {/* Audio Controls Panel - wlt.design style */}
          {showAudioControls && (
            <div className="fixed top-24 right-6 w-64 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl p-4 text-white z-30 font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>AUDIO.CONTROL</span>
                </h4>
                <button onClick={toggleAudio} className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900/50 border border-blue-500/30">
                  {audioPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">VOLUME</span>
                  <div className="flex items-center gap-2 w-32">
                    <VolumeX className="h-3 w-3 text-white/70" />
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      value={audioVolume} 
                      onChange={(e) => {
                        const newVolume = parseFloat(e.target.value);
                        setAudioVolume(newVolume);
                        if (audioRef.current) {
                          audioRef.current.volume = newVolume;
                        }
                      }}
                      className="w-full accent-blue-500 h-1"
                    />
                    <Volume2 className="h-3 w-3 text-white/70" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-white/70">SOUNDSCAPE</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["ambient", "meditation", "nature", "ocean"].map((type) => (
                      <button 
                        key={type}
                        className={`py-1.5 px-2 text-xs rounded-lg border ${currentMusic === type ? 
                          'bg-blue-900/50 border-blue-500/50 text-blue-300' : 
                          'bg-black/30 border-white/10 text-white/70 hover:bg-black/50'}`}
                        onClick={() => {
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
                        }}
                      >
                        {type.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Meditation Panel - wlt.design inspired */}
          <div 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl w-11/12 max-w-md text-white z-30 font-mono transition-all duration-500"
            style={{ transform: `translate(-50%, 0) translate3d(${-mousePosition.x * 10}px, ${-mousePosition.y * 10}px, 100px)` }}
          >
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-900/30 flex items-center justify-center">
                  {currentScene === 'village' && <Users className="h-5 w-5 text-blue-400" />}
                  {currentScene === 'mountains' && <Mountain className="h-5 w-5 text-blue-400" />}
                  {currentScene === 'beach' && <Waves className="h-5 w-5 text-blue-400" />}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">{currentScene === 'village' ? 'BLUE.ZONE/VILLAGE' : currentScene === 'mountains' ? 'BLUE.ZONE/MOUNTAINS' : 'BLUE.ZONE/BEACH'}</h3>
              <div className="h-0.5 w-16 bg-blue-500/30 mx-auto mb-4"></div>
              <p className="text-base opacity-90 leading-relaxed mb-4 text-white/80">{sceneMeditations[currentScene as keyof typeof sceneMeditations]}</p>
              
              <Collapsible className="w-full mt-4">
                <CollapsibleTrigger className="w-full flex items-center justify-center gap-2 text-xs text-white/60 py-2">
                  <span>NAVIGATION.INSTRUCTIONS</span>
                  <ChevronRight className="h-3 w-3" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-3 space-y-2 text-xs text-white/60 border-t border-white/10 pt-3">
                    <p className="flex items-center gap-2">
                      <MousePointer className="h-3 w-3" />
                      <span>Move cursor or tilt device to look around</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <GripHorizontal className="h-3 w-3" />
                      <span>Arrow keys to change location</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Headphones className="h-3 w-3" />
                      <span>Press M to toggle audio</span>
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="inline-flex animate-pulse items-center py-1 px-3 rounded-full text-xs border border-blue-500/30 bg-blue-900/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span>MEDITATION.ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Scene Navigation Arrows - wlt.design inspired */}
          <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30">
            <button 
              className="p-3 bg-black/40 border border-white/10 hover:bg-black/60 backdrop-blur-xl rounded-full transition-colors group"
              onClick={() => setCurrentScene(prev => prev === 'village' ? 'beach' : (prev === 'mountains' ? 'village' : 'mountains'))}
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:text-blue-300 transition-colors" />
            </button>
          </div>
          
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30">
            <button 
              className="p-3 bg-black/40 border border-white/10 hover:bg-black/60 backdrop-blur-xl rounded-full transition-colors group"
              onClick={() => setCurrentScene(prev => prev === 'village' ? 'mountains' : (prev === 'beach' ? 'village' : 'beach'))}
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:text-blue-300 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Interactive Cursor */}
      <div className="fixed w-6 h-6 pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
        style={{ 
          left: `calc(${50 + mousePosition.x * 50}% - 12px)`, 
          top: `calc(${50 + mousePosition.y * 50}% - 12px)`,
          transition: 'transform 0.1s ease-out'
        }}>
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute w-6 h-6 border border-white rounded-full"></div>
      </div>

      <div 
        ref={arContainerRef}
        className="fixed inset-0 w-full h-full z-0 overflow-hidden perspective-1000"
      >
        {/* Artistic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-out"
          style={{ 
            backgroundImage: `url(${sceneBackgrounds[currentScene as keyof typeof sceneBackgrounds]})`,
            transform: `translate3d(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px, 0)`,
            filter: 'brightness(0.4) contrast(1.2) saturate(0.8)',
          }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`orb-${i}`}
              className="absolute rounded-full mix-blend-screen blur-xl"
              style={{ 
                left: `${10 + Math.random() * 80}%`, 
                top: `${10 + Math.random() * 80}%`,
                width: `${30 + Math.random() * 100}px`,
                height: `${30 + Math.random() * 100}px`,
                background: i % 3 === 0 ? 
                  'radial-gradient(circle, rgba(56,182,255,0.4) 0%, rgba(20,90,143,0.1) 70%, rgba(0,27,45,0) 100%)' : 
                  i % 3 === 1 ? 
                  'radial-gradient(circle, rgba(98,0,255,0.3) 0%, rgba(76,0,167,0.1) 70%, rgba(32,0,73,0) 100%)' :
                  'radial-gradient(circle, rgba(0,210,255,0.3) 0%, rgba(0,108,130,0.1) 70%, rgba(0,42,51,0) 100%)',
                transform: `translate3d(${-mousePosition.x * (10 + i * 2)}px, ${-mousePosition.y * (10 + i * 2)}px, 0)`,
                transition: 'transform 0.8s ease-out',
                opacity: 0.7,
                animationName: 'pulse-slow',
                animationDuration: `${5 + Math.random() * 10}s`,
                animationIterationCount: 'infinite',
                animationDirection: 'alternate',
              }}
            />
          ))}
        </div>

        {/* Grid Lines - wlt.design style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 border border-white/5 grid grid-cols-6 grid-rows-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={`grid-${i}`} className="border border-white/5 flex items-center justify-center">
                {i % 7 === 0 && (
                  <div className="w-1 h-1 bg-blue-400/40 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel - wlt.design inspired */}
        <div 
          className="absolute bottom-10 right-10 backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl max-w-md text-white font-mono"
          style={{ 
            transform: `translate3d(${-mousePosition.x * 10}px, ${-mousePosition.y * 10}px, 50px)`,
            transition: 'transform 0.3s ease-out' 
          }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-500/30">
              {currentScene === 'village' && <Users className="h-5 w-5 text-blue-400" />}
              {currentScene === 'mountains' && <Mountain className="h-5 w-5 text-blue-400" />}
              {currentScene === 'beach' && <Waves className="h-5 w-5 text-blue-400" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-300">{currentScene === 'village' ? 'BLUE.ZONE/VILLAGE' : currentScene === 'mountains' ? 'BLUE.ZONE/MOUNTAINS' : 'BLUE.ZONE/BEACH'}</h3>
              <div className="h-0.5 w-12 bg-blue-500/30 my-2"></div>
              <p className="text-sm text-white/70">{sceneDescriptions[currentScene as keyof typeof sceneDescriptions]}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button
              onClick={enterVRMode}
              className="w-full bg-blue-900/50 hover:bg-blue-800/60 text-white border border-blue-500/30 rounded-xl py-6 font-mono flex items-center justify-center gap-2 group transition-colors"
            >
              <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
              <span className="text-xs tracking-widest">ENTER IMMERSIVE EXPERIENCE</span>
            </Button>
          </div>
        </div>
      </div>

      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white transition-opacity duration-1000" style={{ opacity: showIntro ? 1 : 0 }}>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow"></div>
            <CloudSun className="h-20 w-20 text-blue-300 relative z-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-mono font-bold mt-8 mb-3 tracking-tight">
            <span className="text-blue-300">BLUE</span>.ZONE
          </h1>
          
          <div className="h-0.5 w-16 bg-blue-500/50 mx-auto mb-6"></div>
          
          <p className="text-sm font-mono text-white/70 mb-8">
            INITIALIZING IMMERSIVE EXPERIENCE...
          </p>
          
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400/80 origin-left" style={{ animation: 'reveal 2.5s ease-in-out forwards' }}></div>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        
        <main className="pt-32 pb-20 container relative z-10">
          <section ref={headerRef} className="relative py-20">
            <div className={`transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="mx-auto max-w-3xl backdrop-blur-xl bg-black/40 border border-white/10 p-8 rounded-2xl">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-blue-500/30 bg-blue-900/30 flex items-center justify-center mb-6">
                    <CloudSun className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                
                <span className="bg-blue-900/30 border border-blue-500/30 text-blue-300 px-4 py-1 rounded-full text-xs font-mono mb-4 inline-block">
                  LONGEVITY.RESEARCH
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 text-white">
                  THE <span className="text-blue-300">BLUE</span>.ZONE EXPERIENCE
                </h1>
                
                <div className="h-0.5 w-24 bg-blue-500/30 mx-auto mb-6"></div>
                
                <p className="text-base text-white/70 mb-8 leading-relaxed">
                  Explore the lifestyles, practices, and wisdom of communities where people routinely live beyond 100 years 
                  with exceptional health and vitality.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    className="px-6 py-3 bg-blue-900/40 border border-blue-500/30 hover:bg-blue-800/50 text-white rounded-xl font-mono text-sm transition-colors flex items-center gap-3 group"
                    onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>WATCH.VIDEOS</span>
                  </button>
                  
                  <button 
                    className="px-6 py-3 bg-black/40 border border-white/10 hover:bg-black/60 text-white rounded-xl font-mono text-sm transition-colors flex items-center gap-3 group"
                    onClick={() => document.getElementById('audios')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>LISTEN.STORIES</span>
                  </button>
                  
                  <button 
                    className="px-6 py-3 bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/50 text-white rounded-xl font-mono text-sm transition-colors flex items-center gap-3 group animate-pulse"
                    onClick={enterVRMode}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>ENTER.VR</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-20 relative overflow-hidden">
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full border border-blue-500/30 bg-blue-900/30 flex items-center justify-center">
                    <Sparkle className="h-8 w-8 text-blue-400 animate-spin-slow" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                  WHY <span className="text-blue-300">BLUE</span> ZONES MATTER
                </h2>
                
                <div className="h-0.5 w-24 bg-blue-500/30 mx-auto mb-6"></div>
                
                <p className="text-white/70 max-w-2xl mx-auto">Blue Zones are regions where people live significantly longer and healthier lives. By studying these areas, we can uncover the secrets to longevity.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: <Heart className="h-8 w-8 text-blue-400" />, title: "NATURAL MOVEMENT", desc: "People in Blue Zones move naturally throughout their day, not relying on gyms but integrating physical activity into daily life." },
                  { icon: <TreeDeciduous className="h-8 w-8 text-blue-400" />, title: "PLANT-BASED DIET", desc: "The Blue Zone diet consists primarily of plant foods, with beans, nuts, and whole grains as staples that provide essential nutrients." },
                  { icon: <Users className="h-8 w-8 text-blue-400" />, title: "SOCIAL CONNECTION", desc: "Close-knit communities and strong family bonds provide emotional support and purpose, reducing stress and promoting well-being." },
                  { icon: <Sun className="h-8 w-8 text-blue-400" />, title: "LIFE PURPOSE", desc: "Having clear purpose and meaning in life, what Okinawans call \"ikigai,\" contributes to longer, healthier lives with reduced stress." }
                ].map((item, i) => (
                  <div key={i} className="backdrop-blur-md bg-black/20 border border-white/10 p-6 rounded-xl flex flex-col items-center text-center hover:border-blue-500/20 transition group">
                    <div className="w-16 h-16 rounded-full border border-blue-500/30 bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-900/40 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-mono font-bold text-blue-300 mb-2">{item.title}</h3>
                    <div className="h-0.5 w-12 bg-blue-500/30 mx-auto my-3 group-hover:w-16 transition-all"></div>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                ))}
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

