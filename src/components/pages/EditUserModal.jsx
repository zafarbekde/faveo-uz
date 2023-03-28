import React, { useState } from "react";

const EditUserModal = ({ user, updateUser, closeModal }) => {
  const [userData, setUserData] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(userData);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={userData.id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={userData.surname}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={userData.birthday}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phones">Phone:</label>
            <input
              type="text"
              id="phones"
              name="phones"
              value={userData.phones}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
