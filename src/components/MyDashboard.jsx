import { useEffect, useState } from 'react';

function MyDashboard() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState({
    users: 'idle',
    posts: 'idle',
    comments: 'idle',
  });

  useEffect(() => {
    //FETCH USER
    setStatus((prev) => ({ ...prev, users: 'loading' })); //use spread to preserve existing state of (posts, comments)
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) {
          throw new Error('user hasnt been fetched');
        }
        const users = await res.json();
        setUsers(users);
        setStatus((prev) => ({ ...prev, users: 'success' }));
      } catch (error) {
        setStatus((prev) => ({ ...prev, users: 'error' }));
      }
    };

    //FETCH POSTS
    setStatus((prev) => ({ ...prev, posts: 'loading' })); //use spread to preserve existing state of (posts, comments)
    const fetchPostsData = async () => {
      try {
        const res = await fetch('/api/posts');
        if (!res.ok) {
          throw new Error('posts hasnt been fetched');
        }
        const posts = await res.json();
        setPosts(posts);
        setStatus((prev) => ({ ...prev, posts: 'success' }));
      } catch (error) {
        setStatus((prev) => ({ ...prev, posts: 'error' }));
      }
    };

    //FETCH COMMENTS
    setStatus((prev) => ({ ...prev, comments: 'loading' })); //use spread to preserve existing state of (posts, comments)
    const fetchCommentsData = async () => {
      try {
        const res = await fetch('/api/comments?postId=1');
        if (!res.ok) {
          throw new Error('user hasnt been fetched');
        }
        const comments = await res.json();
        setComments(comments);
        setStatus((prev) => ({ ...prev, comments: 'success' }));
      } catch (error) {
        setStatus((prev) => ({ ...prev, comments: 'error' }));
      }
    };
    fetchUserData();
    fetchPostsData();
    fetchCommentsData();
  }, []);
  //   console.log('User', user)
  //   console.log('POSTs', posts)
  //   console.log('Comments', comments)
  return (
    <div>
      <h1>Dashboard</h1>
      {/* User info */}
      <section>
        <h1>User info</h1>
        {status.users === 'loading' ? (
          <p>Loading user ...</p>
        ) : status.users === 'error' ? (
          <p>Error loading user data.</p>
        ) : status.users === 'success' && users ? ( //if status success it gives user variable
          users.map((user, index) => (
            <div key={index}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        ) : (
          <p>no userse avaliave</p>
        )}
      </section>

      {/* posts */}
      <h2>Posts</h2>
      <section>
        {status.posts === 'loading' ? (
          <p>Loading posts...</p>
        ) : status.posts === 'error' ? (
          <p>Error loading posts</p>
        ) : status.posts === 'success' && posts ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </section>

      {/* comments */}
      <section>
        <h2>comments for post1</h2>
        {status.comments === 'loading' ? (
          <p>Loading comments ...</p>
        ) : status.comments === 'error' ? (
          <p>Error loading comments.</p>
        ) : status.comments === 'success' && comments ? (
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

export default MyDashboard;
