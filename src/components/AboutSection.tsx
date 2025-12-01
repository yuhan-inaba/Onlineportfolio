import { useState } from 'react';
import { Person } from '../utils/portfolioData';
import { GraduationCap, Lightbulb, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface AboutSectionProps {
  person: Person;
}

export default function AboutSection({ person }: AboutSectionProps) {
  const [education, setEducation] = useState(person.education);
  const [skills, setSkills] = useState(person.skills);
  const [hobbies, setHobbies] = useState(person.hobbies);
  const { theme } = useTheme();

  return (
    <div>
      <h2 className={`mb-8 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>About Me</h2>
      
      <div className="space-y-8">
        {/* Education */}
        <div className={`rounded-xl p-8 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50'
            : 'bg-white border-gray-200 hover:border-violet-400 shadow-md'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-violet-600/20' : 'bg-violet-100'
            }`}>
              <GraduationCap className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
            </div>
            <h3 className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}>Education</h3>
          </div>
          <p
            className={theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setEducation(e.currentTarget.textContent || '')}
          >
            {education}
          </p>
        </div>

        {/* Skills */}
        <div className={`rounded-xl p-8 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50'
            : 'bg-white border-gray-200 hover:border-violet-400 shadow-md'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-violet-600/20' : 'bg-violet-100'
            }`}>
              <Lightbulb className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
            </div>
            <h3 className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}>Skills</h3>
          </div>
          <p
            className={theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setSkills(e.currentTarget.textContent || '')}
          >
            {skills}
          </p>
        </div>

        {/* Hobbies */}
        <div className={`rounded-xl p-8 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50'
            : 'bg-white border-gray-200 hover:border-violet-400 shadow-md'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-violet-600/20' : 'bg-violet-100'
            }`}>
              <Heart className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
            </div>
            <h3 className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}>Hobbies & Interests</h3>
          </div>
          <p
            className={theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setHobbies(e.currentTarget.textContent || '')}
          >
            {hobbies}
          </p>
        </div>
      </div>
    </div>
  );
}