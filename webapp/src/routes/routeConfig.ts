import ApiDoc from '@/pages/ApiDoc';
import Home from '@/pages/Home';
import MapPage from '@/pages/MapPage';
import NotFound from '@/pages/NotFound';
import type { Route } from './type';

export const routeConfig: Route[] = [
  {
    path: '/',
    component: Home,
    isProtected: false,
  },
  {
    path: '/map',
    component: MapPage,
    isProtected: false,
  },
  {
    path: 'docs',
    component: ApiDoc,
    isProtected: false
  },
  {
    path: '*',
    component: NotFound,
    isProtected: false,
  }
];