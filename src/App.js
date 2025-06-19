import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import BlogPostDetail from './BlogPostDetail';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    date: '2023-03-10',
    url: '/posts/3',
  }
];

const App = () => (
  <div>
    <h1>Blog Posts</h1>
    <Routes>
      <Route path="/" element={<BlogPostList posts={samplePosts} />} />
      <Route
        path="/posts/:id"
        element={<BlogPostDetailWrapper posts={samplePosts} />}
      />
    </Routes>
  </div>
);

const BlogPostDetailWrapper = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <BlogPostDetail
      title={post.title}
      content={post.summary} // Replace with full content if available
      author="Author Name" // Replace with actual author if available
      date={post.date}
    />
  );
};

export default App;