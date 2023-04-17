import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';

function ManageUsersForm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users from backend API and set state
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>
      <UserTable users={users} />
    </div>
  );
}

export default ManageUsersForm;
