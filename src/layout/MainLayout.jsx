import { Outlet } from 'react-router-dom';
import TopBar from '../components/top-bar/TopBar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
  return (
    <>
      {/* Render TopBar in every page */}
      <TopBar />

      {/* Render children pages */}
      <main>
        <Outlet />
      </main>

      {/* Render Footer in every page */}
      <Footer />
    </>
  );
};

export default MainLayout;
