/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Col, Container, Row, Form, Button,
} from 'react-bootstrap';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const api = await axios.get(`https://climate-fix-backend.herokuapp.com/projects/${id}`);
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
    <Container fluid className="min-height">
      {
        Object.keys(data).length === 0 ? <h2 className="text-center text-primary">Loading</h2>
          : (
            <Row>
              <Col xs={12} className="my-4">
                <div className="image-container">
                  <img className="single-post-image" src={data.picture} alt="title" />
                </div>
              </Col>
              <Col xs={12} className=" py-2 pl-3 pr-3 pl-md-5 pr-md-5 ">
                <h2 className="text-bold pl-3 align-center">{data.location}</h2>
                <p className="pl-3 align-center">{data.description}</p>
                <div>
                  <p className="align-center">
                    project starts:
                    {' '}
                    {data.start_date}
                  </p>
                  <p className="align-center">
                    project ends:
                    {' '}
                    {data.end_date}
                  </p>
                </div>
                <div className="py-3 d-flex justify-content-center">
                  <Button>Donate</Button>
                </div>

              </Col>

            </Row>
          )
      }

    </Container>
  );
};

export default SingleBlogPost;
