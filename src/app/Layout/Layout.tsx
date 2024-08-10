import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Headers/header';

const Layout = () => {
  return (
    <>
      <div className="px-[15px] pb-[70px]">
        <Header />
        <main className='max-w-[1220px] w-full mx-auto px-[20px] relative'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
