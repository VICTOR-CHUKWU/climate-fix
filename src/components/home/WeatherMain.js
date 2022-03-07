/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import fetchWeather from './weatherService';

const WeatherMain = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);

  const fetchdata = async (lat, long) => {
    const data = await fetchWeather(lat, long);
    const dataWeather = setCurrentWeather(data);
    return dataWeather;
  };

  useEffect(async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    await fetchdata(lat, long);
  }, [lat, long]);

  if (typeof currentWeather.main === 'undefined') {
    return (
      <h2>Loading</h2>
    );
  }
  return (
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
                <h3 className="text-white">
                  {currentWeather.main.temp}
                  {' '}
                  &deg;C
                </h3>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="weather-details">
          <div className="details-inner">
            <div className="d-flex">
              <div className="mr-4">
                <p className="text-white mb-0">{currentWeather.name}</p>
                <p className="text-white mt-0">
                  {moment().format('LL')}
                </p>
              </div>
              <div className="ml-3">
                <p className="text-white mb-0">
                  {currentWeather.main.humidity}
                  {' '}
                  %
                </p>
                <p className="text-white mt-0">chance of rain</p>
              </div>
            </div>
            <h5 className="text-white text-left">
              {currentWeather.weather[0].description}
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherMain;
