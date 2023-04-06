import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import '../../css/UserTable.css'
import AddUserForm from "../pages/AddUserForm";

const UserTable = ({ users, deleteUser, editRow }) => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const handleCloseAddUserModal = () => setShowAddUserModal(false);
  const handleShowAddUserModal = () => setShowAddUserModal(true);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => editRow(user)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No Users
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleShowAddUserModal}>
          <FaUserPlus /> Add User
        </button>
      </div>
      <Modal className="modall" show={showAddUserModal} onHide={handleCloseAddUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal">
          <AddUserForm handleCloseModal={handleCloseAddUserModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserTable;
