import { useState } from 'react';
import { Person } from '../utils/portfolioData';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ContactSectionProps {
  person: Person;
}

export default function ContactSection({ person }: ContactSectionProps) {
  const [email, setEmail] = useState(person.email);
  const [phone, setPhone] = useState(person.phone);
  const { theme } = useTheme();

  return (
    <div>
      <h2 className={`mb-8 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Email */}
        <div className={`rounded-xl p-8 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50'
            : 'bg-white border-gray-200 hover:border-violet-400 shadow-md'
        }`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-violet-600/20' : 'bg-violet-100'
            }`}>
              <Mail className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
            </div>
            <h3 className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}>Email</h3>
          </div>
          <p
            className={theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setEmail(e.currentTarget.textContent || '')}
          >
            {email}
          </p>
        </div>

        {/* Phone */}
        <div className={`rounded-xl p-8 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500/50'
            : 'bg-white border-gray-200 hover:border-violet-400 shadow-md'
        }`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              theme === 'dark' ? 'bg-violet-600/20' : 'bg-violet-100'
            }`}>
              <Phone className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
            </div>
            <h3 className={theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}>Phone</h3>
          </div>
          <p
            className={theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setPhone(e.currentTarget.textContent || '')}
          >
            {phone}
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className={`rounded-xl p-8 border ${
        theme === 'dark'
          ? 'bg-neutral-900 border-neutral-800'
          : 'bg-white border-gray-200 shadow-md'
      }`}>
        <h3 className={`mb-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>Connect on Social Media</h3>
        <div className="flex flex-wrap gap-4">
          {person.socialLinks.github && (
            <a
              href={person.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-neutral-800 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/50'
                  : 'bg-gray-100 hover:bg-violet-600 shadow-sm hover:shadow-lg hover:shadow-violet-600/50'
              }`}
            >
              <Github className={`w-5 h-5 transition-colors ${
                theme === 'dark'
                  ? 'text-violet-400 group-hover:text-white'
                  : 'text-violet-600 group-hover:text-white'
              }`} />
              <span className={`transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-300 group-hover:text-white'
                  : 'text-gray-700 group-hover:text-white'
              }`}>GitHub</span>
            </a>
          )}
          {person.socialLinks.linkedin && (
            <a
              href={person.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-neutral-800 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/50'
                  : 'bg-gray-100 hover:bg-violet-600 shadow-sm hover:shadow-lg hover:shadow-violet-600/50'
              }`}
            >
              <Linkedin className={`w-5 h-5 transition-colors ${
                theme === 'dark'
                  ? 'text-violet-400 group-hover:text-white'
                  : 'text-violet-600 group-hover:text-white'
              }`} />
              <span className={`transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-300 group-hover:text-white'
                  : 'text-gray-700 group-hover:text-white'
              }`}>LinkedIn</span>
            </a>
          )}
          {person.socialLinks.twitter && (
            <a
              href={person.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-neutral-800 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/50'
                  : 'bg-gray-100 hover:bg-violet-600 shadow-sm hover:shadow-lg hover:shadow-violet-600/50'
              }`}
            >
              <Twitter className={`w-5 h-5 transition-colors ${
                theme === 'dark'
                  ? 'text-violet-400 group-hover:text-white'
                  : 'text-violet-600 group-hover:text-white'
              }`} />
              <span className={`transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-300 group-hover:text-white'
                  : 'text-gray-700 group-hover:text-white'
              }`}>Twitter</span>
            </a>
          )}
          {person.socialLinks.instagram && (
            <a
              href={person.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-neutral-800 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/50'
                  : 'bg-gray-100 hover:bg-violet-600 shadow-sm hover:shadow-lg hover:shadow-violet-600/50'
              }`}
            >
              <Instagram className={`w-5 h-5 transition-colors ${
                theme === 'dark'
                  ? 'text-violet-400 group-hover:text-white'
                  : 'text-violet-600 group-hover:text-white'
              }`} />
              <span className={`transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-300 group-hover:text-white'
                  : 'text-gray-700 group-hover:text-white'
              }`}>Instagram</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}