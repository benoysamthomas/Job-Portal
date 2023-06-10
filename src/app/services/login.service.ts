import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login = new BehaviorSubject(false)
  constructor(private router: Router) { }

  get currentLoginStatus$(){
    return this.login.asObservable();
  }

  userLogin(email:string, password:string|number){

    if(email==="johnsmith@gmail.com" && password==="john@123"){
      this.login.next(true);
    }

  }
  userLogout(){
    this.login.next(false);
    this.router.navigateByUrl('/login');
  }
}
