import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const Join = () => (
  <Container fluid className="py-1 shadow bg-white">
    <Row className="d-flex justify-content-between align-items-center">
      <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
        <h6>Want to join us fix the climate and make the world better?</h6>
      </Col>
      <Col xs={12} md={6} className="d-flex justify-content-center">
        <div>
          <Button variant="outline-success" className="mx-2"> Volunteer</Button>
          <Button variant="success" className="mx-2"> Donate</Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Join;
