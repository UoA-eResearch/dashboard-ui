import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'dashboard/:userName',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'error/:errorCode',
    loadChildren: () => import('./error-routing/error-routing.module').then((m) => m.ErrorRoutingModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
