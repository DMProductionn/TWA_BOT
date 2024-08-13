import { useEffect } from 'react';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {


  useEffect(() => {
   const test = localStorage.getItem('user_auth')
   const test2 = localStorage.getItem('dc3_server_salt')
   console.log(test);
   console.log(test2);
   
   
  }, [])

  return (
    <Preloader />
  );
};

export default PreloaderPage;
