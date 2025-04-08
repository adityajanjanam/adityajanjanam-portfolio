import React from 'react';
import { education } from '../../data/constants';

export const Education = () => (
  <section className="py-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">Education</h2>
    <div className="space-y-8">
      {education.map((edu, i) => (
        <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl">
          <h3 className="text-xl font-bold text-purple-400">{edu.program}</h3>
          <p className="text-gray-300">{edu.institution}</p>
          <p className="text-gray-400">{edu.period} • {edu.type}</p>
          <p className="text-green-400 text-sm mb-4">{edu.status}</p>
          <h4 className="text-lg font-semibold text-gray-300 mb-2">Key Courses:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {edu.courses.map((course, j) => (
              <div key={j} className="text-sm text-gray-400 p-2 bg-[#252525] rounded">
                {course}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
); 