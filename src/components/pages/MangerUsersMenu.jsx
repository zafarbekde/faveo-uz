import React, { useState } from "react";
import UserTable from "../pages/UserTable";

const ManageUsersMenu = () => {
  const initialFormState = { id: null, name: "", username: "", email: "" };

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email });
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <div>
        <h3>Add User</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!currentUser.name || !currentUser.username || !currentUser.email) return;
            if (editing) {
              updateUser(currentUser.id, currentUser);
            } else {
              addUser(currentUser);
            }
            setCurrentUser(initialFormState);
          }}
        >
          <label>Name</label>
          <input type="text" name="name" value={currentUser.name} onChange={(event) => setCurrentUser({ ...currentUser, name: event.target.value })} />
          <label>Username</label>
          <input type="text" name="username" value={currentUser.username} onChange={(event) => setCurrentUser({ ...currentUser, username: event.target.value })} />
          <label>Email</label>
          <input type="email" name="email" value={currentUser.email} onChange={(event) => setCurrentUser({ ...currentUser, email: event.target.value })} />
          <button type="submit">{editing ? "Update" : "Add"}</button>
        </form>
      </div>
      <div>
        <h3>User List</h3>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
    </div>
  );
};

export default ManageUsersMenu;
