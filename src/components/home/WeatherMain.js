/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import fetchWeather from './weatherService';
import defaultImage from '../../images/home/climate-home.png';
import vibrantCloud from '../../images/home/vibrantCloud.avif';
import hotCloud from '../../images/home/hotCloud.jpg';

const WeatherMain = () => {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
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
    await fetchdata(lat || '0', long || '0');
  }, [lat, long]);
  const backgroundImage = typeof currentWeather.main === 'undefined' ? defaultImage : currentWeather.main.temp < 25 ? vibrantCloud : hotCloud;
  const classnames = typeof currentWeather.main === 'undefined' ? 'white-text' : currentWeather.main.temp < 25 ? 'green-text' : 'black-text';
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
              {

                lat === '' && long === '' ? <div className="reminder-location">Kindly allow location to serve you better</div> : ''

              }
              <Col xs={12} md={6}>
                <div className="weather-center">
                  <div className="btn-circle">
                    <div className="btn-inner-circle">
                      <h3 className={classnames}>
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
                      <h4 className={`${classnames} mb-3`}>
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
                      <h4 className={`${classnames} mb-2`}>
                        {currentWeather.main.humidity}
                        {' '}
                        % chance of rain
                      </h4>
                    </div>
                    <h5 className={`${classnames} mt-0`}>
                      {currentWeather.weather[0].description}
                    </h5>
                  </div>

                </div>
              </Col>
              {
               lat === '' && long === '' ? ''
                 : (
                   <Col xs={12} className="reminder-temp">
                     {
                 currentWeather.main.temp > 25 ? 'The weather is very hot due to human activities on planet earth, we can do better to save our planet' : 'A good weather needs to be maintained by reducing the excess burning of carbon and fossile fuel'
               }
                   </Col>
                 )
             }
            </Row>
          )
      }

    </Container>
  );
};

export default WeatherMain;
