import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Slider from 'react-slick'; // Import react-slick
import { FaTrash } from 'react-icons/fa'; // Import trash bin icon from react-icons
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS

const Gallery = () => {
    useDocTitle('itsmeakhil - Image Gallery');

    const [images, setImages] = useState([]);
    const [isAdmin, setIsAdmin] = useState(true); // Change this to `false` for non-admin users
    const [dragging, setDragging] = useState(false);
    const [error, setError] = useState('');

    // Load images from localStorage when the component mounts
    useEffect(() => {
        const savedImages = JSON.parse(localStorage.getItem('galleryImages'));
        if (savedImages) {
            setImages(savedImages);
        }
    }, []);

    // Update localStorage whenever images are added or removed
    useEffect(() => {
        localStorage.setItem('galleryImages', JSON.stringify(images));
    }, [images]);

    // Handle image upload
    const handleFileChange = (e) => {
        const files = e.target.files;
        uploadImages(files);
    };

    const uploadImages = (files) => {
        const uploadedImages = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Basic validation for file types and sizes
            if (!file.type.startsWith('image/')) {
                setError('Please upload valid images only.');
                return;
            }
            if (file.size > 5 * 1024 * 1024) { // Limit size to 5MB
                setError('Image size must be less than 5MB.');
                return;
            }

            const imageUrl = URL.createObjectURL(file);
            uploadedImages.push(imageUrl);
        }
        setImages((prevImages) => [...prevImages, ...uploadedImages]);
        setError('');
    };

    // Remove image from gallery
    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    // Settings for the slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: false, // Disable fade to allow multiple images at once
        slidesToShow: 4, // Show 4 images at a time
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280, // Large desktops and above
                settings: {
                    slidesToShow: 4, // 4 images on larger desktops
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Medium desktops and large tablets
                settings: {
                    slidesToShow: 3, // Show 3 images on medium desktops
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Tablets
                settings: {
                    slidesToShow: 2, // 2 images on tablets
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Small tablets and large phones
                settings: {
                    slidesToShow: 1.5, // 1.5 images on small tablets and large phones
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Mobile phones
                settings: {
                    slidesToShow: 1, // 1 image on mobile
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-16 text-white">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Image Gallery</h1>

                {isAdmin && (
                    <div
                        className={`border-dashed border-4 ${dragging ? 'border-blue-500' : 'border-gray-700'} p-4 rounded-lg mb-8 text-center transition duration-200 ease-in-out`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDragging(true);
                        }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            const files = e.dataTransfer.files;
                            uploadImages(files);
                            setDragging(false);
                        }}
                    >
                        <p className="text-gray-400">Drag & drop your images here, or</p>
                        <label className="relative cursor-pointer inline-block text-gray-100 font-semibold px-6 py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 transition-all duration-300 ease-in-out">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                                accept="image/*"
                            />
                            Upload Images
                        </label>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                )}

                {images.length > 0 ? (
                    <Slider {...sliderSettings}>
                        {images.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-72 rounded-lg transition-opacity duration-300 ease-in-out"
                                />
                                {isAdmin && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeImage(index);
                                        }}
                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center text-gray-400 mt-8">No images uploaded yet.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
