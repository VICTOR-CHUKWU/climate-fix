import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import { posts } from '../../data';

const AllBlog = () => (
  <Container className="mt-3">
    <Row>
      {
               posts.map((post) => {
                 const {
                   id, image, name, title, quote,
                 } = post;
                 return (
                   <Col xs={12} md={6} lg={3} key={id} className="my-2">
                     <div className="shadow mx-1">
                       <img className="image-post-slide" src={image} alt={name} />
                       <p className="name-post-slide text-dark">{title}</p>
                       <p className="text-post-slide text-dark">

                         {quote.substring(0, 50)}
                         ...
                       </p>
                       <Link to="/post" style={{ textDecoration: 'none' }}>
                         Read more
                         {' '}
                         <FaChevronRight className="text-success mx-2" />
                       </Link>
                     </div>
                   </Col>
                 );
               })
           }
    </Row>
  </Container>
);

export default AllBlog;
