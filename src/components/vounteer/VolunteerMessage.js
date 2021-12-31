import {
  Col, Container, Row,
} from 'react-bootstrap';

const VolunteerMessage = () => (
  <Container>
    <Row className="text-center">
      <Col xs={12}>
        <div className="text-success project-message-title mt-5 mb-3">Crisis in the Creek</div>
      </Col>
      <Col xs={12}>
        <div className="text-success project-message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cursus ipsum nulla
          elementum facilisis diam quam enim, s nec, ipsum duis nulla quis potenti id purus.

        </div>
      </Col>
    </Row>
  </Container>
);

export default VolunteerMessage;
