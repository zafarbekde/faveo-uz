import React, { useState } from "react";
import { createPortal } from "react-dom";
import EditUserModal from "../pages/EditUserForm";
import AddUserModal from "../pages/AddUserForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "../../css/UserTable.css";


const UserTable = ({ users, editRow, deleteUser }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  

  const openEditModal = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingUser(null);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="user-table">
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Phone</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => openEditModal(user)}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal &&
        createPortal(
          <EditUserModal
            user={editingUser}
            updateUser={updateUser}
            closeModal={closeEditModal}
          />,
          document.getElementById("modal-root")
        )}

      {showAddModal &&
        createPortal(
          <AddUserModal addUser={addUser} closeModal={closeAddModal} />,
          document.getElementById("modal-root")
        )}

      <button onClick={openAddModal}>Add User</button>

      <ManagerUserMenu users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default UserTable;
