import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import '../../css/UserTable.css'

const UserTable = ({ users, deleteUser, editRow }) => {
  return (
    <div className="UserTable">
      <table>
        <thead>
          <tr className="table-list">
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Phone</th>
            {/* new table header cell */}
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
                {/* new table data cell */}
                <td>
                  <button className="icon-btn" onClick={() => editRow(user)}>
                    <FaEdit />
                  </button>
                  <button className="icon-btn" onClick={() => deleteUser(user.id)}>
                    <FaTrash />
                  </button>
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
    </div>
  );
};

export default UserTable;