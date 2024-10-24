import React, { useState } from 'react';
import '../../index.css';

const ToolIcon = ({ name, iconPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center mx-4 transition-all duration-300 transform hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src={iconPath} 
          alt={name} 
          className="w-full h-full object-contain shadow-white" 
        />
      </div>
      <span
        className={`mt-2 text-xs text-blue-300 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {name}
      </span>
    </div>
  );
};


const MarqueeL = () => {
  const tools = [
    { name: "AWS", iconPath: "/images/skills/anaconda.svg" },
    { name: "Azure", iconPath: "/images/skills/docker.svg" },
    { name: "Jenkins", iconPath: "/images/skills/figma.svg" },
    { name: "GitHub Actions", iconPath: "/images/skills/javascript.svg" },
    { name: "Bash", iconPath: "/images/skills/jenkins.svg" },
    { name: "Python", iconPath: "/images/skills/json.svg" },
    { name: "Linux", iconPath: "/images/skills/kubernetes.svg" },
    { name: "Prometheus", iconPath: "/images/skills/latex.svg" },
    { name: "Grafana", iconPath: "/images/skills/linux.svg" },
    { name: "Git", iconPath: "/images/skills/mariadb.svg" },
    { name: "Terraform", iconPath: "/images/skills/microsoftiis.svg" },
    { name: "Ansible", iconPath: "/images/skills/mongodb.svg" },
    { name: "GitHub", iconPath: "/images/skills/mssql.svg" },
    { name: "C", iconPath: "/images/skills/mysql.svg" },
    { name: "C++", iconPath: "/images/skills/nginx.svg" },
    { name: "C#", iconPath: "/images/skills/ngrok.svg" },
    { name: "HTML", iconPath: "/images/skills/nodejs.svg" },
    { name: "CSS", iconPath: "/images/skills/obsidian.svg" },
    { name: "Tailwind CSS", iconPath: "/images/skills/powershell.svg" },
    { name: "Tailwind CSS", iconPath: "/images/skills/putty.svg" },
  ];

  // Duplicate the array for a seamless scrolling effect
  const marqueeTools = [...tools, ...tools];

  return (
    <div className="py-8 overflow-hidden relative">
      <div className="relative w-full overflow-hidden">
        {/* Single left-moving marquee */}
        <div className="flex animate-marqueeLeft whitespace-nowrap">
          {marqueeTools.map((tool, index) => (
            <ToolIcon key={index} name={tool.name} iconPath={tool.iconPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeL;
