import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import {
  Col, Container, Row, Form, Button,
} from 'react-bootstrap';
import Join from '../Join';
import { post } from '../../data';

const SingleBlogPost = () => {
  const {
    name, image, quote, title,
  } = post;
  return (
    <Container fluid className="min-heigth">
      <Row>
        <Col xs={12} className="my-4">
          <div className="image-container">
            <img className="single-post-image" src={image} alt={title} />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <h2>{title}</h2>
          <p>{quote}</p>
          <Form>
            <h3>Leave a Comment</h3>
            <Form.Group controlId="formBasicName">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="success" type="submit" className="my-3">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12} lg={6}>
          <h4>
            writen by:
            {' '}
            {name}
          </h4>
          <div className="d-flex align-items-center my-3">
            <span>share</span>
            <FaFacebookF className="text-success mx-3" />
            <FaTwitter className="text-success mx-3" />
          </div>
          <Join />
          <div className="hr" />
          <div className="comments">
            <h4>comments</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBlogPost;
