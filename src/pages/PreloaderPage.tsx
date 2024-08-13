import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {
  const [local, setLocal] = useState<string | null>();

  useEffect(() => {
    localStorage.setItem('lox', JSON.stringify(12345));
    const lox2 = localStorage.getItem('lox')
    setLocal(lox2)
}, []);


  return (
    <>
    <Preloader />
    <p>{local || 'иди нахуй'}</p>
    </>
  );
};

export default PreloaderPage;
