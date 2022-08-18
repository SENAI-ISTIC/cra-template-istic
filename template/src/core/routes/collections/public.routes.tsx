import HomePage from '@/pages/Public/Home';
import LoginPage from '@/pages/Public/Login';
import { RouteProps } from 'react-router-context';
import { RouteParams } from '../types';

export default [
  { index: true, element: <HomePage /> },
  { path: 'login', element: <LoginPage /> },
] as RouteProps<RouteParams>[];
