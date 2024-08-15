import axios from "axios";

const https = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true
})

export default https