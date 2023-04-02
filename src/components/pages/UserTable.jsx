import React from "react";
import '../../css/UserTable.css'
import { useState } from "react";
import EditUserForm from "./EditUserForm";
import AddUserForm from "./AddUserForm";

const UserTable = ({ editRow, deleteUser, users }) => {
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

  const [isOpen, setIsOpen] = useState(false)

  return (
    <table className="UserTable">
      <thead >
        <tr>
          <th> Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Phone</th>
          <th>Role</th>
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
