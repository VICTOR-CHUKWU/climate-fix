import { Route, Routes } from 'react-router-dom';
import SingleBlogPost from './components/blog/SingleBlogPost';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<SingleBlogPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
