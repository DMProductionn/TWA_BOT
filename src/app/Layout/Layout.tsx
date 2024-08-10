import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Headers/header';

const Layout = () => {
  return (
    <>
      <div className="px-[15px] pb-[70px]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
