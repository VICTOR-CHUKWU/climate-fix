/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import fetchWeather from './weatherService';
import defaultImage from '../../images/home/climate-home.png';
import vibrantCloud from '../../images/home/vibrantCloud.avif';
import hotCloud from '../../images/home/hotCloud.jpg';

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
  const backgroundImage = typeof currentWeather.main === 'undefined' ? defaultImage : currentWeather.main.temp < 25 ? vibrantCloud : hotCloud;
  return (
    <Container
      className="weather-main"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {
        typeof currentWeather.main === 'undefined' ? <h2>Loading</h2>
          : (
            <Row className="">
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
                  <div className="d-flex flex-column">
                    <div className="">
                      <h4 className="text-white mb-3">
                        {currentWeather.name}
                        ,
                        {' '}
                        {currentWeather.sys.country}
                        {' '}
                        at
                        {' '}
                        {moment().format('LL')}
                        ,
                        {' '}
                        {moment().format('h:mma')}
                      </h4>
                    </div>
                    <div className="">
                      <h4 className="text-white mb-0">
                        {currentWeather.main.humidity}
                        {' '}
                        % chance of rain
                      </h4>
                    </div>
                  </div>
                  <h5 className="text-white text-left">
                    {currentWeather.weather[0].description}
                  </h5>
                </div>
              </Col>
              <Col xs={12} className="bg-success reminder-temp">
                {
                  currentWeather.main.temp > 25 ? 'try dey jack' : 'take care'
                }
              </Col>
            </Row>
          )
      }

    </Container>
  );
};

export default WeatherMain;
