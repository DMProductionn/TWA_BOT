import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Headers/header';

const Layout = () => {

  const location = useLocation();

  return (
    <>
      <div className="px-[15px] pb-[70px]">
        <Header />
        <main className={location.pathname === '/deals' || location.pathname === '/' ? 'w-full relative mb-[25px]' : 'max-w-[1220px] w-full h-[600px] bg-blue-medium rounded-[4px] mb-[25px] mx-auto relative'}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
