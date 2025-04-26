import React from 'react';
import { blogPosts } from '../../data/blogPosts';
import { Link } from 'react-router-dom';

const BlogList: React.FC = () => (
  <section className="my-8 border-4 border-blue-500 bg-green-100">
    <h2 className="text-2xl font-bold mb-4">Blog & Insights</h2>
    <div className="space-y-6">
      {blogPosts.map((post, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BlogList; 