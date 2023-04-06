import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import '../../css/UserTable.css'


const UserTable = ({ users, deleteUser, editRow }) => {
 

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Phone</th>
            <th>Actions</th>
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
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => editRow(user)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No Users
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default UserTable;
