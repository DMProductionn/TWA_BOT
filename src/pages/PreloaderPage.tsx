import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';
import axios from 'axios';


const PreloaderPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://https://paymentfreebot.onrender.com/auth/webhook');

    ws.onmessage = (event) => {
        const newData = JSON.parse(event.data);
        console.log('Received data from websocket:', newData);
        setData(newData);
    };

    console.log(data);
    

    return () => {
        ws.close();
    };
}, []);


  return (
    <>
    <Preloader />
    </>
  );
};

export default PreloaderPage;
