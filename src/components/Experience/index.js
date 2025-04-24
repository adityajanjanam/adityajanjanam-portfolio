
import React from 'react';
import { experiences } from '../../data/constants';

export const Experience = () => (
  <section className="py-20 px-4 max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 text-center mb-10">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp, i) => (
        <div key={i} className="relative p-6 rounded-2xl overflow-hidden group bg-[#1a1a1a] border-gray-700 hover:border-gray-600 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
           <div className="relative z-10">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">{exp.title}</h3>
          <p className="text-gray-300 mb-2">{exp.company}</p>
          <p className="text-gray-400 mt-3 max-w-full">{exp.description}</p>
          <div className="flex justify-between text-sm text-gray-500 mt-4">          
            <span>{exp.date}</span>
            <span>{exp.location}</span>
          </div>
          </div>
        </div>
      ))} 
    </div>
  </section>
);
