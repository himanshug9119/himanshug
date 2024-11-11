import React from 'react';
import { Award, Code, Medal, Trophy } from 'lucide-react';

const achievements = [
  {
    category: 'Competitive Programming',
    items: [
      {
        title: 'LeetCode',
        description: 'Knight Badge (2000+ rating)',
        icon: <Trophy className="w-6 h-6" />,
      },
      {
        title: 'CodeChef',
        description: '5⭐ Coder (2100+ rating)',
        icon: <Code className="w-6 h-6" />,
      },
    ],
  },
  {
    category: 'Certifications',
    items: [
      {
        title: 'IBM Full Stack Developer',
        description: 'Professional Certificate',
        icon: <Award className="w-6 h-6" />,
      },
      {
        title: 'NVIDIA Deep Learning',
        description: 'Fundamentals Certificate',
        icon: <Medal className="w-6 h-6" />,
      },
    ],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center mb-16">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                          {React.cloneElement(item.icon, {
                            className: 'text-indigo-600 dark:text-indigo-400',
                          })}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Additional Achievements
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span className="text-gray-600 dark:text-gray-400">
                Solved 500+ problems on LeetCode with consistent participation in weekly contests
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span className="text-gray-600 dark:text-gray-400">
                Ranked in top 1% among 100K+ participants in CodeChef Long Challenge
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span className="text-gray-600 dark:text-gray-400">
                Winner of college-level hackathon for innovative web application solution
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;