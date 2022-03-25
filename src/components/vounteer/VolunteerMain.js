/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Col, Button, Row,
} from 'react-bootstrap';

import VolunteerTop from './VolunteerTop';
import './volunteer.css';

const VolunteerMain = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const api = await axios.get('https://climate-fix-backend.herokuapp.com/projects');
      const response = api.data;
      setData(response);
    } catch (e) {
      throw e.toString();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-heigth">
      {
         Object.keys(data).length === 0 ? <h2>Loading</h2>
           : (
             <>
               {
       data.slice(0, 1).map((item) => {
         const {
           id, picture, description, location, start_date, end_date, name,
         } = item;
         return (
           <section key={id}>
             <VolunteerTop />
             <section
               fluid
               className="volunteer-main"
               style={{
                 // eslint-disable-next-line global-require
                 backgroundImage: `url(${picture})`,
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
             </section>
             <Row className="text-center">
               <Col xs={12}>
                 <div className="text-success project-message-title mt-5 mb-3">{name}</div>
                 <div className="text-success project-message-title mt-5 mb-3">{location}</div>
               </Col>
               <Col xs={12}>
                 <div className="text-success project-message">
                   {description}

                 </div>
                 <div className="project-date">
                   Project starts:
                   {' '}
                   {start_date}
                 </div>
                 <div className="project-date">
                   Project ends:
                   {' '}
                   {end_date}
                 </div>
               </Col>
             </Row>
             <div className="d-flex justify-content-center">
               <Button>Donate</Button>
             </div>
           </section>
         );
       })
     }
             </>
           )
      }

    </div>
  );
};

export default VolunteerMain;
