// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import ProductPage from './pages/ProductPage';
import { setupMock } from './api/mockApi';
import { Virtuoso, TableVirtuoso } from 'react-virtuoso';
import UserCard from './components/UserCard';
import { createUsers } from './components/user';
import TableButton from './components/ButtonTable';
import InboxScreen from './components/InboxScreen';

function App() {
  useEffect(() => {
    setupMock();
  }, []);

  const [users, setUsers] = useState(() => createUsers(0, 5)); //pagination1
  const [isLoading, setIsLoading] = useState(false);

  console.log('USRS', users);
  //adding a scroll button to go to the certain user (to check the performance)
  // const virtuosoRef = useRef()

  //adding pagination
  async function fetchNextPage() {
    const newUsers = createUsers(users.length, users.length + 5); //pagination2
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setUsers([...users, ...newUsers]);
  }

  return (
    <div className="App">
      {/* <ProductPage /> */}
      <TableButton
        users={users}
        fetchNextPage={fetchNextPage}
        isLoading={isLoading}
      />
      <InboxScreen/>
    </div>
  );
}

export default App;
