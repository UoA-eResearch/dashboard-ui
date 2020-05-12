import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginSuccessGuard } from 'uoa-auth-angular';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'error/:errorCode',
    loadChildren: () => import('./error-routing/error-routing.module').then((m) => m.ErrorRoutingModule),
  },
  {
    path: 'home',
    canActivate: [LoginSuccessGuard],
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },  
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
