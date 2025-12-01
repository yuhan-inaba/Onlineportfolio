import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { portfolioData } from '../utils/portfolioData';
import { ArrowLeft, User, Briefcase, Award, Mail, Download, Activity, Moon, Sun } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';
import ActivitiesSection from './ActivitiesSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import ContactSection from './ContactSection';

export default function PortfolioPage() {
  const { personId } = useParams<{ personId: string }>();
  const person = personId ? portfolioData[personId] : null;
  const [activeSection, setActiveSection] = useState<string>('activities');
  const { theme, toggleTheme } = useTheme();

  if (!person) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="text-center">
          <h2 className="mb-4">Person not found</h2>
          <Link to="/">
            <button className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-violet-600 hover:bg-violet-500 text-white'
                : 'bg-violet-600 hover:bg-violet-700 text-white shadow-md'
            }`}>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownloadCV = () => {
    alert('CV download would start here. In a real application, this would download a PDF file.');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header Section */}
      <header className={`border-b ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Back Button and Theme Toggle */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/">
              <button className={`flex items-center gap-2 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-neutral-400 hover:text-violet-400'
                  : 'text-gray-600 hover:text-violet-600'
              }`}>
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </button>
            </Link>
            
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-violet-400 hover:shadow-lg hover:shadow-violet-500/20'
                  : 'bg-white hover:bg-gray-100 text-violet-600 shadow-md hover:shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className={`w-40 h-40 rounded-full overflow-hidden border-4 transition-all duration-300 ${
              theme === 'dark'
                ? 'border-violet-500/30 hover:border-violet-500 shadow-lg shadow-violet-500/20'
                : 'border-violet-400/40 hover:border-violet-600 shadow-lg shadow-violet-400/30'
            }`}>
              <ImageWithFallback
                src={person.profileImage}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Bio */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4">
                <span className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}>
                  {person.name.split(' ')[0]}
                </span>{' '}
                {person.name.split(' ').slice(1).join(' ')}
              </h1>
              <p
                className={`max-w-2xl ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}
                contentEditable
                suppressContentEditableWarning
              >
                {person.bio}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Buttons */}
      <nav className={`border-b sticky top-0 z-10 backdrop-blur-sm ${
        theme === 'dark'
          ? 'border-neutral-800 bg-neutral-900/50'
          : 'border-gray-200 bg-white/80 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveSection('activities')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'activities'
                  ? theme === 'dark'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-violet-600 text-white shadow-lg shadow-violet-600/50'
                  : theme === 'dark'
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-violet-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-violet-600'
              }`}
            >
              <Activity className="w-5 h-5" />
              Activities
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'about'
                  ? theme === 'dark'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-violet-600 text-white shadow-lg shadow-violet-600/50'
                  : theme === 'dark'
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-violet-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-violet-600'
              }`}
            >
              <User className="w-5 h-5" />
              About
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'projects'
                  ? theme === 'dark'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-violet-600 text-white shadow-lg shadow-violet-600/50'
                  : theme === 'dark'
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-violet-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-violet-600'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Projects
            </button>
            <button
              onClick={() => setActiveSection('achievements')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'achievements'
                  ? theme === 'dark'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-violet-600 text-white shadow-lg shadow-violet-600/50'
                  : theme === 'dark'
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-violet-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-violet-600'
              }`}
            >
              <Award className="w-5 h-5" />
              Achievements
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'contact'
                  ? theme === 'dark'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-violet-600 text-white shadow-lg shadow-violet-600/50'
                  : theme === 'dark'
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-violet-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-violet-600'
              }`}
            >
              <Mail className="w-5 h-5" />
              Contact
            </button>
            <button
              onClick={handleDownloadCV}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/50'
                  : 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/50'
              }`}
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeSection === 'activities' && <ActivitiesSection person={person} />}
        {activeSection === 'about' && <AboutSection person={person} />}
        {activeSection === 'projects' && <ProjectsSection person={person} />}
        {activeSection === 'achievements' && <AchievementsSection person={person} />}
        {activeSection === 'contact' && <ContactSection person={person} />}
      </main>
    </div>
  );
}