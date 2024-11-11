import { Github, Linkedin, Code2, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Himanshu Gupta
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                Full-Stack Developer | Competitive Programmer | Agile Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                B.Tech Computer Science student at IIIT Vadodara with a passion
                for building scalable softwares, web applications and solving
                complex algorithmic problems.
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.geeksforgeeks.org/user/himanshug9119/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <Code2 className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  GeeksforGeeks
                </span>
              </a>

              <a
                href="https://github.com/himanshug9119"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <Github className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  GitHub
                </span>
              </a>
              <a
                href="https://linkedin.com/in/himanshug9119"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <Linkedin className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://leetcode.com/himanshug9119"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <Code2 className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  LeetCode
                </span>
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="mailto:work.himanshu489@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <div className="relative mx-auto w-80 h-80">
              <img
                src="/himanshu.jpg"
                alt="Himanshu Gupta"
                className="rounded-full object-cover w-full h-full shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;