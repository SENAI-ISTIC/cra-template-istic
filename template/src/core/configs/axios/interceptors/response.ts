import { AxiosError, AxiosInterceptorManager, AxiosResponse } from 'axios';

export default function responseInterceptor(
  response: AxiosInterceptorManager<AxiosResponse>,
) {
  response.use(
    (config) => config,
    (error: AxiosError) => error,
  );
}
