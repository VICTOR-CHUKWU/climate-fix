/* eslint-disable no-unused-vars */
import { Container, Row } from 'react-bootstrap';
import { BsShareFill } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FaRegComment, FaChevronRight } from 'react-icons/fa';
import { posts } from '../../data';

const HomeBlogs = () => (
  <Container className="post-slide">
    <div uk-slider="autoplay: true; autoplay-interval: 3000; finite: false; pause-on-hover: true; animation: kenburns;">
      <div className="uk-slider-container">
        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
          {
            posts.map((posts) => {
              const {
                id, image, name, title, quote,
              } = posts;
              return (
                <li key={id} className="p-0 p-md-2">
                  <div className="slide-post-item shadow">
                    <Link to="/post" style={{ textDecoration: 'none' }}>
                      <img className="image-post-slide" src={image} alt={title} />
                      <p className="name-post-slide text-dark">{name}</p>
                      <p className="text-post-slide text-dark">

                        {quote.substring(0, 50)}
                        ...
                      </p>
                      <div className="d-flex align-items-center justify-content-between mx-4">
                        <div className="d-flex">
                          <BsShareFill className="text-success mx-2" />
                          <FcLike className="text-success mx-2" />
                          <FaRegComment className="text-success mx-2" />
                        </div>
                        <div className="text-success">
                          Read more
                          {' '}
                          <FaChevronRight className="text-success mx-2" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })
        }
        </ul>
      </div>

    </div>
  </Container>
);

export default HomeBlogs;
