import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { take,tap} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signupform!: FormGroup
get useEmail(){

  return this.signupform.get('username');
}
get useFullname(){

  return this.signupform.get('fullname');
}
get password(){

  return this.signupform.get('password');
}
get isFullNameValid(){

  return !this.signupform.get('fullname')?.valid && this.signupform.get('fullname')?.touched;
}
get isEmailValid(){

  return !this.signupform.get('username')?.valid && this.signupform.get('username')?.touched;
}
get isPasswordValid(){
  return !this.signupform.get('password')?.valid && this.signupform.get('password')?.touched;
}

constructor(private loginservice:LoginService, private router: Router){}
ngOnInit(){
  this.signupform = new FormGroup({
    'fullname': new FormControl(null, [Validators.required]),
    'username': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required])
    })

}
onSubmit(){
  console.log(this.signupform.value)
  //const { fullname, username, password }= this.signupform.value;
  //this.loginservice.userLogin(email,password);
  this.loginservice.saveUserDetails(this.signupform.value).pipe(
    take(1),
    tap(() => {
      this.router.navigateByUrl('/login')
    })
  ).subscribe();
  }
}
