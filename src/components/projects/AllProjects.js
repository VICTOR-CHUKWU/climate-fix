/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { FaChevronRight } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

const AllBlog = () => {
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
    <Container className="mt-3 min-height">
      {
        Object.keys(data).length === 0 ? <h2>Loading</h2>
          : (
            <Row>
              {
               data.map((project) => {
                 const {
                   id, picture, description, location, start_date, end_date,
                 } = project;
                 const dateStart = moment.utc(start_date).format('MM/DD/YYYY');
                 const dateEnd = moment.utc(end_date).format('MM/DD/YYYY');
                 return (
                   <Col xs={12} md={6} lg={4} key={id} className="my-2 ">
                     <Link to={`${id}`} style={{ textDecoration: 'none' }}>
                       <div className="shadow mx-1 project-cards">
                         <img className="image-post-slide" src={picture} alt="mne" />
                         <div className="elipsis text-dark px-1 mt-2">
                           Location:
                           {' '}
                           {location}
                         </div>
                         <p className="text-post-slide text-dark">

                           {description.substring(0, 50)}
                           ...
                         </p>
                         <div className="PX-2">
                           <p className="text-dark project-date">
                             project starts:
                             {' '}
                             {dateStart}
                           </p>
                           <p className="text-dark project-date">
                             project ends:
                             {' '}
                             {dateEnd}
                           </p>
                         </div>
                         <span className="absolute-readmore">
                           Donate
                           {' '}
                           <FaChevronRight className="text-success mx-2" />
                         </span>
                       </div>
                     </Link>
                   </Col>
                 );
               })
           }
            </Row>
          )
      }

    </Container>
  );
};

export default AllBlog;
