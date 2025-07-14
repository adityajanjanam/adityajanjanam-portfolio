import { motion } from "framer-motion";
import * as React from "react";

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      degree: "Postgraduate Diploma in Mobile Applications Development",
      institution: "Centennial College",
      year: "Sep 2024 – Apr 2025",
      grade: "Grade: 3.55 (FIRST CLASS)",
      description:
        "🎓 Completed Post Graduation Diploma in Mobile Applications Development at Centennial College. 👨‍💻 Acquired advanced skills in mobile app development, focusing on both Android and iOS platforms. Leveraging modern technologies like Kotlin, Swift, and React Native to create dynamic, user-friendly applications. 🌟 Worked on industry-driven projects, gaining valuable hands-on experience in mobile app architecture, UI/UX design, and backend integration. Committed to delivering innovative solutions that enhance user experience and drive business success. 🚀 Passionate about developing intuitive, high-performance mobile applications, I'm eager to apply my skills and knowledge in creating impactful, user-centric apps.",
      skills: [
        "Full-Stack Development",
        "User Experience (UX)",
        "React Native",
        "Web Applications",
        "Software Development",
        "iOS Development",
        "Mobile Application Development",
        "Debugging",
        "Microsoft Visual Studio Code",
        "Mobile Interface Design",
        "Android Development",
        "User Experience Design (UED)",
      ],
      logo: "📱",
    },
    {
      degree: "Postgraduate Diploma in Computer Applications Development",
      institution: "Conestoga College",
      year: "Sep 2023 – Apr 2024",
      grade: "Grade: 3.76 (DISTINCTION)",
      description:
        "🎓 Graduated with Distinction in the Postgraduate Diploma in Computer Applications Development from Conestoga College, Waterloo, Canada. 💡 Passionate about building impactful software and driving digital innovation. Gained hands-on experience in full-stack development through real-world projects and collaboration with industry experts. 🚀 Skilled in HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, SQL, NoSQL, C#, ASP.NET Core, Firebase, and Heroku. 📚 Key coursework: Web Development, Software Development Techniques, Database Management, Mobile App Development, Microsoft Web Technologies, UX Design, Software Quality, Systems Analysis, and System Development Projects.",
      skills: [
        "SQL",
        "Full-Stack Development",
        "Web Applications",
        "Software Development",
        "Mobile Application Development",
        "C#",
        "Microsoft Visual Studio Code",
        "MERN Stack",
        "Web Development",
        ".NET",
        "ASP.NET MVC",
        "User Experience Design (UED)",
        "Front-end Development",
        "Software Development Life Cycle (SDLC)",
      ],
      logo: "💻",
    },
    {
      degree:
        "Bachelor of Engineering - Electronics and Communications Engineering",
      institution: "Sathyabama Institute of Science & Technology, Chennai",
      year: "Jun 2016 – May 2020",
      grade: "Grade: 3.06 (FIRST CLASS)",
      description:
        "I graduated from Sathyabama Institute of Science and Technology in 2020 with a Bachelor's degree in Electronics and Communication Engineering. My studies encompassed a wide range of subjects, including C, C++, Data Structures in C, Python, Digital Logic Circuits (DLC), Analog Communications, Digital Communications, Signal Processing, Microcontrollers, Mathematics, Physics, Chemistry, English, and Electrical Technology. This diverse academic experience provided me with a solid foundation in both theoretical concepts and practical applications, equipping me with the skills necessary to excel in the rapidly evolving field of electronics and communication.",
      skills: [
        "Microsoft Office",
        "Problem Solving",
        "C++",
        "Microsoft Visual Studio Code",
        "English",
        "Electronics",
        "Communication",
        "C (Programming Language)",
        "Programming",
        "Python (Programming Language)",
        "Object-Oriented Programming (OOP)",
      ],
      logo: "🎓",
    },
    {
      degree: "INTERMEDIATE - Mathematics, Physics and Chemistry (MPC)",
      institution: "Vignan Co operative Junior College",
      year: "Jun 2014 – Apr 2016",
      grade: "Grade: 95.7% (DISTINCTION)",
      description:
        "I completed my Intermediate education in MPC (Mathematics, Physics, and Chemistry) at Vignan Cooperative Junior College, achieving a score of 95.7%. Alongside my core subjects, I also studied English and Sanskrit, which helped me develop strong communication and analytical skills. This academic foundation not only enhanced my logical reasoning and problem-solving abilities but also prepared me for advanced studies in technology and engineering. I have been actively involved in extracurricular activities, particularly essay writing and stage performances.",
      skills: ["Chemistry", "Physics", "English", "Sanskrit", "Mathematics"],
      logo: "🔬",
    },
    {
      degree: "SSC - Mathematics",
      institution: "Teja High School",
      year: "Jun 2004 – May 2014",
      grade: "Grade: 83% (FIRST CLASS)",
      description:
        "I completed my 10th (SSC) at Teja High School, where I studied a diverse range of subjects including Telugu, Sanskrit, Hindi, English, Mathematics, Physics, Biology, and Social Studies. I achieved an 8.3 GPA in the State Board Exams, laying a solid academic foundation that helped shape my analytical and communication skills for future studies. I have been actively involved in extracurricular activities, particularly essay writing and stage performances.",
      skills: [
        "Telugu",
        "Biology",
        "Physics",
        "English",
        "Sanskrit",
        "Mathematics",
        "Hindi",
        "Social Studies",
      ],
      logo: "🏫",
    },
  ];

  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${
        isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2
          className={`text-3xl sm:text-4xl font-bold ${
            isDarkMode ? "text-cyan-400" : "text-blue-600"
          } mb-3`}
        >
          Education
        </h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Continuous learning and academic achievements
        </p>
      </motion.div>

      <div className="relative space-y-10">
        <div
          className={`absolute left-4 top-2 bottom-2 w-0.5 ${
            isDarkMode ? "bg-cyan-700" : "bg-blue-200"
          } hidden md:block`}
        />

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div
              className={`absolute left-[10px] top-1 w-4 h-4 rounded-full ${
                isDarkMode
                  ? "bg-cyan-400 border-gray-800"
                  : "bg-blue-500 border-gray-200"
              } border-2 hidden md:block
                          group-hover:scale-125 transition-transform duration-300`}
            />

            <div
              className={`ml-0 md:ml-10 p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-900 to-black border-cyan-800"
                  : "bg-gradient-to-br from-white to-gray-50 border-blue-200 shadow-lg"
              } border
                          hover:border-gray-600 transition-colors duration-300`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-cyan-300" : "text-blue-700"
                    } flex items-center gap-2`}
                  >
                    <span>{edu.logo}</span>
                    {edu.degree}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } mt-1`}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    } mt-1`}
                  >
                    {edu.grade}
                  </p>
                </div>
                <span
                  className={`mt-2 sm:mt-0 px-3 py-1 text-sm ${
                    isDarkMode
                      ? "bg-purple-900/40 text-purple-300"
                      : "bg-purple-100 text-purple-700"
                  } rounded-full`}
                >
                  {edu.year}
                </span>
              </div>

              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } leading-relaxed mb-4 text-justify`}
              >
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-2 py-1 text-xs rounded-full ${
                      isDarkMode
                        ? "bg-blue-900/40 text-blue-300 border border-blue-700"
                        : "bg-blue-100 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
