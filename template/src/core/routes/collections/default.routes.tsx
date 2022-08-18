import Page404 from '@/pages/Default/Page404';
import { RouteProps } from 'react-router-context';

export default [{ path: '*', element: <Page404 /> }] as RouteProps[];
