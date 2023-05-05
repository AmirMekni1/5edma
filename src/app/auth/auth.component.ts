import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  implements OnInit {

  ISuser: boolean = false;

  constructor(private route: Router,private spinner: NgxSpinnerService,private MyService:ServicesService) { 

    this.MyService.user.subscribe(user => {
      if (user) {
        this.ISuser = true
        console.log(this.ISuser)
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
   }

  //-------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    
  }


//-------------------------------------------------------------------------------------------------------------------


  sign_in_btn: any
  sign_up_btn: any
  container: any

//-------------------------------------------------------------------------------------------------------------------

  anime() {

    this.sign_in_btn = document.querySelector("#sign-in-btn");
    this.sign_up_btn = document.querySelector("#sign-up-btn");
    this.container = document.querySelector(".container");

    this.sign_up_btn.addEventListener("click", () => {
      this.container.classList.add("sign-up-mode");
    });

    this.sign_in_btn.addEventListener("click", () => {
      this.container.classList.remove("sign-up-mode");
    });

  }

//-------------------------------------------------------------------------------------------------------------------

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    

  }

  connexion(log: { Username: string, Password: string }) {
    console.log(log.Username)
    this.MyService.signIn(log.Username, log.Password)
  }









}




