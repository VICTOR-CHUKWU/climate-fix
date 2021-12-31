/* eslint-disable no-unused-vars */
import { Container, Row } from 'react-bootstrap';
import post from '../../data';

const HomeBlogs = () => (
  <Container className="post-slide">
    <div uk-slider="autoplay: true; autoplay-interval: 3000; finite: false; pause-on-hover: true; animation: kenburns;">
      <div className="uk-slider-container">
        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
          {
            post.map((posts) => {
              const {
                id, image, name, title, quote,
              } = posts;
              return (
                <li key={id} className="p-2">
                  <div className="slide-post-item shadow">
                    <img className="image-post-slide" src={image} alt={title} />
                    <p className="name-post-slide">{name}</p>
                    <p className="text-post-slide">

                      {quote.substring(0, 50)}
                      ...
                    </p>
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
