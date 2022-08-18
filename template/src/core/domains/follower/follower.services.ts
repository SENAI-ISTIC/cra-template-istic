import axiosInstance, { SERVICE_BASE_URL } from '@/core/configs/axios';
import { Follower } from './follower.types';

const URL_CONTROLER = `${SERVICE_BASE_URL}/users`;

export default {
  async list(user: string) {
    const result = await axiosInstance.get<Follower[]>(
      `${URL_CONTROLER}/${user}/followers`,
    );

    return result.data;
  },
};
