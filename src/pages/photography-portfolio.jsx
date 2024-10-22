import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, 
  Mail, 
  Phone,
  Share2,
  X,
  ChevronRight,
  Camera,
  Move3D,
  Download,
  Eye,
  Heart,
  Calendar,
  MapPin,
  Plus
} from 'lucide-react';

const PhotographyPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const parallaxRef = useRef(null);
  const headerRef = useRef(null);

  const categories = ['all', 'portrait', 'landscape', 'wildlife', 'street'];

  const portfolioItems = [
    {
      id: 1,
      category: 'portrait',
      title: 'Golden Hour Portrait',
      description: 'Natural light portrait captured during sunset',
      location: 'Paris, France',
      year: '2024',
      equipment: 'Sony A7III + 85mm f/1.4',
      image: '/api/placeholder/800/600',
      likes: 1243,
      tags: ['Golden Hour', 'Natural Light', 'Portrait']
    },
    {
      id: 2,
      category: 'landscape',
      title: 'Mountains',
      description: 'Mirror-like lake reflecting snow-capped peaks',
      location: 'Swiss Alps',
      year: '2024',
      equipment: 'Canon EOS R5 + 16-35mm f/2.8',
      image: '/api/placeholder/800/600',
      likes: 892,
      tags: ['Mountains', 'Reflection', 'Nature']
    },
    {
      id: 3,
      category: 'wildlife',
      title: 'Wild Safari',
      description: 'African wildlife in their natural habitat',
      location: 'Serengeti, Tanzania',
      year: '2024',
      equipment: 'Nikon D850 + 200-500mm f/5.6',
      image: '/api/placeholder/800/600',
      likes: 1567,
      tags: ['Wildlife', 'Safari', 'Nature']
    },
    {
      id: 4,
      category: 'street',
      title: 'Urban Life',
      description: 'City life captured in black and white',
      location: 'Tokyo, Japan',
      year: '2024',
      equipment: 'Fujifilm X-T4 + 23mm f/1.4',
      image: '/api/placeholder/800/600',
      likes: 734,
      tags: ['Street', 'Black & White', 'Urban']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleParallax = (e) => {
      if (parallaxRef.current) {
        const elements = parallaxRef.current.getElementsByClassName('parallax');
        Array.from(elements).forEach((element) => {
          const speed = element.getAttribute('data-speed');
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
          element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleParallax);
    
    const loadingSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    
    loadingSequence();

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  const CustomCursor = () => (
    <div
      className="fixed w-16 h-16 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 32,
        top: mousePosition.y - 32,
        transition: 'all 0.1s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white rounded-full transform scale-25 animate-pulse" />
        <div className="absolute inset-0 border border-white rounded-full animate-ping opacity-50" />
        <div className="absolute inset-0 border-2 border-white rounded-full animate-spin-slow" />
        {cursorText && (
          <div className="absolute whitespace-nowrap left-20 top-4 text-white text-sm font-light tracking-widest uppercase">
            {cursorText}
          </div>
        )}
      </div>
    </div>
  );

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-12">
        <div className="relative">
          <Camera className="w-32 h-32 mx-auto text-purple-500 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20 animate-pulse" />
        </div>
        <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text tracking-tight font-serif">
          Visual Stories
        </div>
        <div className="w-96 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-progress-sophisticated" />
        </div>
      </div>
    </div>
  );

  const ImageModal = ({ image, onClose }) => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center perspective-1000"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-fade-in" />
      <div 
        className="relative max-w-8xl w-full p-8 animate-modal-in transform hover:scale-[1.01] transition-transform duration-1000"
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 group"
          onClick={onClose}
        >
          <X className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-300" />
        </button>
        <div className="grid grid-cols-2 gap-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-3xl rounded-3xl p-16 border border-white/10 shadow-2xl">
          <div className="overflow-hidden rounded-2xl group relative">
            <img 
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>{image.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Share2 className="w-4 h-4 hover:text-purple-400 cursor-pointer transition-colors" />
                  <Download className="w-4 h-4 hover:text-purple-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-serif bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {image.title}
              </h2>
              <p className="text-2xl text-gray-300 font-light leading-relaxed">
                {image.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {image.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-light tracking-wider hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-400">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{image.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{image.year}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Camera className="w-4 h-4 text-purple-400" />
                  <span>{image.equipment}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>{image.likes.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      
      <div className="min-h-screen bg-black text-white overflow-hidden font-light">
        {/* Hero Section */}
        <section ref={parallaxRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
          
          <div className="parallax absolute inset-0" data-speed="2">
            <img 
              src="/api/placeholder/1920/1080"
              alt="Background"
              className="w-full h-full object-cover opacity-30 scale-110"
            />
          </div>
          
          <div className="relative z-10 text-center space-y-16">
            <h1 className="text-[14rem] font-serif leading-none hover:scale-105 transition-transform duration-1000 cursor-default"
                onMouseEnter={() => setCursorText('Scroll')}
                onMouseLeave={() => setCursorText('')}>
              <span className="block text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-float-slow opacity-90 font-light">
                Capturing
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-float font-bold tracking-tight">
                Moments
              </span>
            </h1>
            
            <Move3D className="w-20 h-20 mx-auto animate-float-fast text-purple-500 opacity-75" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Category Navigation */}
        <nav className="sticky top-0 z-40 backdrop-blur-3xl border-b border-white/10 transition-transform duration-500"
             style={{ transform: `translateY(${scrollY > 100 ? '0' : '-100%'})` }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center space-x-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  onMouseEnter={() => setCursorText('Select')}
                  onMouseLeave={() => setCursorText('')}
                  className={`group px-10 py-8 relative overflow-hidden transition-all duration-500
                    ${activeCategory === category ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <span className="relative z-10 text-2xl capitalize tracking-widest">{category}</span>
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 transition-transform duration-700 ${activeCategory === category ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Portfolio Grid */}
        <section className="max-w-8xl mx-auto p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioItems
              .filter(item => activeCategory === 'all' || item.category === activeCategory)
              .map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative group"
                  onClick={() => setSelectedImage(item)}
                  onMouseEnter={() => {
                    setCursorText('View');
                    setHoveredItem(item.id);
                  }}
                  onMouseLeave={() => {
                    setCursorText('');
                    setHoveredItem(null);
                  }}
                  style={{
                    transform: `translateY(${scrollY > 300 ? '                    -10px' : '0'}) scale(${hoveredItem === item.id ? '1.05' : '1'})`,
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  <div className="overflow-hidden rounded-2xl bg-black/80 group-hover:shadow-xl transition-shadow duration-500">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="p-6 space-y-4">
                      <h2 className="text-2xl font-bold tracking-wide text-white/90">{item.title}</h2>
                      <p className="text-sm text-gray-400">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-light text-gray-500">{item.location}, {item.year}</span>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Heart className="w-4 h-4 text-red-400" />
                          <span>{item.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <div className="flex justify-center space-x-6">
              <Instagram className="w-8 h-8 hover:text-purple-500 transition-colors" />
              <Mail className="w-8 h-8 hover:text-purple-500 transition-colors" />
              <Phone className="w-8 h-8 hover:text-purple-500 transition-colors" />
            </div>
            <p className="text-sm text-gray-500">&copy; 2024 Your Photography Name. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PhotographyPortfolio;
