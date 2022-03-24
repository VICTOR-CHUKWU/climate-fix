import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col, Container, Row, Button, Form,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import hitAPIWithSignupDetails from '../../Redux/user/User';
import Bglogo from '../../images/auth/reg.png';
import './auth.css';

const Register = () => {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate('/posts', { replace: true });
  }

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const { signedUp } = state;
  // eslint-disable-next-line no-unused-vars
  const [signUpSuccess, setSignUpSucess] = useState(signedUp);

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
      dispatch(hitAPIWithSignupDetails(input));

      return true;
    }
    return false;
  };
  useEffect(() => {
    setSignUpSucess(() => signedUp);
    if (signedUp === 'up') {
      setTimeout(() => goToHomePage(), 3000);
    }
  }, [state]);

  return (
    <Container
      fluid
      className="register"
    >
      <Row className="text-center pt-5 mx-md-5">
        <Col xs={12} md={6} className="px-md-4">
          <div className="auth-image-container">
            <img className="auth-image mx-0" src={Bglogo} alt="logo" />
          </div>
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

            {/* <Form.Group controlId="formBasicEmail" className="my-3">
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={handleInput}
                value={input.password}
                name="password"
              />
            </Form.Group> */}

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
