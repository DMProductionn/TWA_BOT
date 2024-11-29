import axios from 'axios';

const https = axios.create({
  baseURL: 'https://paymentfreebot.onrender.com',
});

https.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default https;

// https://paymentfreebot.onrender.com
// http://localhost:8000
