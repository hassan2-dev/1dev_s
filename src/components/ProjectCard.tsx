import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "web":
        return "موقع إلكتروني";
      case "mobile":
        return "تطبيق جوال";
      case "graduation":
        return "مشروع تخرج";
      case "network":
        return "محاكاة شبكات";
      default:
        return "مشروع";
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg relative group bg-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-blue-900/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 text-white`}
        >
          <p className="mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {project.description}
          </p>
          <div className="flex gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-900 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-900 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <span className="inline-block px-3 py-1 text-xs bg-teal-100 text-teal-800 rounded-full mb-3 transform transition-transform duration-300 group-hover:scale-105">
          {getCategoryLabel(project.category)}
        </span>
        <h3 className="text-xl font-bold text-gray-900 transform transition-transform duration-300 group-hover:scale-105">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
