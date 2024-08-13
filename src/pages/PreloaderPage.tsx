import { useEffect } from 'react';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {


  useEffect(() => {
   const test = localStorage.getItem('user_auth')
   console.log(test);
   
  }, [])

  return (
    <Preloader />
  );
};

export default PreloaderPage;
