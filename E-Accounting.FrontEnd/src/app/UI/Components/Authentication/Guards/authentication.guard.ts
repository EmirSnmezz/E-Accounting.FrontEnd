import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Router, RouterLink, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate, CanActivateChild {
  isBrowser : boolean ;
  token;
  state: boolean = false;
  constructor(private _router: Router, @Inject(PLATFORM_ID) private _platformId) 
  {
    if(isPlatformBrowser(_platformId))
    {
      this.isBrowser = true;
      this.token = localStorage.getItem("accessToken");
    }
    else{
      this.isBrowser = false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.isBrowser)
    {
      if (this.token == null) {
        this._router.navigateByUrl("/login");
        return this.state;
      }
    }
  this.state = true;
  return this.state;

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }
}

