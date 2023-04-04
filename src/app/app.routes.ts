import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'pregunta1',
    loadComponent: () => import('./pages/encuestas/pregunta1/pregunta1.page').then( m => m.Pregunta1Page)
  },
  {
    path: 'pregunta2',
    loadComponent: () => import('./pages/encuestas/pregunta2/pregunta2.page').then( m => m.Pregunta2Page)
  },
  {
    path: 'pregunta3',
    loadComponent: () => import('./pages/encuestas/pregunta3/pregunta3.page').then( m => m.Pregunta3Page)
  },
  {
    path: 'pregunta4',
    loadComponent: () => import('./pages/encuestas/pregunta4/pregunta4.page').then( m => m.Pregunta4Page)
  },
  {
    path: 'pregunta5',
    loadComponent: () => import('./pages/encuestas/pregunta5/pregunta5.page').then( m => m.Pregunta5Page)
  },
  {
    path: 'pregunta6',
    loadComponent: () => import('./pages/encuestas/pregunta6/pregunta6.page').then( m => m.Pregunta6Page)
  },
];
