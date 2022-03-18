import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NewPost = () => {
  const [input, setInput] = useState({
    title: '',
    text: '',
    image: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  return (
    <div className="my-2 text-center container-fluid">
      <Form className="p-3 mx-3">
        <h3 className="text-center text-success mt-5 text-bold">New Post</h3>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            onChange={handleInput}
            value={input.title}
            name="title"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="my-3">
          <Form.Control
            type="file"
            onChange={handleInput}
            value={input.image}
            name="image"
          />
        </Form.Group>
        <textarea
          className="form-control my-4"
          placeholder="tell us your mind"
          onChange={handleInput}
          value={input.text}
          name="text"
        />

        <Button variant="success" type="submit" className="my-3">
          Create post
        </Button>
      </Form>
    </div>
  );
};

export default NewPost;
