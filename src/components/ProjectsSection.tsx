import { useState } from 'react';
import { Person } from '../utils/portfolioData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectsSectionProps {
  person: Person;
}

export default function ProjectsSection({ person }: ProjectsSectionProps) {
  const [projects, setProjects] = useState(person.projects);
  const { theme } = useTheme();

  const handleTitleChange = (id: string, newTitle: string) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, title: newTitle } : project
      )
    );
  };

  const handleDescriptionChange = (id: string, newDescription: string) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, description: newDescription } : project
      )
    );
  };

  return (
    <div>
      <h2 className={`mb-8 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-xl overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20'
                : 'bg-white border-gray-200 hover:border-violet-400 shadow-md hover:shadow-lg hover:shadow-violet-400/20'
            }`}
          >
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3
                className={`mb-3 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleTitleChange(project.id, e.currentTarget.textContent || '')}
              >
                {project.title}
              </h3>
              <p
                className={theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleDescriptionChange(project.id, e.currentTarget.textContent || '')}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}