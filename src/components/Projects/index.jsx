/* eslint-disable */
import { motion } from "framer-motion";
import * as React from "react";

import { projects } from "../../data/constants";
import GithubProjects from "./GithubProjects";

const TYPE_FILTERS = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.type))).sort((a, b) =>
    a.localeCompare(b),
  ),
];

const TECH_FILTERS = [
  "All",
  ...Array.from(
    new Set(
      projects.flatMap((project) => (project.tech ? project.tech : [])),
    ),
  ).sort((a, b) => a.localeCompare(b)),
];

const PROJECT_STATS = (() => {
  const total = projects.length;
  const typeCount = TYPE_FILTERS.length - 1;
  const techCount = TECH_FILTERS.length - 1;
  const highlightCount = projects.reduce(
    (accumulator, project) =>
      accumulator + (project.highlights ? project.highlights.length : 0),
    0,
  );
  const averageHighlights = total > 0 ? Math.round(highlightCount / total) : 0;

  return { total, typeCount, techCount, highlightCount, averageHighlights };
})();

const FEATURED_PROJECTS = [...projects]
  .sort((a, b) => {
    const highlightDiff =
      (b.highlights ? b.highlights.length : 0) -
      (a.highlights ? a.highlights.length : 0);
    if (highlightDiff !== 0) {
      return highlightDiff;
    }
    return a.title.localeCompare(b.title);
  })
  .slice(0, 3);

