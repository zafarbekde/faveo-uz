import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import '../../css/Modal.css'

const EditUserForm = (props) => {
  const [name, setName] = useState(props.user.name);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);
  const [birthday, setBirthday] = useState(props.user.birthday);
  const [phone, setPhone] = useState(props.user.phone);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      id: props.user.id,
      name,
      surname,
      email,
      birthday,
      phone
    };
    props.onUpdate(updatedUser);
    props.onHide();
  };

  return (
    <div className="modala">

      <Form className="modal-content" onSubmit={handleSubmit}>
        <Form.Group  controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter birthday"
            value={birthday}
            onChange={handleBirthdayChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </Form.Group>
        <Button onChange={handleSubmit} variant="primary" type="submit">
          Save Changes
        </Button>
        <Button variant="secondary" >
          Close
        </Button>
      </Form>
    </div>  

  );
};

export default EditUserForm;
