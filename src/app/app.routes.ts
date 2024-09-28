import { Routes } from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    // canActivate: [authGuard]
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pages/consultation/consultation.module').then(m => m.ConsultationModule),
    // canActivate: [authGuard]
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./pages/scheduling/scheduling.module').then(m => m.SchedulingModule),
    // canActivate: [authGuard]
  }
];
