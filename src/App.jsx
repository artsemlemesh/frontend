// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import ProductPage from './pages/ProductPage';
import { setupMock } from './api/mockApi';
import { Virtuoso, TableVirtuoso } from 'react-virtuoso';
import UserCard from './components/UserCard';
import { createUsers } from './components/user';

function App() {
  useEffect(() => {
    setupMock();
  }, []);

  const [users, setUsers] = useState(()=>createUsers(0, 5)) //pagination1
  console.log('USRS', users)
  //adding a scroll button to go to the certain user (to check the performance)
  const virtuosoRef = useRef() 

//adding pagination
function fetchNextPage(){
  const newUsers = createUsers(users.length, users.length + 5 )//pagination2
  setUsers([...users, ...newUsers])
}


  return (
    <div className="App">
      {/* <ProductPage /> */}
      <button
      className='mb-4'
        onClick={()=> {
          virtuosoRef.current?.scrollToIndex({
            index: Math.random() * users.length,
            align: 'start',
            behavior: 'smooth'
          })
        }}
      >
        Scroll
      </button>
      <TableVirtuoso
      ref={virtuosoRef} //also remember to add it here
        className='!h-[200px]' // define height of the container
        data={users}
        endReached={fetchNextPage}//add this prop to set up pagination//pagination3
        itemContent={(_, user) => <UserCard user={user}/>}  // no need key, virtuoso provides one
        fixedHeaderContent={()=>( //only available for TableVirtuoso component
          <tr>
            <th className='w-[150px] bg-grayscale-700 text-left'>Id</th>
            <th className='w-[150px] bg-grayscale-700 text-left'>Name</th>
          </tr>
        )}
      
      />
    </div>
  );
}

export default App;
