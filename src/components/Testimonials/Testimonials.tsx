import React from 'react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => (
  <section className="my-8 border-4 border-red-500 bg-yellow-100">
    <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <p className="italic">"{t.text}"</p>
          <div className="mt-2 font-semibold">- {t.author}, <span className="text-sm font-normal">{t.role}</span></div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 