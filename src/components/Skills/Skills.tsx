import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../Theme/ThemeContext";
import { technologies } from "../../data/constants";

const categoryMeta = [
  { key: "fullStack", label: "Full Stack", icon: "🌐" },
  { key: "frontend", label: "Frontend", icon: "⚛️" },
  { key: "backend", label: "Backend", icon: "🚀" },
  { key: "desktop", label: "Desktop", icon: "🖥️" },
  { key: "mobile", label: "Mobile", icon: "📱" },
  { key: "web", label: "Web", icon: "🌍" },
  { key: "languages", label: "Languages", icon: "📚" },
  { key: "testing", label: "Testing", icon: "🧪" },
  { key: "devops", label: "DevOps", icon: "🔄" },
  { key: "cloud", label: "Cloud", icon: "☁️" },
  { key: "uiux", label: "UI/UX & Design", icon: "🎨" },
  { key: "collaboration", label: "Collaboration", icon: "👥" },
  { key: "aiTools", label: "AI Tools", icon: "🤖" },
  { key: "applicationPackaging", label: "App Packaging", icon: "📦" },
];

const getSkillLevel = (name: string): number | undefined => {
  // Optionally, map skill names to proficiency levels here
  // For demo, return undefined (no bar), or set a default
  return undefined;
};

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
          >
            My Technical Skills
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive showcase of my expertise across modern technologies, frameworks, and tools.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryMeta.map((cat) => {
            const skills = (technologies as any)[cat.key];
            if (!skills) return null;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`rounded-2xl shadow-xl p-6 flex flex-col glass-card border border-white/10 backdrop-blur-md ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/90"
                    : "bg-gradient-to-br from-white/80 via-blue-50/60 to-white/90"
                }`}
                style={{ minHeight: 320 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-xl font-bold tracking-wide">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  {skills.map((skill: any) => (
                    <div key={skill.name} className="flex items-center gap-3 group">
                      <span className="text-xl">{skill.icon}</span>
                      <span
                        className={`font-medium text-base flex-1 ${
                          isDarkMode ? "text-gray-100" : "text-gray-800"
                        }`}
                      >
                        {skill.name}
                      </span>
                      {/* Optionally show a progress bar if you want to map levels */}
                      {typeof getSkillLevel(skill.name) === "number" && (
                        <div className="w-32">
                          <div className={`w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${getSkillLevel(skill.name)}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                              className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
