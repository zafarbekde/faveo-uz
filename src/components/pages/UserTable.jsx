import React, { useState, useEffect } from "react";
import EditUserForm from "./EditUserForm";

const UserTable = ({ editRow, deleteUser }) => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "", email: "", birthday: "", phone: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

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

  // Function to edit user
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  // Function to cancel edit mode
  const cancelEdit = () => {
    setEditing(false);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>User Last Name</th>
          <th>User Email</th>
          <th>User Birthday</th>
          <th>User Phone</th>
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
                <button onClick={() => setEditing(true)}>Edit</button>
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
      {editing && (
        <EditUserForm
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          updateUser={updateUser}
          cancelEdit={cancelEdit}
        />
      )}
    </table>
  );
};

export default UserTable;
