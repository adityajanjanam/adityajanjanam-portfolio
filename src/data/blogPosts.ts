export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'My Journey into Mobile App Development',
    slug: 'journey-mobile-app-dev',
    excerpt: 'How I transitioned from desktop to mobile development and the key lessons learned along the way.',
    content: 'Full article content goes here. Share your story, challenges, and what you learned.'
  },
  {
    title: 'Best Practices for Application Packaging',
    slug: 'best-practices-app-packaging',
    excerpt: 'A guide to efficient and reliable application packaging based on real-world experience.',
    content: 'Full article content goes here. Discuss tools, tips, and common pitfalls.'
  },
  {
    title: "React Native vs Flutter: A Developer's Perspective",
    slug: 'react-native-vs-flutter',
    excerpt: 'Comparing two leading mobile frameworks from hands-on experience in real projects.',
    content: 'Full article content goes here. Compare features, performance, and developer experience.'
  }
]; 