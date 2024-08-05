import { Route } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToChat = () => redirectLoggedInTo(['chat']);

export const appRoutes: Route[] = [
  {
    path: 'login',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToChat },
    loadComponent: () =>
      import('./modules/authentication/presenter/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./layouts/layout.routes').then((r) => r.layoutRoutes),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
