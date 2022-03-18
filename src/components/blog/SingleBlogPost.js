/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import {
  Col, Container, Row, Form, Button,
} from 'react-bootstrap';
import Join from '../Join';

const SingleBlogPost = () => {
  const defaultImage = 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const api = await axios.get(`https://climate-fix-backend.herokuapp.com/posts/${id}`);
      const response = api.data;
      setData(response);
    } catch (e) {
      throw e.toString();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (Object.keys(data).length === 0) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <Container fluid className="min-heigth">
      <Row>
        <Col xs={12} className="my-4">
          <div className="image-container">
            <img className="single-post-image" src={data.post.picture ? data.post.picture : defaultImage} alt={data?.post.title} />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <h2>{data?.post.title}</h2>
          <p>{data?.post.description}</p>
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
            {data?.user.name}
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
