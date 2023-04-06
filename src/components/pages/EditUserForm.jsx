import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.updateUser(user.id, user);
    props.resetForm();
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Birthday:
        <input
          type="text"
          name="birthday"
          value={user.birthday}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button type="submit">Save</button>
       
      </div>
    </form>
  );
};

export default EditUserForm;
