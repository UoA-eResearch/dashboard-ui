import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginSuccessGuard } from '@uoa/auth';
import { CoreComponent } from './core.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
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
        path: 'error/:errorCode',
        loadChildren: () => import('./error-routing/error-routing.module').then((m) => m.ErrorRoutingModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
