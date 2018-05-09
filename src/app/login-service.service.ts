import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';

@Injectable()
export class LoginService {

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(this.loggedIn);
          }
          , 1000);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
  // constructor() { }

}
