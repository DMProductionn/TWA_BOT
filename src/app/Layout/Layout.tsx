import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Headers/header';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="px-[15px] pb-[70px] flex flex-col min-h-screen">
        <Header />
        <main
          className={
            location.pathname === '/deals' ||
            location.pathname === '/' ||
            location.pathname.includes('/preloader')
              ? 'w-full max-w-[1220px] relative flex-1 overflow-hidden'
              : 'overflow-hidden max-w-[1220px] w-full flex-1 bg-blue-medium rounded-[4px] mb-[25px] mx-auto relative'
          }>
          <div className='mb-[25px]'>
            <Outlet />
          </div>
        </main>
      </div>
      {!location.pathname.includes('/preloader') && <Footer />}
    </>
  );
};

export default Layout;
