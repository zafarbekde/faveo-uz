import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import '../../css/Modal.css'
import axios from "axios";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.user);
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
  });

  // Update the state when the user data changes
  useEffect(() => {
    console.log("User data changed:", user);
    setUser(props.user);
    setUpdatedUser({
      name: user.name,
      surname: user.surname,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
    });
  }, [props.user]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:2000/api/v1/users/${user.id}`, updatedUser)
      .then((response) => {
        console.log(response.data.routes[0].response.users);
        setUser(updatedUser);
        props.onUserUpdated(updatedUser);
      })
      .catch((error) => {
        console.log(error);
        // handle the error here, for example by displaying an error message to the user
      });
  };


  return (
    <Form className="modal-content" onSubmit={handleFormSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={updatedUser.name}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              name: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={updatedUser.surname}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              surname: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              email: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter birthday"
          value={updatedUser.birthday}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              birthday: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          value={updatedUser.phone}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              phone: e.target.value,
            })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Save Changes
      </Button>
    </Form>
  );
};

export default EditUserForm;
