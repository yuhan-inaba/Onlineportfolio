import { useState } from 'react';
import { Person } from '../utils/portfolioData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';

interface ActivitiesSectionProps {
  person: Person;
}

export default function ActivitiesSection({ person }: ActivitiesSectionProps) {
  const [activities, setActivities] = useState(person.activities);
  const { theme } = useTheme();

  const handleCaptionChange = (id: string, newCaption: string) => {
    setActivities(prev =>
      prev.map(activity =>
        activity.id === id ? { ...activity, caption: newCaption } : activity
      )
    );
  };

  return (
    <div>
      <h2 className={`mb-8 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`rounded-xl overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20'
                : 'bg-white border-gray-200 hover:border-violet-400 shadow-md hover:shadow-lg hover:shadow-violet-400/20'
            }`}
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src={activity.image}
                alt={activity.caption}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p
                className={theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleCaptionChange(activity.id, e.currentTarget.textContent || '')}
              >
                {activity.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}