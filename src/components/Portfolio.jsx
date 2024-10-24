import React, { useState } from "react";
import { FaCode, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDocTitle } from "./CustomHook.jsx";
import logoImg from "../images/StreetLight.png"; // Update this path
import NavBar from "./Navbar/NavBar";

const Portfolio = () => {
  useDocTitle("Portfolio");
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      <NavBar />
      {/* Logo Section */}
      <div className="absolute inset-0 flex justify-center  items-center z-20">
        <img
          src={logoImg}
          alt="Akhil's Logo"
          className="w-1/2 h-auto object-cover object-center transition duration-500 ease-in-out transform hover:scale-110"
          style={{
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.7))",
          }}
        />
      </div>

      {/* DevOps Section */}
      <Link
        to="/devops-portfolio"
        className={`w-1/2 h-full group relative flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          hoveredSection === "devops"
            ? "w-[55%]"
            : hoveredSection === "photography"
            ? "w-[45%]"
            : "w-[50%]"
        }`}
        onMouseEnter={() => setHoveredSection("devops")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black h-screen opacity-100 transition-opacity duration-600 ease-in-out group-hover:opacity-100" />

        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse">
        <div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-5xl bottom-1/4 right-1/4 animate-pulse"
        style={{ animationDelay: "1s" }}
        />
        </div>

        <div className="relative z-20 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform group-hover:scale-130">
          <div className="flex justify-center items-center mb-4">
            <FaCode className="text-[10rem] text-white transition-all duration-500 group-hover:text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-2">DevOps</h2>
          <p className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:text-gray-400">
            Explore my technical projects
          </p>
        </div>
      </Link>

      {/* Photography Section */}
      <Link
        to="/photography-portfolio"
        className={`w-1/2 h-full group relative flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          hoveredSection === "photography"
            ? "w-[55%]"
            : hoveredSection === "devops"
            ? "w-[45%]"
            : "w-[50%]"
        }`}
        onMouseEnter={() => setHoveredSection("photography")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black h-screen opacity-100 transition-opacity duration-600 ease-in-out group-hover:opacity-100" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse">
        <div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-5xl bottom-1/4 right-1/4 animate-pulse"
        style={{ animationDelay: "1s" }}
        />
        </div>

        <div className="relative z-20 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform group-hover:scale-130">
          <div className="flex justify-center items-center mb-4">
            <FaCamera className="text-[8rem] text-white transition-all duration-500 group-hover:text-white-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-2">Photography</h2>
          <p className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:text-gray-400">
            View my photography portfolio
          </p>
          </div>
        
      </Link>
    </div>
  );
};

export default Portfolio;
