import { useQuery } from '@tanstack/react-query';
import followerServices from './follower.services';

export function useFollowerList(user: string) {
  return useQuery(['followers', user], () => followerServices.list(user));
}
