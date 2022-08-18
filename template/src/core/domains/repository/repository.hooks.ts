import { useQuery } from '@tanstack/react-query';
import repositoryServices from './repository.services';

export function useRepositoryList(user: string) {
  return useQuery(['repositories', user], () => repositoryServices.list(user));
}
