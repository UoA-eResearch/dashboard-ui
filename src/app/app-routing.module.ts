import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginSuccessGuard } from '@uoa/auth';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [LoginSuccessGuard],
        loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'my-projects',
        canActivate: [AuthGuard],
        loadChildren: () => import('@modules/my-projects/my-projects.module').then((m) => m.MyProjectsModule)
      },
      {
        path: 'my-services',
        canActivate: [AuthGuard],
        loadChildren: () => import('@modules/my-services/my-services.module').then((m) => m.MyServicesModule)
      },
      {
        path: 'help',
        loadChildren: () => import('@modules/help/help.module').then((m) => m.HelpModule)
      },
      {
        path: 'error/:errorCode',
        loadChildren: () => import('@modules/error-routing/error-routing.module').then((m) => m.ErrorRoutingModule),
      },
    ]
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: '**',
    redirectTo: '/', // TODO: create a page not found component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
