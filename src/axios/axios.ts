import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  // baseURL: 'http://ns381313.ip-94-23-250.eu:4000/',
});

export function addTokenToAxiosInstance(token: string) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeTokenJwtFromAxiosInstance() {
  axiosInstance.defaults.headers.common.Authorization = '';
}

export default axiosInstance;
