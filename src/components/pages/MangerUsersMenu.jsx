import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';

function ManageUsersForm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users from backend API and set state
    axios.get('http://localhost:2000/api/v1/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default ManageUsersForm;
