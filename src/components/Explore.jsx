import React from 'react';
import img from '../images/IMG_3491.JPG'; 
import img2 from '../images/IMG_3493.JPG';
import img3 from '../images/IMG_3534.JPG';
import img4 from '../images/IMG_3550.JPG';
import bgImage from '../images/b81687d1.jpg';
import { useDocTitle } from './CustomHook';

const GlassmorphicCard = ({ img, title, description }) => {
  useDocTitle('itsmeakhil - Explore');
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-2xl transition-all duration-400 ease-in-out hover:shadow-xl">
      {/* Card content */}
      <div className="relative">
        <img 
          alt={title} 
          className="w-full rounded-t transition duration-300 ease-in-out group-hover:blur-sm" 
          src={img} 
        />
        {/* Overlay for text content */}
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-4 overflow-hidden">
          <div className="transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <h2 className="font-sans text-2xl text-center text-white mb-2">
              {title}
            </h2>
            <p className="text-center font-sans text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
    return (
        <div 
            id="Explore" 
            className="relative bg-cover bg-center text-white py-12"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <section className="relative z-10" data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-gray-900 uppercase font-bold">Mastering Mobile Photography: Capture Your World Creatively</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-gray-900'></div>
                    </div>
                    <h2 className="mt-4 mx-10 text-center text-xl lg:text-xl font-sans text-gray-600">Mobile photography has transformed how we document our lives and experiences, making it accessible to everyone. This guide explores essential techniques that elevate your mobile photography skills, from understanding composition and lighting to mastering editing tools and capturing stunning travel moments. Whether you're a beginner or looking to refine your skills, these tips will empower you to create breathtaking images that truly reflect your unique perspective. Embrace the art of mobile photography and start capturing your world creatively!</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <GlassmorphicCard 
                            img={img}
                            title="The Art of Composition"
                            description="Learn the basics of composition to create visually appealing photos by applying the rule of thirds, leading lines, and framing techniques."
                        />
                        <GlassmorphicCard 
                            img={img2}
                            title="Editing Made Easy"
                            description="Discover how to enhance your photos with easy-to-use editing tools and techniques, bringing out the best in your mobile photography."
                        />
                        <GlassmorphicCard 
                            img={img3}
                            title="Lighting Essentials"
                            description="Discover how to use natural and artificial light effectively to enhance your mobile photography, making your subjects pop and adding depth to your images."
                        />
                        <GlassmorphicCard 
                            img={img4}
                            title="Travel Photography Tips"
                            description="Capture your travel adventures by focusing on candid moments, local culture, and unique perspectives that tell a compelling story through your images."
                        />
                    </div>
                </div>
            </section>

            <section className="relative z-10">
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        {/* Left and Right columns are commented out in the original code */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explore;