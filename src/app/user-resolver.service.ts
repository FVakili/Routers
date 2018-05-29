import { Injectable } from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {IUser} from './user';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserResolver implements Resolve<IUser> {

  constructor( private userService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    return this.userService.getuser(+route.params['id']);
  }
}
