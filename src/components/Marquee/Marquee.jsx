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
      <img src={iconPath} alt={name} className="w-8 h-8" />
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

const Marquee = () => {
  const tools = [
    { name: "AWS", iconPath: "/images/skills/aws.svg" },
    { name: "Azure", iconPath: "/images/skills/azure.svg" },
    { name: "Jenkins", iconPath: "/images/skills/jenkins.svg" },
    { name: "GitHub Actions", iconPath: "/images/skills/githubactions.svg" },
    { name: "Bash", iconPath: "/images/skills/bash.svg" },
    { name: "Python", iconPath: "/images/skills/python.svg" },
    { name: "Linux", iconPath: "/images/skills/linux.svg" },
    { name: "Prometheus", iconPath: "/images/skills/prometheus.svg" },
    { name: "Grafana", iconPath: "/images/skills/grafana.svg" },
    { name: "Git", iconPath: "/images/skills/git.svg" },
    { name: "Terraform", iconPath: "/images/skills/terraform.svg" },
    { name: "Ansible", iconPath: "/images/skills/ansible.svg" },
    { name: "GitHub", iconPath: "/images/skills/github.svg" },
    { name: "C", iconPath: "/images/skills/c.svg" },
    { name: "C++", iconPath: "/images/skills/cpp.svg" },
    { name: "C#", iconPath: "/images/skills/csharp.svg" },
    { name: "HTML", iconPath: "/images/skills/html.svg" },
    { name: "CSS", iconPath: "/images/skills/css.svg" },
    { name: "Tailwind CSS", iconPath: "/images/skills/tailwindcss.svg" },
  ];

  return (
    <div className="py-8 overflow-hidden backdrop-blur-lg relative glow-effect">
      <h3 className="text-center text-blue-400 mb-4 text-xl">I have used these tools</h3>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {tools.map((tool, index) => (
            <ToolIcon key={index} name={tool.name} iconPath={tool.iconPath} />
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
          {tools.map((tool, index) => (
            <ToolIcon key={index + tools.length} name={tool.name} iconPath={tool.iconPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
