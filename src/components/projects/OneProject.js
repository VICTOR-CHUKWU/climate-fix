/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import {
  Col, Container, Row, Form, Button,
} from 'react-bootstrap';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [donate, setDonate] = useState(false);
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
                <h2 className="text-bold1 pl-3 align-center">
                  Project:
                  {' '}
                  {data.name}
                </h2>
                <h2 className="text-success text-bold1 pl-3 align-center">
                  Location:
                  {' '}
                  {data.location}
                </h2>
                <p className="pl-3 text-success align-center">{data.description}</p>
                <div>
                  <p className="align-center">
                    project starts:
                    {' '}
                    {moment.utc(data.start_date).format('MM/DD/YYYY')}
                  </p>
                  <p className="align-center">
                    project ends:
                    {' '}
                    {moment.utc(data.end_date).format('MM/DD/YYYY')}
                  </p>
                </div>
                <div className="py-3 d-flex justify-content-center">
                  <Button onClick={() => setDonate(!donate)}>
                    { donate ? 'Close' : 'Donate'}
                  </Button>
                </div>

              </Col>

              {
                donate ? (
                  <Col xs={12} className="text-center">
                    <h3>Accoun No: 3055662029</h3>
                    <h3>Account Name: Chukwu Victor</h3>
                    <h3>Bank: First Bank</h3>
                  </Col>
                )
                  : ''
              }

            </Row>
          )
      }

    </Container>
  );
};

export default SingleBlogPost;
