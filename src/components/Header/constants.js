import Home from '../../pages';
import Certificates from '../../pages/certificates';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/certificates',
    name: 'Certificados',
    component: Certificates,
  },
];
