import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginSuccessGuard } from '@uoa/auth';
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
    path: 'my-projects',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/my-projects/my-projects.module').then((m) => m.MyProjectsModule)
  },
  {
    path: 'my-services',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/my-services/my-services.module').then((m) => m.MyServicesModule)
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
