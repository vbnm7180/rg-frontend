import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APIService } from 'src/app/services/api-service/api-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {

  constructor(
    private router: Router,
    private apiService: APIService,
    private spinnerService: SpinnerService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.spinnerService.showSpinner();
    return this.apiService.isAuthentificated().pipe(
      map((response: any) => {
        console.log(response.isAuthentificated)
        if (response.isAuthentificated) {
          this.spinnerService.hideSpinner();
          return true;
        }
        else {
          this.spinnerService.hideSpinner();
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
