import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import '../../css/Modal.css'
import axios from 'axios';

const EditUserForm = (props) => {
  const [name, setName] = useState(props.user.name);
  const [surname, setSurname] = useState(props.user.surname);
  const [email, setEmail] = useState(props.user.email);
  const [birthday, setBirthday] = useState(props.user.birthday);
  const [phone, setPhone] = useState(props.user.phone);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    axios.post(`http://localhost:2000/api/v1/users/${userId}`, formData)
      .then((response) => {
        console.log(response.data.routes[0].response.users); // Handle successful response
      })
      .catch((error) => {
        console.log(error); // Handle error
      });
  };
  return (
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
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={surname}
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
      </Form> 
  );
};

export default EditUserForm;
