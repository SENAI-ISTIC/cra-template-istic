import FallowersPage from '@/pages/Private/Fallowers';
import RepositoriesPage from '@/pages/Private/Repositories';
import { RouteProps } from 'react-router-context';
import { RiGitRepositoryLine, RiGroupLine } from 'react-icons/ri';
import { RouteParams } from '../types';

export default [
  {
    index: true,
    element: <RepositoriesPage />,
    params: { hidden: false },
  },
  {
    path: 'repositories',
    element: <RepositoriesPage />,
    params: { title: 'Repositórios', icon: <RiGitRepositoryLine /> },
  },
  {
    path: 'followers',
    element: <FallowersPage />,
    params: { title: 'Seguidores', icon: <RiGroupLine /> },
  },
] as RouteProps<RouteParams>[];
