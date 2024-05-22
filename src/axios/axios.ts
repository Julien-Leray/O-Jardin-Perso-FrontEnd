import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
});

export function addTokenJwtToAxiosInstance(token: string) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeTokenJwtFromAxiosInstance() {
  axiosInstance.defaults.headers.common.Authorization = '';
}

export default axiosInstance;
