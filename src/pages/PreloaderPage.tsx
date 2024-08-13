import { useNavigate } from 'react-router-dom';
import Preloader from '../shared/Preloader';


const PreloaderPage = () => {
  const navigate = useNavigate();


  return (
    <>
    <button onClick={() => navigate('/deals')}>клик</button>
    <Preloader />
    </>
  );
};

export default PreloaderPage;
