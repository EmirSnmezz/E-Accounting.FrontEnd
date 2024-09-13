import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Router, RouterLink, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.IsThereToken().valueOf) {
      this._router.navigateByUrl("/login");
      return false;
    }

    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }

  IsThereToken() : boolean
  {
    if(localStorage.getItem("accessToken"))
    {
      return true;
    }

    return false;
  }
}

