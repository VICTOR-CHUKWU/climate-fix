import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NewPost = () => (
  <div className="my-2 text-center container-fluid">
    <Form className="p-3 mx-3">
      <h3 className="text-center text-success mt-5 text-bold">New Post</h3>
      <Form.Group controlId="formBasicName">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
      <Form.Group controlId="formFile" className="my-3">
        <Form.Control type="file" />
      </Form.Group>
      <textarea
        className="form-control my-4"
        placeholder="tell us your mind"
      />

      <Button variant="success" type="submit" className="my-3">
        Create post
      </Button>
    </Form>
  </div>
);

export default NewPost;
