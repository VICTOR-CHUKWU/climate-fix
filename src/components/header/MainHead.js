import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useGlobalContext } from './HeaderContext';
import logo from '../../images/logo.jpeg';

const MainHead = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <Container fluid className="py-1 shadow bg-white">
      <Row className="d-flex justify-content-between align-items-center mx-0 mx-md-5">
        <Col xs={4}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </Col>
        <Col xs={8} className="">
          <div className="ml-0 ml-md-3 ml-lg-5 d-flex justify-content-center">
            <Link to="/posts" style={{ textDecoration: 'none' }} className="d-none d-md-inline">blog</Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outline-success" className="mx-3 d-none d-md-inline"> Login</Button>
            </Link>
            <Link to="/volunteer" style={{ textDecoration: 'none' }}>
              <Button variant="outline-success" className="mx-3 d-none d-md-inline"> Volunteer</Button>
            </Link>
            <Button variant="success" className="mx-3 d-none d-sm-inline"> Donate</Button>
          </div>
          <div className="d-flex justify-content-end">
            {' '}
            <AiOutlineMenu className="d-inline d-md-none cursor togglenav" onClick={openSidebar} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHead;
