import { UserService } from './../../services/user/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  public shared: SharedService;

  constructor(private userService: UserService,
              private router: Router) {
                this.shared = SharedService.getInstance();
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.shared.isLoggedIn()){
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
