import { useState } from 'react';
import { Person } from '../utils/portfolioData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface AchievementsSectionProps {
  person: Person;
}

export default function AchievementsSection({ person }: AchievementsSectionProps) {
  const [achievements, setAchievements] = useState(person.achievements);
  const { theme } = useTheme();

  const handleTitleChange = (id: string, newTitle: string) => {
    setAchievements(prev =>
      prev.map(achievement =>
        achievement.id === id ? { ...achievement, title: newTitle } : achievement
      )
    );
  };

  const handleDescriptionChange = (id: string, newDescription: string) => {
    setAchievements(prev =>
      prev.map(achievement =>
        achievement.id === id ? { ...achievement, description: newDescription } : achievement
      )
    );
  };

  return (
    <div>
      <h2 className={`mb-8 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Achievements & Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`rounded-xl overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20'
                : 'bg-white border-gray-200 hover:border-violet-400 shadow-md hover:shadow-lg hover:shadow-violet-400/20'
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <ImageWithFallback
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                theme === 'dark'
                  ? 'bg-violet-600 shadow-violet-500/50'
                  : 'bg-violet-600 shadow-violet-600/50'
              }`}>
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3
                className={`mb-3 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleTitleChange(achievement.id, e.currentTarget.textContent || '')}
              >
                {achievement.title}
              </h3>
              <p
                className={theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleDescriptionChange(achievement.id, e.currentTarget.textContent || '')}
              >
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}