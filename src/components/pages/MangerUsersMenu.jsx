import React, { useState } from 'react';
import { useQuery } from 'react-query';
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
  

  const { isLoading, error } = useQuery('users', () =>
    fetch('http://localhost:8080/api/v1/users').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div> 
      <UserTable users={users}  onUserUpdated={handleUserUpdated} />
    </div>
  );
}

export default ManageUsersForm;
