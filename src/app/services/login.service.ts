import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable,map,tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login = new BehaviorSubject(false)
  constructor(private router: Router, private http:HttpClient) { }

  get currentLoginStatus$(){
    return this.login.asObservable();
  }

  userLogin(email:string, password:string|number): Observable<any>{
    return this.http.get("https://jobportal-3b9d6-default-rtdb.firebaseio.com/users.json").pipe(

      map(responseObj =>{
        const resultarr=[];
        const objectresponse = responseObj as any[]
        for(let item in objectresponse){
          if(objectresponse[item].username===email && objectresponse[item].password===password){
            this.login.next(true);
            resultarr.push({...objectresponse[item],id:item})
          }
        }
        //console.log(resultarr);
        return resultarr;
      })
    )


    if(email==="johnsmith@gmail.com" && password==="john@123"){
      this.login.next(true);

    }

  }
  userLogout(){
    this.login.next(false);
    this.router.navigateByUrl('/login');
  }

  saveUserDetails(userdata: any): Observable<any>{
    console.log("Sending:", userdata)
    return this.http.post(`https://jobportal-3b9d6-default-rtdb.firebaseio.com/users.json`, userdata)
  }
}
