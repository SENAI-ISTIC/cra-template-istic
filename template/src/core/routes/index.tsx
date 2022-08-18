import { LayoutConfig } from '@/components/Layout';
import { RouteProps } from 'react-router-context';
import defaultRoutes from './collections/default.routes';
import privateRoutes from './collections/private.routes';

// Routes
import publicRoutes from './collections/public.routes';
import { RouteParams } from './types';

export default [
  {
    path: '/',
    element: <LayoutConfig type="public" />,
    children: publicRoutes,
  },

  {
    path: 'app',
    element: <LayoutConfig type="private" />,
    children: privateRoutes,
  },

  ...defaultRoutes,
] as RouteProps<RouteParams>[];
