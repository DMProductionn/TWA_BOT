import axios from "axios";

const https = axios.create({
  baseURL: 'http://localhost:8000', 
  withCredentials: true,
  headers: {
    'Authorization': localStorage.getItem('token')
  }
})

export default https

// https://paymentfreebot.onrender.com