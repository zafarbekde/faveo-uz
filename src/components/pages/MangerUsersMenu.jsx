import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';

function ManageUsersForm() {
  const [users, setUsers] = useState([]);
  
  const handleUserUpdated = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
  };
  

  useEffect(() => {
    axios.get('http://localhost:2000/api/v1/users/')
      .then(response => {
        setUsers(response.data.routes[0].response.users);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <UserTable users={users}  onUserUpdated={handleUserUpdated} />
    </div>
  );
}

export default ManageUsersForm;
