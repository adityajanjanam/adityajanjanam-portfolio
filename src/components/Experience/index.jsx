/* eslint-disable */
import { motion } from "framer-motion";
import React, { useMemo } from "react";

import { experiences } from "../../data/constants";

const Experience = ({ isDarkMode }) => {
  const uniqueSkills = useMemo(() => {
    const skillSet = new Set();
    experiences.forEach((exp) => {
      exp.skills.forEach((skill) => skillSet.add(skill));
    });
    return Array.from(skillSet);
  }, []);

  const impactPoints = useMemo(
    () => experiences.reduce((total, exp) => total + exp.description.length, 0),
    []
  );

  const companiesRepresented = useMemo(
    () => new Set(experiences.map((exp) => exp.company)).size,
    []
  );

  const stats = useMemo(
    () => [
      {
        label: "Enterprise Tenures",
        value: experiences.length.toString(),
        hint: "Roles delivered across managed services and product teams",
      },
      {
        label: "Impact Highlights",
        value: impactPoints.toString(),
        hint: "Documented automation, delivery, and UX wins",
      },
      {
        label: "Core Tools",
        value: `${uniqueSkills.length}+`,
        hint: "Packaging, automation, and full-stack toolchain",
      },
      {
        label: "Countries Collaborated",
        value: companiesRepresented.toString(),
        hint: "Cross-regional delivery across India and Canada",
      },
    ],
    [companiesRepresented, impactPoints, uniqueSkills.length]
  );

  const spotlight = useMemo(
    () =>
      experiences.map((exp) => ({
        company: exp.company,
        headline: exp.description[0],
      })),
    []
  );

  return (
    <section
      className={`relative min-h-screen py-16 px-6 sm:px-8 lg:px-12 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-950 via-[#050818] to-black text-slate-100"
          : "bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900"
      }`}
    >
      <div
        className="absolute inset-x-0 top-10 -z-10 mx-auto h-96 max-w-5xl rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wider ${
              isDarkMode
                ? "bg-white/5 text-cyan-200"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Career Journey
          </span>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Experience
          </h1>
          <p
            className={`mt-4 max-w-3xl text-base leading-relaxed sm:text-lg ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Roles spanning enterprise packaging, full-stack product innovation, and automation-led delivery. Each tenure prioritised measurable impact, cross-functional partnering, and resilient production rollouts.
          </p>

          <div className="mt-8 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border px-5 py-6 text-left shadow-sm transition-colors duration-300 ${
                  isDarkMode
                    ? "border-white/10 bg-white/5"
                    : "border-blue-100 bg-white"
                }`}
              >
                <p
                  className={`text-3xl font-bold tracking-tight ${
                    isDarkMode ? "text-cyan-300" : "text-blue-600"
                  }`}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.hint}
                </p>
              </div>
            ))}
          </div>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr),minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`absolute left-6 top-0 bottom-0 w-0.5 rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-b from-cyan-500/80 via-blue-500/30 to-purple-500/40"
                  : "bg-gradient-to-b from-blue-400 via-cyan-300 to-purple-300"
              }`}
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.article
                  key={`${exp.company}-${exp.title}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative grid gap-4 rounded-2xl border px-6 py-6 pl-16 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    isDarkMode
                      ? "border-white/10 bg-white/5 hover:border-cyan-400/60 hover:bg-white/7"
                      : "border-blue-100 bg-white hover:border-blue-300 hover:bg-blue-50/60"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 text-2xl ${
                      isDarkMode
                        ? "border-gray-950 bg-gradient-to-br from-cyan-500 to-purple-500 shadow-[0_12px_30px_rgba(30,136,229,0.3)]"
                        : "border-blue-50 bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_12px_24px_rgba(59,130,246,0.25)]"
                    }`}
                    aria-hidden="true"
                  >
                    <span>{exp.logo}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide">
                    <span
                      className={`font-semibold ${
                        isDarkMode ? "text-cyan-300" : "text-blue-600"
                      }`}
                    >
                      {exp.company}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-current opacity-40" />
                    <span className="text-slate-400">
                      {exp.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-current opacity-40" />
                    <span className="text-slate-400">
                      {exp.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-tight sm:text-2xl">
                      {exp.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed sm:text-base">
                      {exp.description.map((desc) => (
                        <li key={desc} className="flex items-start gap-2">
                          <span
                            className={`mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                              isDarkMode ? "bg-cyan-400" : "bg-blue-500"
                            }`}
                          />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={`${exp.company}-${skill}`}
                        className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                          isDarkMode
                            ? "bg-cyan-400/10 text-cyan-100 ring-1 ring-cyan-400/30"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={`flex flex-col gap-8 rounded-3xl border p-6 shadow-lg ${
              isDarkMode ? "border-white/10 bg-white/5" : "border-blue-100 bg-white"
            }`}
          >
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-cyan-200" : "text-blue-700"
                }`}
              >
                Spotlight Wins
              </h3>
              <p className={`mt-2 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                Select outcomes that shaped delivery velocity, reliability, and user delight.
              </p>

              <div className="mt-5 space-y-4">
                {spotlight.map((item) => (
                  <div
                    key={`${item.company}-${item.headline}`}
                    className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${
                      isDarkMode
                        ? "border-white/10 bg-white/5"
                        : "border-blue-50 bg-blue-50/60"
                    }`}
                  >
                    <p className={`text-xs font-semibold uppercase tracking-wider ${
                      isDarkMode ? "text-cyan-300" : "text-blue-600"
                    }`}>
                      {item.company}
                    </p>
                    <p className="mt-2 leading-relaxed">{item.headline}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-cyan-200" : "text-blue-700"
                }`}
              >
                Core Toolkit
              </h3>
              <p className={`mt-2 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                A sampling of the automation, packaging, and full-stack technologies used across engagements.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {uniqueSkills.slice(0, 14).map((skill) => (
                  <span
                    key={`spotlight-skill-${skill}`}
                    className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                      isDarkMode
                        ? "bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-400/20"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {uniqueSkills.length > 14 && (
                <p className={`mt-3 text-xs italic ${
                  isDarkMode ? "text-slate-500" : "text-slate-500"
                }`}>
                  +{uniqueSkills.length - 14} more tools and frameworks documented in project reports.
                </p>
              )}
            </div>

            <div
              className={`rounded-2xl border px-5 py-6 text-sm transition-colors ${
                isDarkMode
                  ? "border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                  : "border-blue-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50"
              }`}
            >
              <h4 className={`text-base font-semibold ${
                isDarkMode ? "text-cyan-200" : "text-blue-700"
              }`}>
                Collaboration DNA
              </h4>
              <p className={`mt-2 leading-relaxed ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}>
                Embedded with designers, PMs, infra, and security counterparts to accelerate rollouts. Advocated for knowledge sharing via playbooks, brown-bag sessions, and onboarding labs.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
