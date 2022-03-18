import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { BsShareFill } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FaRegComment, FaChevronRight } from 'react-icons/fa';

const HomeBlogs = () => {
  const defaultImage = 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const api = await axios.get('https://climate-fix-backend.herokuapp.com/posts/');
      const response = api.data;
      console.log('response', response);
      setData(response);
    } catch (e) {
      throw e.toString();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="post-slide">
      <h2 className="text-center">Trending</h2>
      {
        Object.keys(data).length > 0 ? (
          <div uk-slider="autoplay: true; autoplay-interval: 3000; finite: false; pause-on-hover: true; animation: kenburns;">
            <div className="uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
                {
                data.slice(0, 5).map((posts) => {
                  const {
                    id, picture, description, title,
                  } = posts.post;
                  const {
                    name,
                  } = posts.user;
                  return (
                    <li key={id} className="p-0 p-md-2">
                      <div className="slide-post-item shadow">
                        <img className="image-post-slide" src={picture || defaultImage} alt={title} />
                        <p className="name-post-slide text-dark">{name}</p>
                        <p className="text-post-slide text-dark">

                          {description.substring(0, 50)}
                          ...
                        </p>
                        <div className="d-flex align-items-center justify-content-between mx-4">
                          <div className="d-flex">
                            <BsShareFill className="text-success mx-2" />
                            <FcLike className="text-success mx-2" />
                            <FaRegComment className="text-success mx-2" />
                          </div>
                          <Link to={`posts/${id}`} style={{ textDecoration: 'none' }}>
                            Read more
                            {' '}
                            <FaChevronRight className="text-success mx-2" />
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })
              }
              </ul>
            </div>

          </div>
        )
          : <h2>Loading Trending Posts</h2>
      }
    </Container>
  );
};

export default HomeBlogs;
