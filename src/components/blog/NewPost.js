/* eslint-disable consistent-return */
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

  const createNewPost = async () => {
    const { title, text, image } = input;
    if (title === '' || text === '' || image === '') {
      return;
    }
    const resp = await fetch('https://climate-fix-backend.herokuapp.com/users/1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        text,
        image,
      }),
    });
    const data = await resp.text();
    return data;
  };
  return (
    <div className="my-2 text-center container-fluid min-height">
      <Form className="p-3 mx-3" onSubmit={createNewPost}>
        <h3 className="text-center text-success mt-5 text-bold">New Post</h3>
        <Form.Group controlId="formBasicName">
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
        <Form.Group controlId="exampleForm.ControlTextarea1" className=" my-4">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="tell us your mind"
            onChange={handleInput}
            value={input.text}
            name="text"
          />
        </Form.Group>

        <Button variant="success" type="submit" className="my-3">
          Create post
        </Button>
      </Form>
    </div>
  );
};

export default NewPost;