const Projects = ({ isDarkMode }) => {
  const [selectedType, setSelectedType] = React.useState("All");
  const [selectedTech, setSelectedTech] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProjects = React.useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return projects
      .filter((project) => {
        const matchesType =
          selectedType === "All" || project.type === selectedType;
        const matchesTech =
          selectedTech === "All" || project.tech.includes(selectedTech);

        if (!normalizedQuery) {
          return matchesType && matchesTech;
        }

        const haystack = [
          project.title,
          project.description,
          project.type,
          project.tech.join(" "),
          (project.highlights || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();

        return matchesType && matchesTech && haystack.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const highlightDiff =
          (b.highlights ? b.highlights.length : 0) -
          (a.highlights ? a.highlights.length : 0);
        if (highlightDiff !== 0) {
          return highlightDiff;
        }
        return a.title.localeCompare(b.title);
      });
  }, [searchQuery, selectedTech, selectedType]);

  const featuredLookup = React.useMemo(
    () => new Set(FEATURED_PROJECTS.map((project) => project.title)),
    [],
  );

  const featuredProjects = React.useMemo(
    () =>
      filteredProjects
        .filter((project) => featuredLookup.has(project.title))
        .slice(0, 2),
    [featuredLookup, filteredProjects],
  );

  const featuredTitles = React.useMemo(
    () => new Set(featuredProjects.map((project) => project.title)),
    [featuredProjects],
  );

  const remainingProjects = React.useMemo(
    () =>
      filteredProjects.filter((project) => !featuredTitles.has(project.title)),
    [filteredProjects, featuredTitles],
  );

  const groupedProjects = React.useMemo(() => {
    return remainingProjects.reduce((accumulator, project) => {
      const key = project.type || "Other";
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(project);
      return accumulator;
    }, {});
  }, [remainingProjects]);

  const orderedGroups = React.useMemo(
    () =>
      Object.entries(groupedProjects).sort((a, b) => {
        if (b[1].length !== a[1].length) {
          return b[1].length - a[1].length;
        }
        return a[0].localeCompare(b[0]);
      }),
    [groupedProjects],
  );

  const nothingFound = filteredProjects.length === 0;

  const statCards = React.useMemo(
    () => [
      {
        label: "Total Projects",
        value: PROJECT_STATS.total,
        helper: `Across ${PROJECT_STATS.typeCount} focus areas`,
      },
      {
        label: "Technologies Applied",
        value: PROJECT_STATS.techCount,
        helper: "Stacks leveraged end-to-end",
      },
      {
        label: "Key Highlights",
        value: PROJECT_STATS.highlightCount,
        helper: `${PROJECT_STATS.averageHighlights} avg features per build`,
      },
      {
        label: "Spotlighted",
        value: FEATURED_PROJECTS.length,
        helper: "Flagship case studies",
      },
    ],
    [],
  );

  return (
    <div
      className={`min-h-screen px-6 py-12 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100"
          : "bg-gradient-to-br from-white via-slate-50 to-gray-100 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1
          className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDarkMode ? "text-cyan-300" : "text-blue-700"
          }`}
        >
          Projects
        </h1>
        <p
          className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Product builds spanning healthcare, web, backend services, and mobile—
          engineered end-to-end with measurable outcomes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl border p-5 transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800 hover:border-cyan-500/60 hover:shadow-[0_20px_45px_-25px_rgba(8,145,178,0.65)]"
                : "bg-gradient-to-br from-white to-slate-100 border-gray-200 hover:border-blue-500/60 hover:shadow-[0_20px_45px_-25px_rgba(37,99,235,0.55)]"
            }`}
          >
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {stat.label}
            </p>
            <p className="text-3xl font-bold mt-1 mb-2">
              {stat.value.toString().padStart(2, "0")}
            </p>
            <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
              {stat.helper}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 mb-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {TYPE_FILTERS.map((type) => {
              const isActive = type === selectedType;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition-colors ${
                    isActive
                      ? isDarkMode
                        ? "bg-cyan-500 border-cyan-400 text-black"
                        : "bg-blue-600 border-blue-500 text-white"
                      : isDarkMode
                        ? "bg-gray-900 border-gray-800 text-gray-300 hover:border-cyan-400/80"
                        : "bg-white border-gray-200 text-gray-600 hover:border-blue-400"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by title, stack, or outcome"
              className={`w-full rounded-full border px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800 text-gray-100 focus:ring-cyan-400"
                  : "bg-white border-gray-200 text-gray-900 focus:ring-blue-500"
              }`}
            />
            <svg
              className={`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {TECH_FILTERS.map((tech) => {
            const isActive = tech === selectedTech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`whitespace-nowrap px-3 py-1 text-xs rounded-full border transition-colors ${
                  isActive
                    ? isDarkMode
                      ? "bg-emerald-400 border-emerald-300 text-black"
                      : "bg-emerald-500 border-emerald-400 text-white"
                    : isDarkMode
                      ? "bg-gray-900 border-gray-800 text-gray-400 hover:border-emerald-400/70"
                      : "bg-white border-gray-200 text-gray-600 hover:border-emerald-400"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      {nothingFound ? (
        <div
          className={`rounded-3xl border p-10 text-center max-w-3xl mx-auto ${
            isDarkMode
              ? "border-gray-800 bg-gradient-to-br from-gray-900 to-black"
              : "border-gray-200 bg-gradient-to-br from-white to-gray-100"
          }`}
        >
          <p className="text-xl font-semibold mb-2">No matching projects yet</p>
          <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
            Adjust filters or search terms to rediscover shipped work across
            healthcare, mobile, web, and backend initiatives.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {featuredProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-semibold tracking-wide uppercase">
                  Featured Case Studies
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-400 via-transparent to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-gray-900 via-gray-900 to-black border-gray-800 hover:border-emerald-400/70 hover:shadow-[0_25px_55px_-30px_rgba(16,185,129,0.65)]"
                        : "bg-gradient-to-br from-white via-white to-slate-100 border-gray-200 hover:border-emerald-400/70 hover:shadow-[0_25px_55px_-30px_rgba(16,185,129,0.55)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-3xl ${
                            isDarkMode
                              ? "bg-gray-800 border border-gray-700"
                              : "bg-slate-100 border border-slate-200"
                          }`}
                        >
                          {project.image}
                        </div>
                        <div>
                          <span
                            className={`text-xs uppercase tracking-wide ${
                              isDarkMode ? "text-emerald-300" : "text-emerald-600"
                            }`}
                          >
                            {project.type}
                          </span>
                          <h3
                            className={`text-xl font-bold leading-tight ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-wider ${
                          isDarkMode
                            ? "bg-emerald-500/10 text-emerald-300 border border-emerald-400/40"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        }`}
                      >
                        Featured
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {project.description}
                    </p>
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2 text-sm">
                        {project.highlights.slice(0, 4).map((highlight) => (
                          <li
                            key={`${project.title}-${highlight}`}
                            className="flex items-start gap-2"
                          >
                            <span className={isDarkMode ? "text-emerald-300" : "text-emerald-600"}>
                              ◆
                            </span>
                            <span
                              className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                            >
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className={`${
                            isDarkMode
                              ? "bg-gray-900/60 border border-gray-700 text-gray-200"
                              : "bg-slate-100 border border-slate-200 text-slate-700"
                          } px-2.5 py-1 text-xs rounded-full`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          isDarkMode
                            ? "bg-emerald-500 text-black hover:bg-emerald-400"
                            : "bg-emerald-500 text-white hover:bg-emerald-600"
                        }`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {orderedGroups.map(([group, groupProjects]) => (
            <div key={group}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold">{group}</h3>
                <span
                  className={`rounded-full px-3 py-0.5 text-[10px] uppercase tracking-wider ${
                    isDarkMode
                      ? "bg-gray-800 border border-gray-700 text-gray-400"
                      : "bg-slate-100 border border-slate-200 text-slate-600"
                  }`}
                >
                  {groupProjects.length} project
                  {groupProjects.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {groupProjects.map((project, index) => (
                  <motion.div
                    key={`${group}-${project.title}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl border p-6 transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800 hover:border-cyan-400/70 hover:shadow-[0_20px_45px_-25px_rgba(8,145,178,0.5)]"
                        : "bg-gradient-to-br from-white to-slate-100 border-gray-200 hover:border-blue-400/70 hover:shadow-[0_20px_45px_-25px_rgba(59,130,246,0.45)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl text-2xl ${
                            isDarkMode
                              ? "bg-gray-800 border border-gray-700"
                              : "bg-slate-100 border border-slate-200"
                          }`}
                        >
                          {project.image}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold leading-snug">
                            {project.title}
                          </h4>
                          <p className="text-xs text-gray-500">{project.type}</p>
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
                          isDarkMode
                            ? "bg-gray-800 border border-gray-700 text-cyan-300 hover:border-cyan-400"
                            : "bg-slate-100 border border-slate-200 text-blue-600 hover:border-blue-400"
                        }`}
                      >
                        GitHub
                      </a>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {project.description}
                    </p>
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mb-4 space-y-1 text-xs">
                        {project.highlights.map((highlight) => (
                          <li
                            key={`${project.title}-${highlight}`}
                            className="flex items-start gap-2"
                          >
                            <span className={isDarkMode ? "text-cyan-300" : "text-blue-600"}>
                              •
                            </span>
                            <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className={`${
                            isDarkMode
                              ? "bg-gray-900 border border-gray-700 text-gray-300"
                              : "bg-slate-100 border border-slate-200 text-slate-700"
                          } px-2 py-1 text-[11px] rounded-full`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16">
        <GithubProjects isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Projects;
