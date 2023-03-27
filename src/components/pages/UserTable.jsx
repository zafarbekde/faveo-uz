import React, { useState } from "react";

const UserTable = ({ userData, onDeleteUser, onEditUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setEditUser(true);
  };

  const handleSave = () => {
    onEditUser(selectedUser.id, firstName, lastName, email);
    setEditUser(false);
  };

  const handleDelete = (userId) => {
    onDeleteUser(userId);
  };

  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="button" onClick={handleSave}>
                Save
              </button>
              <button type="button" onClick={() => setEditUser(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTable;
