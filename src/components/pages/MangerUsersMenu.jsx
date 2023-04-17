import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

const MangerUsersMenu = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      return JSON.parse(savedUsers);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = newUser => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const handleEditUser = (id, updatedUser) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  const handleDeleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User Table</h1>
      <AddUserForm  onAddUser={handleAddUser} />
      <UserTable users={users} onDeleteUser={handleDeleteUser} onEditUser={handleEditUser} />
      
    </div>
  );
};

export default MangerUsersMenu;
