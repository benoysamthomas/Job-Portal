import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from,filter,tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!: FormGroup

get useEmail(){

  return this.loginform.get('email');
}
get password(){

  return this.loginform.get('password');
}
get isEmailValid(){

  return !this.loginform.get('email')?.valid && this.loginform.get('email')?.touched;
}
get isPasswordValid(){
  return !this.loginform.get('password')?.valid && this.loginform.get('password')?.touched;
}

constructor(private loginservice:LoginService, private router: Router){}
ngOnInit(){

  this.loginservice.currentLoginStatus$.pipe(
    filter(status=>!!status),
    tap(()=>this.router.navigateByUrl('/'))
  ).subscribe();
this.loginform = new FormGroup({
'email': new FormControl(null, [Validators.required, Validators.email]),
'password': new FormControl(null, [Validators.required])
})

}
onSubmit(){
//console.log(this.loginform.value)
const { email, password }= this.loginform.value;
this.loginservice.userLogin(email,password);

}
}
