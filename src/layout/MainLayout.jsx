import { Outlet } from 'react-router-dom';
import TopBar from '../components/top-bar/TopBar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Render TopBar in every page */}
      <TopBar />

      {/* Render children pages */}
      <main className="flex flex-1 bg-gray-100">
        <div className="w-full min-h-80">
          <Outlet />
        </div>
      </main>

      {/* Render Footer in every page */}
      <Footer />
    </div>
  );
};

export default MainLayout;
