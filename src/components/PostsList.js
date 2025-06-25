import React from 'react';

function PostsList({ posts, onCreatePost, onEditPost }) {
  return (
    <div>
      <button
        onClick={onCreatePost}
        style={{
          marginBottom: 20,
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '10px 20px',
          fontSize: 16,
          cursor: 'pointer'
        }}
      >
        Create New Post
      </button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => onEditPost(post.id)}>Edit Post</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;