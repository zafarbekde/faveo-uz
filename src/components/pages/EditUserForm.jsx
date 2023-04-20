import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import '../../css/Modal.css'
import axios from "axios";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.user);

  // Update the state when the user data changes
  useEffect(() => {
    console.log("User data changed:", user);
    setUser(props.user);
  }, [props.user]);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Submitting user data:", user);
    axios
      .post(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then((response) => {
        console.log("Server response:", response.data); // Handle successful response
        props.onUserUpdated(user); // Update the user data in the UserTable
      })
      .catch((error) => {
        console.log("Server error:", error); // Handle error
      });
  };

  return (
    <Form className="modal-content" onSubmit={handleFormSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter birthday"
          value={user.birthday}
          onChange={(e) => setUser({ ...user, birthday: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditUserForm;
