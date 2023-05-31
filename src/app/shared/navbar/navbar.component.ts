import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarOpen = false;

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
}
