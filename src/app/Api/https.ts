import axios from "axios";

const https = axios.create({
  baseURL: 'http://localhost:8000', 
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5Njg2NTg1NTQifQ.P57B4IgT6OVPYfwgT2apu7B6B2TFW_5i31glrKjXHRw`
  }
})

export default https

// https://paymentfreebot.onrender.com
// http://localhost:8000