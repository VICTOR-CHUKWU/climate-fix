import { HiRefresh } from 'react-icons/hi';
import HomeBlogs from './HomeBlogs';
import WeatherMain from './WeatherMain';

const refresh = () => {
  window.location.reload();
};

const Home = () => (
  <>
    <div className="mt-1 refresh">
      <button type="button" className="btn-primary" onClick={refresh}>
        <HiRefresh />
      </button>
    </div>
    <div className="min-height">
      <WeatherMain />
      <HomeBlogs />
    </div>
  </>
);

export default Home;
