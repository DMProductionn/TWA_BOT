import axios from "axios";

const https = axios.create({
  baseURL: 'https://paymentfreebot.onrender.com', 
  withCredentials: true,
  headers: {
    'Authorization': `${localStorage.getItem('token')}`
  }
})

export default https

// https://paymentfreebot.onrender.com
// http://localhost:8000