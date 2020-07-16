import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginSuccessGuard } from '@uoa/auth';
// import { CoreComponent } from './core/core.component';


const routes: Routes = [
  // {
  //   path: '',
  //   // redirectTo: 'home',
  //   pathMatch: 'full',
  //   canActivate: [LoginSuccessGuard],
  //   component: CoreComponent
  // },
  {
    path: '**',
    redirectTo: '/', //TODO: create a page not found component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
