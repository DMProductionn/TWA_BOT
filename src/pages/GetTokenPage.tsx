import { useNavigate } from 'react-router-dom';
import PreloaderPage from './PreloaderPage';

const GetTokenPage = () => {
  const navigate = useNavigate();

  const eventSource = new EventSource('https://paymentfreebot.onrender.com/stream-sse');
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    localStorage.setItem('token', data.data);
    
    if (localStorage.getItem('token') && data.data) {
      window.location.reload();
      navigate('/preloader');
    }
  };

  eventSource.onerror = () => {
    eventSource.close();
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center fixed">
      <PreloaderPage />
    </div>
  );
};

export default GetTokenPage;
