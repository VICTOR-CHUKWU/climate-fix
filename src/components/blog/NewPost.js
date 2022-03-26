/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NewPost = () => {
  const user = JSON.parse(window.localStorage.getItem('someRandomVitalData'));
  const { userId } = user?.mainUser || 0;
  const [input, setInput] = useState({
    title: '',
    description: '',
    picture: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const createNewPost = async (event) => {
    const { title, description } = input;
    try {
      if (title && description) {
        event.preventDefault();
        const data = await fetch(`https://climate-fix-backend.herokuapp.com/user/${userId}/posts`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            description,
            picture: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }),
        });
        return data.json();
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="my-2 post-new container min-height">
      <Form className="p-3 mx-3 form-new" onSubmit={createNewPost}>
        <h3 className="text-center text-success mt-5 text-bold">New Post</h3>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Title"
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
            placeholder="Tell us your mind"
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
