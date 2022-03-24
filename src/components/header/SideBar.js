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
          <Col xs={12} className="mb-3">
            {' '}
            <Link to="/posts" style={{ textDecoration: 'none' }} onClick={closeSidebar} className="nav-text text-bold">Blog</Link>
          </Col>
          <Col xs={12} className="my-2">
            {' '}
            <Link to="/volunteer" style={{ textDecoration: 'none' }} onClick={closeSidebar}>
              <span className="my-5 nav-text text-bold"> Volunteer</span>
            </Link>
          </Col>
          <Col xs={12}><Button variant="success" className="my-4 btn-nav"> Donate</Button></Col>
          <Col xs={12}>
            {' '}
            <Link to="/login" style={{ textDecoration: 'none' }} onClick={closeSidebar}>
              <Button variant="outline-success" className="my-3 btn-nav"> Login</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SideBar;
