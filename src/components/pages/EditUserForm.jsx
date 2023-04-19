import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../../css/Modal.css";
import axios from "axios";

const EditUserForm = (props) => {
  const [name, setName] = useState(props.user.name);
  const [surname, setSurname] = useState(props.user.surname);
  const [email, setEmail] = useState(props.user.email);
  const [birthday, setBirthday] = useState(props.user.birthday);
  const [phone, setPhone] = useState(props.user.phone);
  const [formData, setFormData] = useState(props.userData);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    axios
      .post(`http://localhost:2000/api/v1/users/${props.user.id}`, formData)
      .then((response) => {
        console.log(response.data); // Handle successful response
      })
      .catch((error) => {
        console.log(error); // Handle error
      });
  };
  return (
    <Form className="modal-content">
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formUsername">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
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
          type="text"
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
      <form onSubmit={handleFormSubmit}>
        {/* form fields */}
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};

export default EditUserForm;
