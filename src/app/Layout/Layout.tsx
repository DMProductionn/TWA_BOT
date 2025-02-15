import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Headers/header';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-full max-w-[1220px] mx-auto">
        <Header />
        <main
          className={
            location.pathname === '/'
              ? 'w-full max-w-[1220px] h-full min-h-[calc(100vh-85px)]'
              : 'max-w-[1220px] w-full px-[15px] flex-1 mx-auto min-h-[calc(100vh-85px)] mb-[100px]'
          }>
          <Outlet />
        </main>
      </div>
      {!location.pathname.includes('/preloader') && <Footer />}
    </>
  );
};

export default Layout;
