import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col, Container, Row, Button, Form,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Bglogo from '../../images/auth/reg.png';
import './auth.css';
import { hitAPIWithSigninDetails } from '../../Redux/user/User';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loggedIn } = state.user;
  const [email, setEmail] = useState('');

  const [signedInSuccess, setSignedInSuccess] = useState(loggedIn);

  const handleSubmit = (event) => {
    if (email) {
      event.preventDefault();
      dispatch(hitAPIWithSigninDetails({ email }));
      setEmail('');
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (loggedIn === 'in') {
      navigate('/posts', { replace: true });
    }
    if (loggedIn === 'err') {
      setSignedInSuccess(loggedIn);
    }
  }, [state]);
  return (
    <Container
      fluid
      className="register"
    >
      <Row className="text-center pt-5 mx-md-5">
        {signedInSuccess === 'err' && <p className="text-danger py-2 text-bold">Email incorrect or bad connection!</p>}
        <Col xs={12} md={6} className="px-md-4">
          <div className="auth-image-container">
            <img className="auth-image mx-0" src={Bglogo} alt="logo" />
          </div>
        </Col>
        <Col xs={12} md={6} className="bg-white mx-0">
          <Form className="form-reg" onSubmit={handleSubmit}>
            <h3 className="text-center text-success mt-5 text-bold">Login</h3>
            <Form.Group controlId="formBasicEmail" className="my-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
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
};

export default Login;
