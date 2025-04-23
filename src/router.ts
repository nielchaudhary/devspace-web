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
    path: '/welcome',
    component: lazy(() =>
      import('./components/login-flow/Welcome').then((m) => ({ default: m.WelcomePage }))
    ),
  },
  // {
  //   path: '/signup',
  //   component: lazy(() =>
  //     import('./components/login-flow/SignIn').then((m) => ({ default: m.SignInPage }))
  //   ),
  // },
];
