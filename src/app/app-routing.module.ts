import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginSuccessGuard } from '@uoa/auth';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReturnToHubComponent } from '@shared/return-to-hub/return-to-hub.component';


/*********************************************************
  Some routes temporarily deactivated for Dashboard MVP1
*********************************************************/

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [LoginSuccessGuard],
        // loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
        component: ReturnToHubComponent
      },
      // {
      //   path: 'my-projects',
      //   canActivate: [AuthGuard],
      //   loadChildren: () => import('@modules/my-projects/my-projects.module').then((m) => m.MyProjectsModule)
      // },
      // {
      //   path: 'my-services',
      //   canActivate: [AuthGuard],
      //   loadChildren: () => import('@modules/my-services/my-services.module').then((m) => m.MyServicesModule)
      // },
      // {
      //   path: 'project',
      //   canActivate: [AuthGuard],
      //   loadChildren: () => import('@modules/cer-projects/cer-projects.module').then((m) => m.CerProjectsModule)
      // },
      {
        path: 'service',
        canActivate: [AuthGuard],
        loadChildren: () => import('@modules/cer-services/cer-services.module').then((m) => m.CerServicesModule),
      },
      // {
      //   path: 'help',
      //   loadChildren: () => import('@modules/help/help.module').then((m) => m.HelpModule)
      // },
      {
        path: 'notfound',
        component: PageNotFoundComponent
      },
      {
        path: 'error/:errorCode',
        loadChildren: () => import('@modules/error-routing/error-routing.module').then((m) => m.ErrorRoutingModule),
      },
    ]
  },  
  // {
  //   path: 'home',
  //   redirectTo: '/'
  // },
  {
    path: '**',
    redirectTo: '/notfound'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
