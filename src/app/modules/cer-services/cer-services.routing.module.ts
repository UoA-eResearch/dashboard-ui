import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { confirmDeactivateGuard } from '@app/guard/confirm-deactivate.guard';
import { RequestStorageComponent } from './request-storage/request-storage.component';
import { LoginSuccessGuard } from '@uoa/auth';
import { PageNotFoundComponent } from '@shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [LoginSuccessGuard],
        component: PageNotFoundComponent,
      },
      {
        path: 'research-storage/request',
        component: RequestStorageComponent,
        canDeactivate: [confirmDeactivateGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerServiceRoutingModule { }
