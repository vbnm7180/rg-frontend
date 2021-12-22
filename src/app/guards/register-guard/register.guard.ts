import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor (
    private router: Router,
    private apiService: APIService,
    private spinnerService: SpinnerService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.spinnerService.showSpinner();

      return new Observable<boolean | UrlTree>(observable => {
      this.apiService.isAuthentificated().subscribe((isAuthentificated)=>{
        this.spinnerService.hideSpinner();
        if (isAuthentificated){
          observable.next(this.router.parseUrl('/account'));
        }
        else {
          observable.next(true);
        }
      });

    });

  }
  
}

