import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Headers/header';
import '../css/Layout/layout.css'

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="px-[15px]">
        <Header />
        <main
          className={
            location.pathname === '/deals' ||
            location.pathname === '/' ||
            location.pathname.includes('/preloader')
              ? 'w-full max-w-[1220px] h-[200px]'
              : 'overflow-hidden max-w-[1220px] w-full flex-1 bg-blue-medium rounded-[4px] mb-[25px] mx-auto relative'
          }>
          <div className='relative overflow-hidden layout__wrapper'>
            <Outlet />
          </div>
        </main>
      </div>
      {!location.pathname.includes('/preloader') && <Footer />}
    </>
  );
};

export default Layout;
