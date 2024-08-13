import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {
  const [local, setLocal] = useState<string | null>();

  useEffect(() => {
    const test = localStorage.getItem('k_build');
    setLocal(test)
}, []);


  return (
    <>
    <Preloader />
    <p>{local || 'иди нахуй'}</p>
    </>
  );
};

export default PreloaderPage;
