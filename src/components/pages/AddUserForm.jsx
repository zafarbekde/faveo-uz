import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const initialUserState = { id: null, name: "", username: "", email: "", birthday: "", phone: "", };
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username || !user.email || !user.birthday || !user.phone) return;
    addUser(user);
    setUser(initialUserState);
  };

  return (
    <div style={{position: 'fixed', top:"0", "left": "0", width: '100%', height: '100vh', display: 'none', 'justifyContent': 'center', alignItems: 'center', backgroundColor: " rgba(19, 19, 19, 0.42)"}}>
    <form onSubmit={handleSubmit} style={{ "padding": "100px 300px", "borderRadius": "10px", backgroundColor: "#fff", display: 'flex', "flexDirection": "column", gap: "10px" }}>
    <h1>Personal Data</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />

      <label>Birthday</label>
      <input
        type="text"
        name="birthday"
        value={user.birthday}
        onChange={handleInputChange}
      />

      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
      
    </form>

  

    </div>
  );
};

export default AddUserForm;
