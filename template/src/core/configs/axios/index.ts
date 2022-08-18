import axios from 'axios';
import axiosInterceptors from './interceptors';

export const SERVICE_BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({ baseURL: SERVICE_BASE_URL });

axiosInterceptors(axiosInstance);

export default axiosInstance;
