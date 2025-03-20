import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Headers/header';
import { motion } from 'motion/react';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <motion.div
        key={location.pathname} // уникальный ключ для каждого перехода
        initial={{ opacity: 0, scale: 0.95 }} // начальная анимация (прозрачность и масштаб)
        animate={{ opacity: 1, scale: 1 }} // анимация появления (полная прозрачность и масштаб)
        exit={{ opacity: 0, scale: 0.95 }} // анимация исчезновения (прозрачность и масштаб)
        transition={{
          type: 'spring', // плавная анимация с эффектом пружины
          stiffness: 300, // жесткость пружины
          damping: 30, // демпфирование пружины
          duration: 0.4, // продолжительность анимации
        }}>
        <>
          <Header />
          <main
            className={
              location.pathname === '/'
                ? 'w-full max-w-[1220px] h-full min-h-[calc(100vh-85px)]'
                : 'max-w-[1220px] w-full px-[15px] flex-1 mx-auto min-h-full mb-[100px]'
            }>
            <Outlet />
          </main>
        </>
      </motion.div>
      {!location.pathname.includes('/preloader') && <Footer />}
    </>
  );
};

export default Layout;
