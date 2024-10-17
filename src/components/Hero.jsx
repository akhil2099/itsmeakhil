import React from "react";
import NavBar from "./Navbar/NavBar";
import backgroundImg from "../images/Akhil.jpg";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("Explore"); // Make sure this matches the ID of the Services section
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="bg-gray-900 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`, // Custom background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <div className="absolute inset-0 bg-black opacity-50 z-0" /> {/* Overlay */}
        <div
          className="flex flex-col items-center justify-center mx-4 p-2 md:p-12 relative z-10 text-center text-white"
          data-aos="zoom-in"
        >
          <h1 className="mb-5 md:text-5xl text-3xl font-extrabold">
            Capture the World in Your Pocket
          </h1>
          <div className="text-xl font-sans tracking-tight mb-5">
            Explore the art of mobile photography and discover how to turn
            everyday moments into stunning visual stories. Our comprehensive guides and tips will help you master your smartphone's camera.
          </div>
          {/* Minimalistic scroll down button with just a down arrow icon */}
          <button
            onClick={scrollToSection}
            className="bg-transparent border-0 cursor-pointer mt-4"
            aria-label="Scroll Down"
          >
            <svg
              className="w-8 h-8 text-white animate-bounce" // Adjust size and color as needed
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
