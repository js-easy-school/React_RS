import React from 'react'
import Users from './components/users'
// import api from './api'

function App() {
    return <Users/>
}

export default App

// import React, { useState, useEffect } from 'react'
// import Users from './components/users'

// import api from './api'

// function App() {
//     const [users, setUsers] = useState()
//     useEffect(() => {
//         api.users.fetchAll().then((data) => setUsers(data))
//     }, [])
//     const handleDelete = (userId) => {
//         setUsers(users.filter((user) => user._id !== userId))
//     }
//     const handleToggleBookMark = (id) => {
//         const newArray = users.map((user) => {
//             if (user._id === id) {
//                 return { ...user, bookmark: !user.bookmark }
//             }
//             return user
//         })
//         setUsers(newArray)
//         console.log(id)
//     }
//     return (
//         <div>
//             {users && (
//                 <Users
//                     onDelete={handleDelete}
//                     onToggleBookMark={handleToggleBookMark}
//                     users={users}
//                 />
//             )}
//         </div>
//     )
// }

// export default App
