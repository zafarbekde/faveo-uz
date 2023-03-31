import React from "react";
import '../../css/UserTable.css'

const UserTable = ({ editRow, deleteUser, users }) => {
  return (
    <table className="UserTable">
      <thead >
        <tr>
          <th> Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Phone</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => editRow(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
