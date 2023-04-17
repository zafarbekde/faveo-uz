import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    birthday: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    setUser({ name: "", username: "", email: "", birthday: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          className="form-control"
          id="birthday"
          name="birthday"
          value={user.birthday}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
