import {
  Col, Container, Row,
} from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const VolunteerTop = () => (
  <Container fluid className="volunteer-top">
    <Row className="d-flex align-items-center justify-content-between bg-white mx-2 mx-md-5">
      <Col xs={12} md={8}>
        <div className="text-success">Volunteer with us</div>
      </Col>
      <Col xs={12} md={4} className="d-none d-md-flex">
        <div className="text-success explore-projects">
          Explore pas projects
          {' '}
          <FaChevronRight className="text-success mx-2" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default VolunteerTop;
