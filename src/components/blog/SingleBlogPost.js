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
  const user = JSON.parse(window.localStorage.getItem('someRandomVitalData'));
  const { userId } = user?.mainUser || 0;
  const defaultImage = 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
  const { id } = useParams();
  const [data, setData] = useState({});
  const [comment, setComment] = useState('');
  const fetchData = async () => {
    try {
      const api = await axios.get(`https://climate-fix-backend.herokuapp.com/posts/${id}`);
      const response = api.data;
      setData(response);
    } catch (e) {
      throw e.toString();
    }
  };
  const makeComment = () => {
    if (comment === '') return;

    setComment('');
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container fluid className="min-height">
      {
        Object.keys(data).length === 0 ? <h2 className="text-center text-primary">Loading</h2>
          : (
            <Row>
              <Col xs={12} className="my-4">
                <div className="image-container">
                  <img className="single-post-image" src={data.post.picture ? data.post.picture : defaultImage} alt={data?.post.title} />
                </div>
              </Col>
              <Col xs={12} lg={8} className=" py-2 pl-3 pr-3 pl-md-5 pr-md-2">
                <h2 className="text-bold pl-3">{data?.post.title}</h2>
                <p className="pl-3">{data?.post.description}</p>
                {
                  userId === undefined || userId === 0 ? ''
                    : (
                      <Form onSubmit={makeComment} className="ml-3">
                        <h3>Leave a Comment</h3>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                          />
                        </Form.Group>

                        <Button variant="success" type="submit" className="my-3">
                          Submit
                        </Button>
                      </Form>
                    )
                }
              </Col>
              <Col xs={12} lg={4} className=" py-2 pl-3 pr-3 pr-md-2 pl-md-3">
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
                <div className="hr" />
                <div className="comments">
                  <h4>comments</h4>
                </div>
              </Col>
              <Col xs={12}>
                {' '}
                <Join />
              </Col>
            </Row>
          )
      }

    </Container>
  );
};

export default SingleBlogPost;
