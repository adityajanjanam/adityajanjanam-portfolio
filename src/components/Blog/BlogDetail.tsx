import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found.</div>;

  return (
    <article className="my-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{post.content}</div>
    </article>
  );
};

export default BlogDetail; 