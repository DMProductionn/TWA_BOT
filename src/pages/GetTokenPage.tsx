import { useNavigate } from 'react-router-dom';
import https from '../app/Api/https';
import Preloader from '../shared/Preloader';

const GetTokenPage = () => {
  const navigate = useNavigate();

  const eventSource = new EventSource(`${https.defaults.baseURL}/stream-sse`);
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    localStorage.setItem('token', data.data);
    
    if (localStorage.getItem('token') && data.data) {
      navigate('/preloader');
    }
  };

  eventSource.onerror = () => {
    eventSource.close();
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center fixed">
      <Preloader />
    </div>
  );
};

export default GetTokenPage;
