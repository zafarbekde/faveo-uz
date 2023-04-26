import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { useQuery } from 'react-query';
import EditUserForm from './EditUserForm';

import '../../css/UserTable.css'

const UserTable = ({ updateUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const { isLoading, error, data } = useQuery('users', () =>
    fetch('http://localhost:8080/api/v1/users').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;





  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const handleUserUpdated = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
  };


  return (
    <div className='UserTable'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th> Surname</th>
            <th> Email</th>
            <th> Birthday</th>
            <th> Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className='table-list' key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
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
              onUserUpdated={handleUserUpdated}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserTable;
