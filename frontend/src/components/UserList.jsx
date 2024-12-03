// import React, { useEffect, useState } from 'react'
// import { getUsers, createUser, deleteUser } from '../api/userApi'

// const UserList = () => {
//     const [users, setUsers] = useState([])
//     const [newUser, setNewUser] = useState({ name: '', email: '' })

//     useEffect(() => {
//         fetchUsers()
//     }, [])

//     const fetchUsers = async () => {
//         const { data } = await getUsers()
//         setUsers(data)
//     }

//     const handleCreate = async () => {
//         await createUser(newUser)
//         fetchUsers()
//         setNewUser({ name: '', email: '' })
//     }

//     const handleDelete = async id => {
//         await deleteUser(id)
//         fetchUsers()
//     }

//     return (
//         <div>
//             <h1>User List</h1>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.name} ({user.email}){' '}
//                         <button onClick={() => handleDelete(user.id)}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//             <h2>Add User</h2>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={newUser.name}
//                 onChange={e => setNewUser({ ...newUser, name: e.target.value })}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={newUser.email}
//                 onChange={e =>
//                     setNewUser({ ...newUser, email: e.target.value })
//                 }
//             />
//             <button onClick={handleCreate}>Add</button>
//         </div>
//     )
// }

// export default UserList
