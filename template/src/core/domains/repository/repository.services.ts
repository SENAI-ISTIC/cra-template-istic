import axiosInstance, { SERVICE_BASE_URL } from '@/core/configs/axios';
import { Repository } from './repository.types';

const URL_CONTROLER = `${SERVICE_BASE_URL}/users`;

export default {
  async list(user: string) {
    const result = await axiosInstance.get<Repository[]>(
      `${URL_CONTROLER}/${user}/repos`,
    );

    return result.data;
  },
};
