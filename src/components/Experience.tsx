import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Doubt Support Engineer Intern",
    company: "GeeksForGeeks",
    location: "Remote",
    period: "Feb 2024 - Oct 2024",
    description: [
      "Provided technical support and guidance to students learning Data Structures and Algorithms",
      "Resolved 500+ coding-related queries with 95% satisfaction rate",
      "Created educational content and example solutions for complex programming problems",
    ],
    technologies: [
      "Data Structures",
      "Algorithms",
      "C++",
      "Python",
      "Java",
      "Web Development",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "IIIT Vadodara",
    location: "Diu, India",
    period: "Aug 2023 - Aug 2023",
    description: [
      "Developed and maintained a sports fest website, focusing on user engagement and experience.",
      "Collaborated with a team to implement responsive designs and optimize performance using React and Tailwind CSS.",
      "Implemented version control processes using Git, facilitating effective collaboration across a team of five developers and ensuring consistent code management during the entire project lifecycle.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center mb-16">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-indigo-600 dark:text-indigo-400">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 space-y-2 md:text-right">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;