import React from "react";

import PageLayout from "../Layout/PageLayout";

const skills = [
  "Mobile Development",
  "Web Development",
  "Full Stack",
  "UI/UX Design",
  "Software Testing",
  "Application Packaging",
];

const skillCategories = [
  {
    title: "Full Stack",
    items: ["React.js", "Node.js", "Express", "MongoDB", "EJS"],
    color: "blue",
  },
  {
    title: "Desktop",
    items: [".NET", "C#", "WPF", "WinForms"],
    color: "purple",
  },
  {
    title: "Mobile",
    items: ["Flutter", "React Native", "Android/Kotlin", "iOS/Swift"],
    color: "pink",
  },
  {
    title: "Web",
    items: ["HTML", "CSS", "JavaScript", "ASP.NET MVC"],
    color: "teal",
  },
  {
    title: "Testing",
    items: ["Manual Testing", "Selenium", "Java", "Postman"],
    color: "yellow",
  },
  {
    title: "Application Packaging",
    items: ["MSI/MSIX", "PowerShell", "SCCM/MECM", "Intune"],
    color: "green",
  },
];

const Home: React.FC = () => {
  return (
    <PageLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div>
            <h2 className="text-3xl font-bold text-pink-400 mb-1">
              안녕하세요!
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
              I am <span className="text-indigo-400">Aditya Janjanam!</span>
            </h1>
            <div className="text-lg font-medium text-gray-400 mb-4">
              Full Stack Developer | Mobile App Developer | Software Engineer | Application Packager 
            </div>
            <div className="flex gap-8 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-teal-400">3+</span>
                <span className="text-xs text-gray-400">YEARS EXPERIENCE</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-yellow-400">15+</span>
                <span className="text-xs text-gray-400">PROJECTS</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 dark:bg-gray-900/40 rounded-2xl border border-indigo-700/30 shadow-lg p-6 mb-2 backdrop-blur-md">
            <h3 className="text-xl font-bold text-indigo-400 mb-2">About Me</h3>
            <p className="text-gray-300 mb-2">
              As an international student, I am currently pursuing a Graduate
              Certificate in Mobile Applications Development at Centennial
              College in Toronto. Additionally, I hold a distinguished degree in
              Computer Applications Development from Conestoga College in
              Waterloo.
            </p>
            <p className="text-gray-300 mb-2">
              With over 3+ years of IT experience in software development and
              systems engineering, I have honed my skills through two years of
              professional engagement as a Systems Engineer at Atos. My
              specialization in Application Packaging and Testing has enabled me
              to streamline deployment processes, automate installations, and
              enhance application performance across diverse enterprise
              environments.
            </p>
            <p className="text-gray-300">
              My passion is centered on developing high-quality Mobile, Web, and
              Desktop Applications and Websites. I am proficient in a variety of
              technologies, including Android, iOS, Flutter, React Native,
              Node.js, and scripting languages such as PowerShell and VBScript.
              I am keen to apply my technical expertise and practical experience
              to contribute to innovative projects and thrive in dynamic team
              environments within the technology sector.
            </p>
            <p className="text-gray-300 mt-2">
              I am multilingual: I can speak, read, and write English, Telugu,
              and Hindi fluently; speak Tamil and Kannada fluently; and I am
              currently learning Malayalam.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-400 text-xs font-semibold text-white shadow"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-yellow-400 text-gray-900 font-bold shadow hover:bg-yellow-300 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-bold shadow hover:bg-indigo-400 transition flex items-center gap-2"
            >
              Resume{" "}
              <span className="bg-pink-500 text-white rounded px-2 py-0.5 text-xs ml-1">
                D
              </span>
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col items-center justify-center lg:justify-center relative">
          <div className="w-full max-w-xs bg-white/10 dark:bg-gray-900/60 rounded-2xl shadow-2xl border border-gray-700/40 p-6 flex flex-col items-center relative backdrop-blur-md">
            <span className="absolute top-4 right-4 bg-green-500 text-xs text-white px-3 py-1 rounded-full font-bold shadow">
              Available for Hire
            </span>
            <img
              src="/profile.png"
              alt="Aditya Janjanam"
              className="w-40 h-40 rounded-xl object-cover border-4 border-indigo-400 shadow-lg mb-4"
            />
            <div className="text-center">
              <h4 className="text-lg font-bold text-white mb-1">
                Aditya Janjanam
              </h4>
              <p className="text-indigo-400 font-medium mb-2">
                Full Stack Developer
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/janjanamaditya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow transition"
                title="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/adityajanjanam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 shadow transition"
                title="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:janjanamaditya@gmail.com"
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 shadow transition"
                title="Send Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://leetcode.com/adityajanjanam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 shadow transition"
                title="LeetCode Profile"
              >
                <i className="fa-solid fa-code"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className={`rounded-2xl p-6 shadow-lg border border-gray-700/40 bg-white/10 dark:bg-gray-900/60 backdrop-blur-md`}
          >
            <h5 className={`text-lg font-bold mb-3 text-${cat.color}-400`}>
              {cat.title}
            </h5>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1 rounded-full bg-${cat.color}-700/80 text-xs font-semibold text-white shadow`}
                >
                  {item}
                </span>
              ))}
            </div>
            {cat.title === "Application Packaging" && (
              <div className="mt-2 text-xs text-blue-300 font-semibold cursor-pointer">
                Click to view details
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
