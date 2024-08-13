import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('https://paymentfreebot.onrender.com/auth/webhook');

    ws.onopen = () => {
      console.log('WebSocket connection opened');
  };

    ws.onmessage = (event) => {
        const newData = JSON.parse(event.data);
        console.log('Received data from websocket:', newData);
        setData(newData);
        console.log(data);
    };

    ws.onerror = (event) => {
      console.error('WebSocket error observed:', event);
    };

    console.log(data);
    

    // return () => {
    //     ws.close();
    // };
}, []);


  return (
    <>
    <Preloader />
    </>
  );
};

export default PreloaderPage;
