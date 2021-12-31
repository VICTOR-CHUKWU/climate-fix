import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
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
            <span className="text-primary">blog</span>
          </Col>
          <Col xs={12}>
            {' '}
            <Button variant="outline-success" className="my-3"> Volunteer</Button>
          </Col>
          <Col xs={12}><Button variant="success" className="my-3"> Donate</Button></Col>
        </Row>
      </div>
    </Container>
  );
};

export default SideBar;
