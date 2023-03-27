import React, { useState } from "react";
import Modal from '../pages/EditUserModal';


const UserTable = ({ editRow, deleteUser, users }) => {

    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const saveChanges = (updatedUser) => {
        const updatedUsers = users.map((user) => {
            if (user.id === updatedUser.id) {
                return updatedUser;
            }
            return user;
        });
        setUser(updatedUsers);
        setShowModal(false);
    };


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => editRow(user)}>Edit</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                                <button onClick={() => {
                                    setCurrentUser(user);
                                    setShowModal(true);
                                }}>Edit</button>
                                <Modal
                                    showModal={showModal}
                                    closeModal={() => setShowModal(false)}
                                    currentUser={currentUser}
                                    saveChanges={saveChanges}
                                />

                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTable;
