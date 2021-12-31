import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useGlobalContext } from './HeaderContext';

const MainHead = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <Container fluid className="py-1 shadow bg-white">
      <Row className="d-flex justify-content-between align-items-center mx-0 mx-md-5">
        <Col xs={6}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h4>climate fix</h4>
          </Link>
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          <div className="ml-0 ml-md-3 ml-lg-5">
            <span className="d-none d-md-inline">blog</span>
            <Button variant="outline-success" className="mx-3 d-none d-md-inline"> Volunteer</Button>
            <Button variant="success" className="mx-3 d-none d-sm-inline"> Donate</Button>
            <AiOutlineMenu className="d-inline d-md-none cursor" onClick={openSidebar} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHead;
