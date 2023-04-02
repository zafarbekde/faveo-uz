import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import EditUserForm from '../pages/EditUserForm';

const UserTable = ({ users, onEditUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>User Email</th>
            <th>User Birthday</th>
            <th>User Phones</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>{user.phones.join(', ')}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen &&
        ReactDOM.createPortal(
          <EditUserForm user={currentUser} onClose={handleCloseModal} onSave={onEditUser} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
};

export default UserTable;
