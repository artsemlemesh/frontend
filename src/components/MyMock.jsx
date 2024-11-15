//FETCH DATA

import { useEffect, useState } from 'react';

function useFetchData() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState({users: [], posts: [], comments: []});
  useEffect(() => {
    setStatus('loading')
    const fetchUserData = async () => {
      try {
        const res = await fetch('https://your-restful-endpoint');
        if (!res.ok) {
          throw new Error('not ok');
        }
        const data = await res.json();
        setData(data);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };
    fetchUserData();
  }, []);
  return {status, data}
}

export function MyMock() {
  const { status, data } = useFetchData();

  const { users, posts, comments } = data;

  if(status === 'loading'){
    return <p>Loading...</p>
  }

  if (status === 'error'){
    return <p>there was an error fetcingn daga</p>
  }
  return (
    <Page users={users}>
      <Posts posts={posts}/>
      <Comments comments={comments}/>
    </Page>
  );
}

function Page ({users, children}) {

    return(
        <div>
            <header>
                {users ? (users.map((user, index) => (
                    <div>
                    <img src={user.avatar}/>
                    <h1 key={index}>{user.name}</h1>
                    <p>{user.email}</p>
                    </div>
                ))) : (<p>No users found</p>)}
            </header>
            <main>{children}</main>
        </div>
    )
}

function Posts({posts}){

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h1>{post.id} and {post.userId}</h1>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                    <p>{post.date}</p>
                </div>
            ))}
        </div>
    )
}

function Comments({comments}){
    return (
        <div>
            { comments ? (comments.map((comment, index) => (
                <div key={index}>
                    <h1>{comment.id} and {comment.postId}</h1>
                    <p>{comment.userId}</p>
                    <p>{comment.content}</p>
                    <p>{comment.date}</p>
                </div>
            ))) : (<p>No comments found</p>)}
        </div>
    )
}

export default MyMock