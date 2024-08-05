import { Route } from '@angular/router';

export const layoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'chat',
        loadComponent: () => import('../modules/chat/presenter/chat.component').then((c) => c.ChatComponent),
      },
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full',
      },
    ],
  },
];
