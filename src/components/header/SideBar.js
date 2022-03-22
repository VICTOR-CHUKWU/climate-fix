import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiCancel } from 'react-icons/gi';
import { useGlobalContext } from './HeaderContext';

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <Container className={`sidebar ${isSidebarOpen ? 'show-side-bar' : ''}`}>
      <div className="sidebar-inner">
        <GiCancel className="click-cancel cursor" onClick={closeSidebar} />
        <Row className="text-center">
          <Col xs={12}>
            {' '}
            <Link to="/posts" style={{ textDecoration: 'none' }} onClick={closeSidebar} className="mb-3 nav-text">blog</Link>
          </Col>
          <Col xs={12}>
            {' '}
            <Link to="/volunteer" style={{ textDecoration: 'none' }} onClick={closeSidebar}>
              <span className="my-5 nav-text"> Volunteer</span>
            </Link>
          </Col>
          <Col xs={12}><Button variant="success" className="my-3"> Donate</Button></Col>
          <Col xs={12}>
            {' '}
            <Link to="/login" style={{ textDecoration: 'none' }} onClick={closeSidebar}>
              <Button variant="outline-success" className="my-3 "> Login</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SideBar;
