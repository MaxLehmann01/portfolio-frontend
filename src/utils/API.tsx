import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// API.interceptors.response.use(response => {
//     return response;
//   }, async (error) => {
//   const originalRequest = error.config;

//   if (error.response?.status === 401 && error.response?.data?.err === 'jwt-at' && !originalRequest._retry) {
//     originalRequest._retry = true;

//     try {
//       await API.post('/svc-auth/token', null, { withCredentials: true });
//       return axios(originalRequest);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   }

//   if (error.response?.status === 403 && error.response?.data?.err === 'jwt-verify' && !originalRequest._retry) {
//     originalRequest._retry = true;

//     try {
//       await API.post('/svc-auth/token', null, { withCredentials: true });
//       return axios(originalRequest);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   }
  
//   return Promise.reject(error);
// });

// eslint-disable-next-line react-refresh/only-export-components
export default API;