export default function UserCard({ user }) {
    console.log('USR', user)

    return (
    <>
        <td>{user.id}</td>
        <td>{user.name}</td>
    </>
  )
}
