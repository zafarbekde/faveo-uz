import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import EditUserForm from './EditUserForm';
import '../../css/UserTable.css'

const UserTable = ({ users, updateUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div className='UserTable'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th> Username</th>
            <th> Email</th>
            <th> Birthday</th>
            <th> Phone</th>
            <th>Edit</th>
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
              <td>
                <Button variant="primary" onClick={() => handleShowModal(user)}>
                  <FaEdit />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Personal Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <EditUserForm
              user={selectedUser}
              handleCloseModal={handleCloseModal}
              updateUser={updateUser}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserTable;
