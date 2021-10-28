import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

  export class XsrfInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(reqest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        reqest = reqest.clone({ withCredentials: true });
        return next.handle(reqest);
    }

}
