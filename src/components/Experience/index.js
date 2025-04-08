import React from 'react';
import { experiences } from '../../data/constants';

export const Experience = () => (
  <section className="py-20 px-4 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp, i) => (
        <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl border border-transparent hover:border-purple-500 transition-all duration-300">
          <h3 className="text-xl font-semibold text-purple-400">{exp.title}</h3>
          <p className="text-gray-300">{exp.company}</p>
          <p className="text-gray-400 mt-2">{exp.description}</p>
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <span>{exp.date}</span>
            <span>{exp.location}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
); 