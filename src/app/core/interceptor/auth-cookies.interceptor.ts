import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthCookiesInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('authorize')) {
      try {
        // try to clear the users cookies before attempting auth
        // mitigation for 431 http error
        this.clearCookies();
      } catch {}
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }

  private clearCookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        var p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        };
        d.shift();
      }
    }
  }
}
