import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Получите token из URL
    const token = window.location.pathname.split('/')[2]; // предполагается, что token всегда будет вторым элементом

    if (token) {
      navigate(`/token/${token}`); // редирект на /token/:token
    }
  }, [navigate]);

  return null; // ничего не рендерим
};

export default RedirectToToken;