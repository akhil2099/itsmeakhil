import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, 
  Mail, 
  Phone,
  Share2,
  X,
  ChevronRight,
  Move3D
} from 'lucide-react';

const PhotographyPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const parallaxRef = useRef(null);

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
      image: '/api/placeholder/800/600'
    },
    {
      id: 2,
      category: 'landscape',
      title: 'Mountains',
      description: 'Mirror-like lake reflecting snow-capped peaks',
      location: 'Swiss Alps',
      year: '2024',
      equipment: 'Canon EOS R5 + 16-35mm f/2.8',
      image: '/api/placeholder/800/600'
    },
    {
      id: 3,
      category: 'wildlife',
      title: 'Wild Safari',
      description: 'African wildlife in their natural habitat',
      location: 'Serengeti, Tanzania',
      year: '2024',
      equipment: 'Nikon D850 + 200-500mm f/5.6',
      image: '/api/placeholder/800/600'
    },
    {
      id: 4,
      category: 'street',
      title: 'Urban Life',
      description: 'City life captured in black and white',
      location: 'Tokyo, Japan',
      year: '2024',
      equipment: 'Fujifilm X-T4 + 23mm f/1.4',
      image: '/api/placeholder/800/600'
    }
  ];

  useEffect(() => {
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

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleParallax);
    
    setTimeout(() => setIsLoading(false), 2000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  const CustomCursor = () => (
    <div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white rounded-full transform scale-50 animate-pulse" />
        {cursorText && (
          <div className="absolute whitespace-nowrap left-10 top-0 text-white text-sm">
            {cursorText}
          </div>
        )}
      </div>
    </div>
  );

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-text">
          Loading Experience
        </div>
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-progress" />
        </div>
      </div>
    </div>
  );

  const ImageModal = ({ image, onClose }) => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center perspective"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" />
      <div 
        className="relative max-w-6xl w-full p-8 animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="grid grid-cols-2 gap-8 bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10">
          <div className="overflow-hidden rounded-lg">
            <img 
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6 transform translate-y-8 opacity-0 animate-slide-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {image.title}
            </h2>
            <p className="text-xl text-gray-300">{image.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                {image.location}
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                {image.equipment}
              </span>
            </div>
            <Share2 className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section ref={parallaxRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
          
          <div className="parallax absolute inset-0" data-speed="2">
            <img 
              src="/api/placeholder/1920/1080"
              alt="Background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <h1 className="text-[12rem] font-bold leading-none hover:scale-105 transition-transform cursor-default"
                onMouseEnter={() => setCursorText('Scroll Down')}
                onMouseLeave={() => setCursorText('')}>
              <span className="block text-8xl text-purple-500 animate-float-slow">Creative</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-float">
                Portfolio
              </span>
            </h1>
            
            <Move3D className="w-16 h-16 mx-auto animate-float-fast text-purple-500" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Category Navigation */}
        <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  onMouseEnter={() => setCursorText('Click')}
                  onMouseLeave={() => setCursorText('')}
                  className={`group px-8 py-6 relative overflow-hidden transition-colors duration-500
                    ${activeCategory === category ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <span className="relative z-10 text-3xl capitalize">{category}</span>
                  <ChevronRight className={`absolute inset-y-0 -right-10 text-gray-600 opacity-0 group-hover:right-4 group-hover:opacity-100 transition-all`} />
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Portfolio Items */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {portfolioItems.filter(item => activeCategory === 'all' || item.category === activeCategory).map(item => (
            <div key={item.id} 
                 className="relative group cursor-pointer"
                 onClick={() => setSelectedImage(item)}
                 onMouseEnter={() => setCursorText('View')}
                 onMouseLeave={() => setCursorText('')}>
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* Image Modal */}
        {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </div>
    </>
  );
};

export default PhotographyPortfolio;
