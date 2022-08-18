import { AxiosError, AxiosInterceptorManager, AxiosRequestConfig } from 'axios';

export default function requestInterceptor(
  request: AxiosInterceptorManager<AxiosRequestConfig>,
) {
  request.use(
    (config) => config,
    (error: AxiosError) => error,
  );
}
