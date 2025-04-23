import { lazy } from 'react';

export const pageRoutes = [
  {
    path: '/',
    component: lazy(() =>
      import('../src/components/LandingPageComponent').then((m) => ({
        default: m.LandingPageComponent,
      }))
    ),
  },
  {
    path: '/signup',
    component: lazy(() =>
      import('../src/components/LoginPage').then((m) => ({ default: m.LoginPage }))
    ),
  },
];
