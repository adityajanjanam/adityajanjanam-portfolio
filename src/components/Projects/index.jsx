import React from 'react';
import { projects } from '../../data/constants';

export const Projects = () => (
  <section className="py-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">Projects</h2>
    <div className="space-y-6">
      {projects.map((proj, i) => (
        <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-purple-400">{proj.title}</h3>
            <span className="text-sm bg-[#252525] px-3 py-1 rounded-full text-gray-400">
              {proj.type}
            </span>
          </div>
          <p className="text-gray-400 mb-4">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proj.tech.map((t, j) => (
              <span key={j} className="text-sm bg-[#252525] px-3 py-1 rounded-full text-gray-300">
                {t}
              </span>
            ))}
          </div>
          <a href={proj.link} target="_blank" rel="noopener noreferrer" 
             className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center">
            View Project <span className="ml-1">↗</span>
          </a>
        </div>
      ))}
    </div>
  </section>
); 