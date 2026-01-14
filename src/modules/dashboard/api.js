import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_CFTB}/api/users`,

});

// Add JWT token to requests
API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
