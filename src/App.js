import { Route, Routes, Outlet } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SingleBlogPost from './components/blog/SingleBlogPost';
import AllBlog from './components/blog/AllBlog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import VolunteerMain from './components/vounteer/VolunteerMain';

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
          <Route path="/post" element={<SingleBlogPost />} />
          <Route path="/posts" element={<AllBlog />} />
          <Route path="/volunteer" element={<VolunteerMain />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
