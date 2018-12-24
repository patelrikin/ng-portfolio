import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecretGuardService implements CanActivate {

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Do some business logic here, like is authenticated user (using injected service) or do user have valid role
    // Or is route param valid or may be initiate some call here and wait for it to return and
    // then return based on that in which case return signature of this function will become Observable
    console.log('Router State', state);
    const secretLinkURL = state.url;
    this._router.navigate(['notfound', 'secretlink']);
    console.warn('DEMO of CanActivate Route Guard:', secretLinkURL, 'redirected to /notfound');
    return false; // Because its secret
  }
}
