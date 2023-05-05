import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import '../../css/Modal.css'
import { useMutation } from 'react-query';


const EditUserForm = (props) => {
  const [user, setUser] = useState(props.user);
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
  });

  const updateUser = useMutation((updatedUser) => {
    return axios.put(`http://localhost:8080/api/v1/users${user.id}`, updatedUser);
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    updateUser.mutate(updatedUser, {
      onSuccess: (data) => {
        setUser(updatedUser);
        props.onUserUpdated(updatedUser);
      },
      onError: (error) => {
        console.log(error); 
      },
    });
  };

  return (
    <Form className="EditUserForm" onSubmit={handleFormSubmit}>
      <Form.Group controlId="formName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={updatedUser.name}
          onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label className="form-label">Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Surname"
          value={updatedUser.surname}
          onChange={(e) => setUpdatedUser({ ...updatedUser, surname: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Email"
          value={updatedUser.email}
          onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label className="form-label">Birthday</Form.Label>
        <Form.Control
          type="text"
          placeholder="Birthday"
          value={updatedUser.birthday}
          onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label className="form-label">Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          value={updatedUser.phone}
          onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
        />
      </Form.Group>
      <Button className="btn-primary" variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditUserForm;
