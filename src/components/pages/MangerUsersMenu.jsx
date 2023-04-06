import React, { useState, useEffect } from "react";
import UserTable from "../pages/UserTable";
import EditUserForm from "../pages/EditUserForm";
import AddUserForm from "../pages/AddUserForm";

const MangerUserMenu = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "", email: "", birthday: "", phone: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  
 

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email, birthday: user.birthday, phone: user.phone });
  };

  const resetForm = () => {
    setEditing(false);
    setCurrentUser(initialFormState);
  };

  return (
    <div>
      <div>
        {editing ? (
          <EditUserForm
            currentUser={currentUser}
            updateUser={updateUser}
            resetForm={resetForm}
          />
        ) : (
          <AddUserForm addUser={addUser} />
        )}
      </div>
      <div>
        <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  );
};

export default MangerUserMenu;
