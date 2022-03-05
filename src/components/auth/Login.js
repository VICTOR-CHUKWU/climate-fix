import {
  Col, Container, Row, Button, Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bglogo from '../../images/auth/reg.png';
import './auth.css';

const Login = () => (
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
          <h3 className="text-center text-success mt-5 text-bold">Login</h3>
          <Form.Group controlId="formBasicName">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="success" type="submit" className="my-3">
            Login
          </Button>
        </Form>
        <p className="text-success">
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Login;
