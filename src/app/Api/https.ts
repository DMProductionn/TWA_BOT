import axios from "axios";

const token = localStorage.getItem('token');
const https = axios.create({
  baseURL: 'https://paymentfreebot.onrender.com', 
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

export default https

// https://paymentfreebot.onrender.com
// http://localhost:8000