import { Form, Button } from 'react-bootstrap';

const VolunteerForm = () => (
  <Form className="form-volunteer">
    <h3 className="text-center text-success mt-5 text-bold">Become a Part of This Project</h3>
    <Form.Group controlId="formBasicName">
      <Form.Label>name</Form.Label>
      <Form.Control type="text" placeholder="name" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Button variant="success" type="submit" className="my-3">
      Volunteer
    </Button>
  </Form>
);

export default VolunteerForm;
