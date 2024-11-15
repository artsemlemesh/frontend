import React, { useState, useEffect } from 'react';


// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);
  useEffect(() => {
    setStatus('loading');
    fetch('https://your-restful-endpoint')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus('success');
        setData(data);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);
  return {
    status,
    data,
  };
}
export function DocumentScreen() {
  const { status, data } = useFetchData();

  const { user, document, subdocuments } = data;

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>There was an error fetching the data!</p>;
  }
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}









function DocumentList({ documents }) {
  if (!documents || documents.length === 0) {
    return <p>No subdocuments available.</p>;
  }

  return (
    <div className="document-list">
      {documents.map((doc) => (
        <DocumentListItem key={doc.id} title={doc.title} content={doc.content} />
      ))}
    </div>
  );
}

function DocumentListItem({ title, content }) {
    return (
      <div className="document-list-item">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }

// src/components/DocumentHeader.js

function DocumentHeader({ document }) {
  if (!document) return null;

  return (
    <div className="document-header">
      <h1>{document.title}</h1>
      <p>Status: {document.status}</p>
      <p>Brief: {document.brief}</p>
    </div>
  );
}




// src/components/PageLayout.js

function PageLayout({ user, children }) {
  return (
    <div className="page-layout">
      <header className="page-header">
        {user ? (
          <div className="user-info">
            <img src={user.avatar} alt="User Avatar" className="user-avatar" />
            <h2>{user.name}</h2>
            <p>{user.userID}</p>
          </div>
        ) : (
          <p>No user info available</p>
        )}
      </header>
      <main className="page-content">{children}</main>
    </div>
  );
}


