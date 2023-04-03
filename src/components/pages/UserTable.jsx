import React, { useState, useEffect } from "react";
import '../../css/UserTable.css'

const UserTable = ({ editRow, deleteUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve users from local storage when component mounts
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    // Save users to local storage when users state changes
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <table className="UserTable">
      <thead>
        <tr>
          <th>User Id</th>
          <th> Name</th>
          <th> Surname</th>
          <th> Email</th>
          <th> Birthday</th>
          <th> Phones</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => editRow(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}>No users</td>
          </tr>
        )}
      </tbody>

    </table>
  );
};

export default UserTable;
