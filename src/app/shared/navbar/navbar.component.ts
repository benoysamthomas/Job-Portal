import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable, map,tap} from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentLoginStatus$! : Observable<boolean>
  navbarOpen = false;
  constructor(private loginservice:LoginService){}
ngOnInit(){
  this.currentLoginStatus$= this.loginservice.currentLoginStatus$;

}
  toggleNavArrow(){
    const navCollapseId= document.getElementById('collapse-ul');
    if(this.navbarOpen==false){
      navCollapseId?.classList.remove('collapsed');
    }else{
      navCollapseId?.classList.add('collapsed');
      navCollapseId?.classList.add('active');
    }
    this.navbarOpen = !this.navbarOpen;
  }
  toggleNav(){
   // console.log("clicked");
   const bodyElement = document.body;
   bodyElement.classList.add("offcanvas-menu");

  }
  toggleNavClose(){
    const bodyElement = document.body;
   bodyElement.classList.remove("offcanvas-menu");
  }
  logout(){
    this.loginservice.userLogout();

  }
}
