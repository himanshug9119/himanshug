import React from 'react';
import { Code, Server, Database, Cloud } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    icon: <Code className="w-6 h-6" />,
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Material-UI'],
    icon: <Code className="w-6 h-6" />,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
    icon: <Server className="w-6 h-6" />,
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    icon: <Database className="w-6 h-6" />,
  },
  {
    category: 'Cloud & Tools',
    items: ['AWS', 'Docker', 'Git', 'CI/CD'],
    icon: <Cloud className="w-6 h-6" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm a Computer Science student at IIIT Vadodara, passionate about building scalable web applications
              and solving complex problems. With a strong foundation in both frontend and backend development,
              I strive to create efficient and user-friendly solutions.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    {React.cloneElement(skill.icon, {
                      className: 'w-6 h-6 text-indigo-600 dark:text-indigo-400',
                    })}
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;