import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaChevronRight } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
// import { posts } from '../../data';

const AllBlog = () => {
  const defaultImage = 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const api = await axios.get('https://climate-fix-backend.herokuapp.com/posts/');
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
      <div className="text-end my-2">
        <Link to="/newpost" style={{ textDecoration: 'none' }}>
          {' '}
          <button type="button" className="btn btn-success"> Create post</button>
        </Link>
      </div>
      {
        Object.keys(data).length === 0 ? <h2>Loading</h2>
          : (
            <Row>
              {
               data.map((post) => {
                 const {
                   id, picture, description, title,
                 } = post.post;
                 return (
                   <Col xs={12} md={6} lg={3} key={id} className="my-2 ">
                     <Link to={`${id}`} style={{ textDecoration: 'none' }}>
                       <div className="shadow mx-1 post-cards">
                         <img className="image-post-slide" src={picture || defaultImage} alt="mne" />
                         <div className="elipsis text-dark px-1 mt-2">
                           Title:
                           {' '}
                           {title}
                         </div>
                         <p className="text-post-slide text-dark">

                           {description.substring(0, 50)}
                           ...
                         </p>
                         <span className="absolute-readmore">
                           Read more
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
