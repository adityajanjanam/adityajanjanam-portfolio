/* eslint-disable */
import { motion } from "framer-motion";
import * as React from "react";

const Education = ({ isDarkMode }) => {
  const educationData = React.useMemo(() => ([
    {
      degree: "Postgraduate Diploma in Mobile Applications Development",
      institution: "Centennial College",
      year: "Sep 2024 – Apr 2025",
      location: "Toronto, Canada",
      grade: "Grade: 3.55 (FIRST CLASS)",
      durationMonths: 8,
      level: "Postgraduate",
      focusAreas: [
        "Native & cross-platform apps",
        "Mobile UX motion",
        "Backend integration",
      ],
      courseHighlights: [
        "Advanced Android (Kotlin)",
        "Swift iOS Studio",
        "Mobile Architecture Patterns",
        "Cloud-Connected Apps",
      ],
      achievements: [
        "Delivered a wellness mobile capstone with a 4-member squad",
        "Shipped Android & iOS builds to TestFlight and internal UAT",
      ],
      description:
        "Intensive mobile product program focused on building native and cross-platform experiences with seamless backend integrations, polished motion, and App Store readiness.",
      skills: [
        "React Native",
        "Kotlin",
        "Swift",
        "Firebase",
        "GraphQL",
        "Expo",
        "Jest",
        "Figma",
        "CI/CD",
        "Android Studio",
        "Xcode",
        "Tailwind CSS",
      ],
      logo: "📱",
    },
    {
      degree: "Postgraduate Diploma in Computer Applications Development",
      institution: "Conestoga College",
      year: "Sep 2023 – Apr 2024",
      location: "Waterloo, Canada",
      grade: "Grade: 3.76 (DISTINCTION)",
      durationMonths: 8,
      level: "Postgraduate",
      focusAreas: ["Full-stack web", "Cloud deployments", "UX research"],
      courseHighlights: [
        "Advanced Web Programming",
        "Database Systems",
        "UX Strategy & Prototyping",
        "Software Quality Assurance",
      ],
      achievements: [
        "Led a MERN-stack clinic finder adopted for campus demos",
        "Facilitated peer labs on Git workflows and DevOps",
      ],
      description:
        "Built production-grade web and cloud solutions across the MERN stack, .NET, and serverless ecosystems with a heavy emphasis on user research and agile delivery.",
      skills: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "C#",
        "ASP.NET Core",
        "Azure",
        "Heroku",
        "Postman",
        "Cypress",
        "Storybook",
      ],
      logo: "💻",
    },
    {
      degree:
        "Bachelor of Engineering – Electronics and Communications Engineering",
      institution: "Sathyabama Institute of Science & Technology, Chennai",
      year: "Jun 2016 – May 2020",
      location: "Chennai, India",
      grade: "Grade: 3.06 (FIRST CLASS)",
      durationMonths: 48,
      level: "Undergraduate",
      focusAreas: [
        "Embedded systems",
        "Signal processing",
        "Systems programming",
      ],
      courseHighlights: [
        "Digital Signal Processing",
        "Microcontroller Design",
        "Data Structures & Algorithms",
        "Wireless Communications",
      ],
      achievements: [],
      description:
        "Grounded in electronics fundamentals while applying software engineering practices to embedded, networking, and automation scenarios across multidisciplinary labs.",
      skills: [
        "C",
        "C++",
        "Python",
        "MATLAB",
        "Verilog",
        "Analog Electronics",
        "Digital Logic",
        "Project Management",
        "Technical Writing",
      ],
      logo: "🎓",
    },
    {
      degree: "Intermediate – Mathematics, Physics, Chemistry (MPC)",
      institution: "Vignan Co-operative Junior College",
      year: "Jun 2014 – Apr 2016",
      location: "Guntur, India",
      grade: "Grade: 95.7% (DISTINCTION)",
      durationMonths: 22,
      level: "Pre-University",
      focusAreas: ["STEM foundations", "Competitive aptitude", "Scientific writing"],
      courseHighlights: [
        "Physical Chemistry",
        "Scientific Communication Labs",
      ],
      achievements: [
        "Ranked in the top 5% of statewide MPC cohort",
        "Represented college at national science symposiums",
      ],
      description:
        "STEM-intensive curriculum with a focus on analytical reasoning, experimentation, and communication—laying the groundwork for engineering studies.",
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Sanskrit",
        "Public Speaking",
      ],
      logo: "🔬",
    },
    {
      degree: "SSC – Mathematics & Sciences",
      institution: "Teja High School",
      year: "Jun 2004 – May 2014",
      location: "Chirala, India",
      grade: "Grade: 83% (FIRST CLASS)",
      durationMonths: 120,
      level: "Secondary",
      focusAreas: [
        "STEM fundamentals",
        "Humanities",
        "Leadership & arts",
      ],
      courseHighlights: [
        "Integrated Science Projects",
        "Mathematical Reasoning",
        "Social Sciences Lab",
      ],
      achievements: [],
      description:
        "Comprehensive secondary schooling blending sciences, humanities, and languages with an emphasis on leadership, cultural programs, and community service.",
      skills: [
        "English",
        "Telugu",
        "Hindi",
        "Biology",
        "Social Studies",
        "Team Leadership",
      ],
      logo: "🏫",
    },
  ]), []);

  const summaryStats = React.useMemo(() => {
    const honors = educationData.filter((edu) =>
      /distinction|first class/i.test(edu.grade)
    ).length;
    const totalPrograms = educationData.length;
    const totalMonths = educationData.reduce(
      (accumulator, edu) => accumulator + (edu.durationMonths || 0),
      0
    );
    const totalYears = (totalMonths / 12).toFixed(1);
    const uniqueSkills = new Set(
      educationData.flatMap((edu) => edu.skills || [])
    ).size;

    return [
      {
        label: "Programs Completed",
        value: totalPrograms.toString().padStart(2, "0"),
        helper: "Secondary through postgraduate milestones",
      },
      {
        label: "Academic Honors",
        value: honors.toString().padStart(2, "0"),
        helper: "Distinction & first-class awards",
      },
      {
        label: "Years in Academia",
        value: totalYears,
        helper: "Continuous learning journey",
      },
      {
        label: "Unique Tools",
        value: uniqueSkills.toString(),
        helper: "Languages, frameworks, and platforms",
      },
    ];
  }, [educationData]);

  const levels = React.useMemo(
    () => ["All", ...new Set(educationData.map((edu) => edu.level))],
    [educationData]
  );

  const [selectedLevel, setSelectedLevel] = React.useState("All");

  const filteredEducation = React.useMemo(
    () =>
      selectedLevel === "All"
        ? educationData
        : educationData.filter((edu) => edu.level === selectedLevel),
    [educationData, selectedLevel]
  );

  const moduleHighlights = React.useMemo(() => {
    const seen = new Set();
    const modules = [];
    educationData.forEach((edu) => {
      (edu.courseHighlights || []).forEach((module) => {
        if (!seen.has(module)) {
          seen.add(module);
          modules.push({
            module,
            level: edu.level,
            institution: edu.institution,
          });
        }
      });
    });
    return modules.slice(0, 8);
  }, [educationData]);

  const learningThemes = React.useMemo(() => {
    const themeMap = new Map();
    educationData.forEach((edu) => {
      (edu.focusAreas || []).forEach((theme) => {
        themeMap.set(theme, (themeMap.get(theme) || 0) + 1);
      });
    });
    return Array.from(themeMap, ([theme, count]) => ({ theme, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [educationData]);

  const toolset = React.useMemo(() => {
    const unique = Array.from(
      new Set(educationData.flatMap((edu) => edu.skills))
    );
    return unique.slice(0, 18);
  }, [educationData]);

  return (
    <section
      className={`relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-[#06080f] via-[#05070e] to-black text-slate-100"
          : "bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className={`absolute -top-32 right-[-10%] h-64 w-64 rounded-full blur-3xl ${
            isDarkMode ? "bg-cyan-500/20" : "bg-blue-200"
          }`}
        />
        <div
          className={`absolute bottom-[-15%] left-[-10%] h-72 w-72 rounded-full blur-3xl ${
            isDarkMode ? "bg-purple-500/20" : "bg-indigo-200/70"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase ${
              isDarkMode ? "bg-white/5 text-cyan-200" : "bg-blue-100 text-blue-700"
            }`}
          >
            Academic Journey
          </span>
          <h2
            className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Education & Lifelong Learning
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            From foundational sciences to postgraduate diplomas in modern software development, every chapter strengthened the blend of engineering rigor, product thinking, and community leadership.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-5 transition-all duration-300 ${
                isDarkMode
                  ? [
                      "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-white/10",
                      "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 border border-white/10",
                      "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-white/10",
                      "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border border-white/10",
                    ][idx % 4]
                  : [
                      "bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 border-2 border-blue-100",
                      "bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border-2 border-pink-100",
                      "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-100",
                      "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-2 border-amber-100",
                    ][idx % 4]
              } hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{stat.label}</p>
                  <p className="text-3xl font-bold mt-1 mb-1">{stat.value}</p>
                  <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{stat.helper}</p>
                </div>
                <div className={`ml-3 rounded-xl p-2 ${isDarkMode ? "bg-black/30 border border-white/10" : "bg-white border border-slate-200"}`}>
                  {idx % 4 === 0 && (
                    <svg className={`${isDarkMode ? "text-cyan-300" : "text-blue-600"} h-5 w-5`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 10h18M3 16h18" />
                    </svg>
                  )}
                  {idx % 4 === 1 && (
                    <svg className={`${isDarkMode ? "text-pink-300" : "text-pink-600"} h-5 w-5`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  )}
                  {idx % 4 === 2 && (
                    <svg className={`${isDarkMode ? "text-emerald-300" : "text-emerald-600"} h-5 w-5`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {idx % 4 === 3 && (
                    <svg className={`${isDarkMode ? "text-amber-300" : "text-amber-600"} h-5 w-5`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 13.347a1 1 0 00-1.175 0L6.645 16.283c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.99 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.059-3.293z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {levels.map((level) => {
            const isActive = level === selectedLevel;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setSelectedLevel(level)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? isDarkMode
                      ? "bg-cyan-500 text-black border-transparent shadow-[0_10px_30px_-12px_rgba(34,211,238,0.6)]"
                      : "bg-blue-600 text-white border-blue-500 shadow-[0_10px_30px_-12px_rgba(37,99,235,0.55)]"
                    : isDarkMode
                      ? "bg-white/5 text-slate-200 border-white/10 hover:border-cyan-400/60"
                      : "bg-white text-slate-600 border-blue-200 hover:border-blue-400"
                }`}
              >
                {level}
              </button>
            );
          })}
        </div>

        <p className={`mt-3 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
          Showing {filteredEducation.length} of {educationData.length} programs
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
          <div className="space-y-6">
            {filteredEducation.map((edu, index) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-3xl border px-6 py-6 sm:px-8 sm:py-8 transition-all duration-500 ${
                  isDarkMode
                    ? "border-white/10 bg-white/5 hover:border-cyan-400/60 hover:shadow-[0_24px_60px_-32px_rgba(34,211,238,0.7)]"
                    : "border-blue-100 bg-white hover:border-blue-400/60 hover:shadow-[0_24px_60px_-32px_rgba(37,99,235,0.45)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500"
                      : "bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                  }`}
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                            isDarkMode
                              ? "bg-cyan-500/15 text-cyan-200 border border-cyan-400/40"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {edu.logo} {edu.level}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                            isDarkMode
                              ? "bg-emerald-500/15 text-emerald-200 border border-emerald-400/40"
                              : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                          }`}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                        {edu.degree}
                      </h3>
                      <p
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {edu.institution} • {edu.location}
                      </p>
                      <p
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          isDarkMode ? "text-emerald-300" : "text-emerald-600"
                        }`}
                      >
                        {edu.grade}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {edu.description}
                  </p>

                  {(() => {
                    const hasCourseHighlights = (edu.courseHighlights || []).length > 0;
                    const hasAchievements = (edu.achievements || []).length > 0;

                    if (!hasCourseHighlights && !hasAchievements) {
                      return null;
                    }

                    return (
                      <div
                        className={`grid gap-4 ${
                          hasCourseHighlights && hasAchievements ? "md:grid-cols-2" : ""
                        }`}
                      >
                        {hasCourseHighlights && (
                          <div>
                            <h4
                              className={`text-xs font-semibold uppercase tracking-wider ${
                                isDarkMode ? "text-cyan-200" : "text-blue-600"
                              }`}
                            >
                              Signature Coursework
                            </h4>
                            <ul className="mt-2 space-y-2 text-xs">
                              {(edu.courseHighlights || []).slice(0, 4).map((course) => (
                                <li
                                  key={`${edu.degree}-${course}`}
                                  className="flex items-start gap-2"
                                >
                                  <span
                                    className={
                                      isDarkMode
                                        ? "mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400"
                                        : "mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"
                                    }
                                  />
                                  <span className="text-justify leading-snug">{course}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {hasAchievements && (
                          <div>
                            <h4
                              className={`text-xs font-semibold uppercase tracking-wider ${
                                isDarkMode ? "text-cyan-200" : "text-blue-600"
                              }`}
                            >
                              Impact & Highlights
                            </h4>
                            <ul className="mt-2 space-y-2 text-xs">
                              {(edu.achievements || []).map((achievement) => (
                                <li
                                  key={`${edu.degree}-${achievement}`}
                                  className="flex items-start gap-2"
                                >
                                  <span
                                    className={
                                      isDarkMode
                                        ? "mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400"
                                        : "mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500"
                                    }
                                  />
                                  <span className="text-justify leading-snug">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  <div className="flex flex-wrap gap-2">
                    {(edu.focusAreas || []).map((focus) => (
                      <span
                        key={`${edu.degree}-${focus}`}
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                          isDarkMode
                            ? "bg-white/5 text-slate-100 border border-white/10"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {edu.skills.slice(0, 10).map((skill) => (
                      <span
                        key={`${edu.degree}-${skill}`}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                          isDarkMode
                            ? "bg-white/5 text-slate-200 border border-white/10"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <aside
            className={`space-y-8 rounded-3xl border p-6 sm:p-8 ${
              isDarkMode
                ? "border-white/10 bg-white/5"
                : "border-blue-100 bg-white shadow-md"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">Signature Coursework</h3>
              <p
                className={`mt-1 text-xs ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                A snapshot of modules that shaped product thinking, engineering craft, and research.
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {moduleHighlights.map((module) => (
                  <li
                    key={`${module.module}-${module.institution}`}
                    className={`rounded-2xl border px-4 py-3 ${
                      isDarkMode
                        ? "border-white/10 bg-white/5"
                        : "border-blue-50 bg-blue-50/60"
                    }`}
                  >
                    <p className="font-medium">{module.module}</p>
                    <p className="text-xs text-slate-500">
                      {module.level} • {module.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Learning Themes</h3>
              <p
                className={`mt-1 text-xs ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Core threads that appear across programs and inform day-to-day delivery.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {learningThemes.map((theme) => (
                  <span
                    key={theme.theme}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      isDarkMode
                        ? "bg-cyan-500/15 text-cyan-100 border border-cyan-400/30"
                        : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                    }`}
                  >
                    {theme.theme}
                    <span className="ml-2 text-[10px] font-medium opacity-70">
                      ×{theme.count}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tooling & Languages</h3>
              <p
                className={`mt-1 text-xs ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Representative selection from labs, projects, and practicum engagements.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {toolset.map((tool) => (
                  <span
                    key={tool}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      isDarkMode
                        ? "bg-white/5 text-slate-200 border border-white/10"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border px-5 py-6 ${
                isDarkMode
                  ? "border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                  : "border-blue-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50"
              }`}
            >
              <h3 className="text-base font-semibold">Academic Artifacts</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Access transcripts, project documentation, and capstone demos that showcase applied learning in action.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/Aditya_Janjanam_Resume.docx"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    isDarkMode
                      ? "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "bg-emerald-500 text-white hover:bg-emerald-600"
                  }`}
                >
                  📄 Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/janjanamaditya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    isDarkMode
                      ? "bg-white/10 text-slate-100 hover:bg-white/20"
                      : "bg-white text-blue-700 border border-blue-200 hover:border-blue-400"
                  }`}
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="#projects"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    isDarkMode
                      ? "bg-white/10 text-slate-100 hover:bg-white/20"
                      : "bg-white text-blue-700 border border-blue-200 hover:border-blue-400"
                  }`}
                >
                  🚀 View Projects
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Education;
