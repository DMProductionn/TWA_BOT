import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {
  const [local, setLocal] = useState<string | null>();

  useEffect(() => {
    const lox = localStorage.setItem('lox', JSON.stringify(12345));
    const lox2 = localStorage.gerItem('lox')
    const test = localStorage.getItem('k_build');
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
