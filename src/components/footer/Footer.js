import {
  Container, Row, Col,
} from 'react-bootstrap';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <Container fluid className="py-3 shadow bg-white mt-3">
    <Row className="d-flex justify-content-between align-items-center mx-0 mx-md-5">
      <Col xs={6} md={4} className="mt-2">
        <h4>climate fix</h4>
      </Col>
      <Col xs={6} md={4} className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <AiOutlineMail className="mx-2" />
          <AiOutlineInstagram className="mx-2" />
          <AiOutlineTwitter className="mx-2" />
          <FaFacebookF className="mx-2" />
        </div>
      </Col>
      <Col xs={6} md={4} className="d-flex justify-content-center">
        <div className="d-flex">
          <span className="mx-2 text-success">FAQs</span>
          <span className="mx-2 text-success">Privacy Policy</span>
          <span className="mx-2 text-success">2020 climateFix</span>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Footer;