import { Container, Row, Col } from 'react-bootstrap';
// import weather from '../../images/home/climate-home.png';

const WeatherMain = () => (
  <Container
    className="weather-main"
    style={{
      // eslint-disable-next-line global-require
      backgroundImage: `url(${require('../../images/home/climate-home.png')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Row className="text-center">
      <Col xs={12} md={6}>
        <div className="weather-center">
          <div className="btn-circle">
            <div className="btn-inner-circle">
              <h3>26 deg</h3>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={12} md={6} className="weather-details">
        <div className="details-inner">
          <div className="d-flex">
            <div className="mr-4">
              <p className="text-white mb-0">Sunday 4th jan</p>
              <p className="text-white mt-0">Gmt 12 noon</p>
            </div>
            <div className="ml-3">
              <p className="text-white mb-0">90%</p>
              <p className="text-white mt-0">chance of rain</p>
            </div>
          </div>
          <h5 className="text-white text-left">if it rains heavily it might cause problem</h5>
        </div>
      </Col>
    </Row>
  </Container>
);

export default WeatherMain;
