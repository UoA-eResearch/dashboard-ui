import { bootstrapApplication } from "@angular/platform-browser";
import { AppModule } from './app/app.module';
import { provideErrorPages } from '@uoa/error-pages';

bootstrapApplication(AppModule, {
  providers: [
    provideErrorPages()
  ]
}).catch(err => console.error(err));
