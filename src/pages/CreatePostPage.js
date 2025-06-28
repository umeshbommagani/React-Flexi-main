import React, { useState } from 'react';
import BlogPostForm from '../components/BlogPostForm';

const CreatePostPage = ({ onCreate }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    await onCreate(formData); // Implement this in your parent or context
    setSubmitting(false);
    // Optionally redirect or show a success message here
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <BlogPostForm onSubmit={handleSubmit} submitting={submitting} />
    </div>
  );
};

export default CreatePostPage;
