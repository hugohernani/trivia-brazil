import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent } from '../components/index';
import { AuthGuard } from '../core/services';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'questions',
    loadChildren: 'app/questions/questions.module#QuestionsModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];
