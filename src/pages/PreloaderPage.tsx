import { useEffect } from 'react';
import Preloader from '../shared/Preloader';
import axios from 'axios';


const PreloaderPage = () => {

  useEffect(() => {
    const test = async () => {
      const data = await axios.post('https://paymentfreebot.onrender.com/auth/webhook')
      console.log(data);
    }

    test();
  }, [])
  

  return (
    <>
    <Preloader />
    </>
  );
};

export default PreloaderPage;
