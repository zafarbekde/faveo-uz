import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';

const AddUserForm = ({ addUser }, props) => {
  const initialFormState = { id: null, name: "", username: "", email: "", birthday: "", phone: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username || !user.email || !user.birthday || !user.phone) return;
    addUser(user);
    setUser(initialFormState);
  };

  return (
    <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Personal Data
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input type="text" name="username" value={user.username} onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="birthday">
            Birthday:
          </label>
          <input type="text" name="birthday" value={user.birthday} onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="phone">
            Phone:
          </label>
          <input type="tel" name="phone" value={user.phone} onChange={handleInputChange} />
        </div>
        <button className="form-button">Add new user</button>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
};

export default AddUserForm;
