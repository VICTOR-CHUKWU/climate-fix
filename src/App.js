import { Route, Routes, Outlet } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SingleBlogPost from './components/blog/SingleBlogPost';
import AllBlog from './components/blog/AllBlog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import VolunteerMain from './components/vounteer/VolunteerMain';
import NewPost from './components/blog/NewPost';

const HeaderFooter = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<SingleBlogPost />} />
          <Route path="/posts" element={<AllBlog />} />
          <Route path="/volunteer" element={<VolunteerMain />} />
          <Route path="/newpost" element={<NewPost />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
