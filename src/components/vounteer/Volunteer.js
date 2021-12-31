import {
  Col, Container, Row,
} from 'react-bootstrap';

const Volunteer = () => (
  <Container
    fluid
    className="volunteer-main"
    style={{
      // eslint-disable-next-line global-require
      backgroundImage: `url(${require('../../images/volunteer/volunteer-bg.png')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Row className="text-center">
      <Col xs={12} md={6}>
        <div className="upcoming-p text-success">Upcoming Project</div>
      </Col>
    </Row>
  </Container>
);

export default Volunteer;
