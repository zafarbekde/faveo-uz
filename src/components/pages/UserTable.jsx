import React, { useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);

  // Function to add a new user to the users array
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.birthday}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
