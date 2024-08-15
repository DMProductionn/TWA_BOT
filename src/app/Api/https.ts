import axios from "axios";

const https = axios.create({
  baseURL: 'https://paymentfreebot.onrender.com',
  withCredentials: true
})

export default https