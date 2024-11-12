import { Virtuoso, TableVirtuoso } from 'react-virtuoso';
import { useRef } from 'react';
import UserCard from './UserCard';

export default function TableButton({users, fetchNextPage, isLoading}) {
  //adding a scroll button to go to the certain user (to check the performance)
  const virtuosoRef = useRef();

  return (
    <>
      <button
        className="mb-4"
        onClick={() => {
          virtuosoRef.current?.scrollToIndex({
            index: Math.random() * users.length,
            align: 'start',
            behavior: 'smooth',
          });
        }}
      >
        Scroll
      </button>
      <TableVirtuoso
        ref={virtuosoRef} //also remember to add it here
        className="!h-[200px]" // define height of the container
        data={users}
        endReached={fetchNextPage} //add this prop to set up pagination//pagination3
        itemContent={(_, user) => <UserCard user={user} />} // no need key, virtuoso provides one
        fixedFooterContent={
          isLoading
            ? () => <div className="bg-pink-700">Loading</div>
            : undefined
        }
        fixedHeaderContent={() => (
          //only available for TableVirtuoso component
          <tr>
            <th className="w-[150px] bg-pink-700 text-left">Id</th>
            <th className="w-[150px] bg-pink-700 text-left">Name</th>
          </tr>
        )}
      />
    </>
  );
}
