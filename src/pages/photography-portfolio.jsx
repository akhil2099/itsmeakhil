import React, { useState } from 'react';
import { Instagram, Youtube, Phone, Heart, Share2, ZoomIn, X } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const PhotographyPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
  const [selectedImage, setSelectedImage] = useState(null);
  const [likes, setLikes] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeShare, setActiveShare] = useState(null);

  const portfolioImages = [
    {
      id: 1,
      title: "Ethereal Dreams",
      category: "Portrait",
      description: "A dreamy portrait captured during golden hour",
      likes: 234,
      featured: true
    },
    {
      id: 2,
      title: "Urban Symphony",
      category: "Street",
      description: "City lights painting stories in the night",
      likes: 189,
      featured: true
    },
    {
      id: 3,
      title: "Mountain Majesty",
      category: "Landscape",
      description: "Dawn breaks over misty peaks",
      likes: 345,
      featured: false
    },
    {
      id: 4,
      title: "Ocean's Whisper",
      category: "Nature",
      description: "Waves dancing in twilight",
      likes: 278,
      featured: true
    },
    {
      id: 5,
      title: "City Reflections",
      category: "Street",
      description: "Urban poetry in puddles",
      likes: 156,
      featured: false
    },
    {
      id: 6,
      title: "Forest Dreams",
      category: "Nature",
      description: "Sunlight filtering through ancient trees",
      likes: 412,
      featured: true
    }
  ];

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = (image) => {
    setActiveShare(image);
    setShowShareModal(true);
  };

  const getImagesByCategory = (category) => {
    return portfolioImages.filter((image) => image.category === category);
  };

  // Animated background with gradients
  const AnimatedBackground = () => (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                background: `radial-gradient(circle at center, 
                  rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.1) 0%,
                  transparent 70%)`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const ShareModal = ({ image, onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="sacramento-regular text-2xl">Share This Photo</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-800 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <button
            onClick={() =>
              window.open(`https://wa.me/?text=Check out this amazing photo: ${image.title}`)
            }
            className="w-full p-3 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Share on WhatsApp</span>
          </button>
          <button
            onClick={() => window.open(`https://instagram.com`)}
            className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2"
          >
            <Instagram className="w-5 h-5" />
            <span>Share on Instagram</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
        .sacramento-regular {
          font-family: "Sacramento", cursive;
        }
      `}</style>

      <AnimatedBackground />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-lg bg-black/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="sacramento-regular text-4xl">itsmeakhil</h1>
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="sacramento-regular text-7xl mb-6">Capturing Moments</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every photograph tells a story, every moment becomes eternal
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
  {!selectedCategory ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { category: "Portrait", imagePath: "../images/IMG_3064.jpg" },
      { category: "Street", imagePath: "../images/IMG_3550.JPG" },
      { category: "Landscape", imagePath: "../images/IMG_3505.jpg" },
      { category: "Nature", imagePath: "../images/IMG_3491.JPG" },
    ].map(({ category, imagePath }) => (
      <div
        key={category}
        className="photo-card rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setSelectedCategory(category)}
      >
        <div className="relative group">
          <div className="aspect-[4/3] flex items-center justify-center overflow-hidden">
            <LazyImage
              src={imagePath}
              alt={category}
              className="max-w-full max-h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 group-hover:scale-150 transform transition-transform transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
            <h3 className="sacramento-regular text-3xl text-white mb-2">{category}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  ) : (
    <div>
      <button
        onClick={() => setSelectedCategory(null)}
        className="mb-6 text-sm text-blue-600 hover:underline"
      >
        Back to Categories
      </button>
      <h2 className="text-3xl mb-8 text-gray-900 dark:text-gray-100">{selectedCategory} Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getImagesByCategory(selectedCategory).map((image) => (
          <div
            key={image.id}
            className="photo-card rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={`path/to/${image.path}`} // Use the exact path from image data
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 group-hover:scale-110 transform transition-transform transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="sacramento-regular text-3xl text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-300">{image.description}</p>
                <div className="flex items-center space-x-4 mt-4">
                  <button onClick={() => setSelectedImage(image)}>
                    <ZoomIn className="w-6 h-6 text-white" />
                  </button>
                  <button onClick={() => handleLike(image.id)}>
                    <Heart className={`w-6 h-6 ${likes[image.id] ? 'text-red-600' : 'text-white'}`} />
                  </button>
                  <button onClick={() => handleShare(image)}>
                    <Share2 className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</section>


      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl mx-auto">
            <LazyImage
              src={`path/to/${selectedImage.category.toLowerCase()}${selectedImage.id}.jpg`}
              alt={selectedImage.title}
              className="w-full h-auto object-cover rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {showShareModal && (
        <ShareModal
          image={activeShare}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
};

export default PhotographyPortfolio;
