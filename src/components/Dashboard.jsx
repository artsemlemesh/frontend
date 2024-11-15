// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState({ user: 'idle', posts: 'idle', comments: 'idle' });

  useEffect(() => {
    // Fetch user
    setStatus((prev) => ({ ...prev, user: 'loading' }));
    fetch('/api/user')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setStatus((prev) => ({ ...prev, user: 'success' }));
      })
      .catch(() => setStatus((prev) => ({ ...prev, user: 'error' })));

    // Fetch posts
    setStatus((prev) => ({ ...prev, posts: 'loading' }));
    fetch('/api/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setStatus((prev) => ({ ...prev, posts: 'success' }));
      })
      .catch(() => setStatus((prev) => ({ ...prev, posts: 'error' })));
    
    // Fetch comments for the first post (as an example)
    setStatus((prev) => ({ ...prev, comments: 'loading' }));
    fetch('/api/comments?postId=1')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch comments');
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setStatus((prev) => ({ ...prev, comments: 'success' }));
      })
      .catch(() => setStatus((prev) => ({ ...prev, comments: 'error' })));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* User Info */}
      <section>
        <h2>User Info</h2>
        {status.user === 'loading' && <p>Loading user...</p>}
        {status.user === 'error' && <p>Error loading user data.</p>}
        {status.user === 'success' && user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </section>

      {/* Posts */}
      <section>
        <h2>Posts</h2>
        {status.posts === 'loading' && <p>Loading posts...</p>}
        {status.posts === 'error' && <p>Error loading posts.</p>}
        {status.posts === 'success' && posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </section>

      {/* Comments */}
      <section>
        <h2>Comments for Post 1</h2>
        {status.comments === 'loading' && <p>Loading comments...</p>}
        {status.comments === 'error' && <p>Error loading comments.</p>}
        {status.comments === 'success' && comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        ) : (
          <p>No comments available for this post.</p>
        )}
      </section>
    </div>
  );
}

export default Dashboard;