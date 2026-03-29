import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginSuccessGuard } from '@uoa/auth';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReturnToHubComponent } from '@shared/return-to-hub/return-to-hub.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [LoginSuccessGuard],
        component: ReturnToHubComponent
      },
      {
        path: 'service',
        canActivate: [AuthGuard],
        loadChildren: () => import('@modules/cer-services/cer-services.module').then((m) => m.CerServicesModule),
      },
      {
        path: 'notfound',
        component: PageNotFoundComponent
      },
      {
        path: 'error/:errorCode',
        loadChildren: () => import('./error-routing/error.routes').then((m) => m.errorRoutes),
      },
    ]
  },
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
