import {
  Container, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import logo from '../../images/logo.jpeg';

const Footer = () => (
  <Container fluid className="py-3 shadow bg-white footer">
    <Row className="d-flex justify-content-between align-items-center mx-0 mx-md-5">
      <Col xs={6} lg={4} className="mt-2">
        <Link to="/" style={{ textDecoration: 'none' }}>
          {' '}
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </Col>
      <Col xs={6} lg={4} className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <AiOutlineMail className="mx-2 text-success" />
          <AiOutlineInstagram className="mx-2 text-success" />
          <AiOutlineTwitter className="mx-2 text-success" />
          <FaFacebookF className="mx-2 text-success" />
        </div>
      </Col>
      <Col xs={12} lg={4} className="d-flex justify-content-center">
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
