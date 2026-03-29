import { Routes } from '@angular/router';
import { ErrorPage } from '@uoa/error-pages';

export const errorRoutes: Routes = [
  {
    path: '',
    component: ErrorPage,
  },
];
