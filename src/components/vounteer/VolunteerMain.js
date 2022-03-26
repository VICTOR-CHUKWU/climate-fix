/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Col, Button, Row,
} from 'react-bootstrap';
import './volunteer.css';

const VolunteerMain = () => {
  const [data, setData] = useState([]);
  const [donate, setDonate] = useState(false);
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
    <div className="min-height">
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
             <div
               className="volunteer-main"
               style={{
                 backgroundImage: `url(${picture})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
               }}
             >
               <Row className="text-center">
                 <Col xs={12} md={6}>
                   <Link to="/projects" style={{ textDecoration: 'none' }}>
                     <div className="upcoming-p text-success">Upcoming Project</div>
                   </Link>
                 </Col>
               </Row>
             </div>
             <div className="text-center">
               <div className="text-success project-message-title mt-2 mb-2">
                 Project Title:
                 {' '}
                 {name}
               </div>
               <div className="text-success project-message-title mt-2 mb-2">
                 Location:
                 {' '}
                 {location}
               </div>
             </div>
             <div>
               <div className="text-success project-message">
                 {description}

               </div>
               <div className="project-date">
                 Project starts:
                 {' '}
                 {moment.utc(start_date).format('MM/DD/YYYY')}
               </div>
               <div className="project-date">
                 Project ends:
                 {' '}
                 {moment.utc(end_date).format('MM/DD/YYYY')}
               </div>
             </div>

             <div className="d-flex justify-content-center my-2">
               <Button onClick={() => setDonate(!donate)}>
                 { donate ? 'Close' : 'Donate'}
               </Button>
             </div>
             {
                donate ? (
                  <div className="text-center">
                    <h3>Accoun No: 3055662029</h3>
                    <h3>Account Name: Chukwu Victor</h3>
                    <h3>Bank: First Bank</h3>
                  </div>
                )
                  : ''
              }

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
