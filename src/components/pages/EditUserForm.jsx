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
    const updatedUser = {
      name,
      surname,
      email,
      birthday,
      phone
    };
    axios.post(`http://localhost:2000/api/v1/users/${props.user.id}`, updatedUser)
      .then((response) => {
        console.log(response.data); // Handle successful response
        props.onUserUpdated(updatedUser); // Update the user data in the UserTable
      })
      .catch((error) => {
        console.log(error); // Handle error
      });
  };

  return (
    <Form className="modal-content" onSubmit={handleFormSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditUserForm;
