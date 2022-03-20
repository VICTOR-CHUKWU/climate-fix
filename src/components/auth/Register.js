import { useState } from 'react';
import {
  Col, Container, Row, Button, Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bglogo from '../../images/auth/reg.png';
import './auth.css';

const Register = () => {
  const [input, setInput] = useState({
    email: '',
    name: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    const { email, name } = input;
    if (name && email) {
      event.preventDefault();
      return true;
    }
    return false;
  };
  return (
    <Container
      fluid
      className="register"
    >
      <Row className="text-center pt-5">
        <Col xs={12} md={6} className="mx-0">
          <img className="auth-image mx-0" src={Bglogo} alt="logo" />
        </Col>
        <Col xs={12} md={6} className="bg-white mx-0">
          <Form className="form-reg">
            <h3 className="text-center text-success mt-5 text-bold">Register to Become a Part of This Awareness</h3>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="name"
                onChange={handleInput}
                value={input.name}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="my-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleInput}
                value={input.email}
                name="email"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="my-3" onClick={handleSubmit}>
              Create an Account
            </Button>
          </Form>
          <p className="text-success">
            Already have an account?
            {' '}
            <Link to="/login">Log In</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
