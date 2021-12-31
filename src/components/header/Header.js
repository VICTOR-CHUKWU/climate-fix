import { AppProvider } from './HeaderContext';
import MainHead from './MainHead';
import SideBar from './SideBar';

const Header = () => (
  <>
    <AppProvider>
      <MainHead />
      <SideBar />
    </AppProvider>
  </>
);

export default Header;
