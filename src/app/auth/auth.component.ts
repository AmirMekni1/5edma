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
  name: any;

  constructor(private route: Router,private spinner: NgxSpinnerService,private MyService:ServicesService) { 
    this.MyService.user.subscribe(user => {
      if (user) {
        this.ISuser = true
        this.MyService.setvalue(user.uid)
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
  }   

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    
   }
    
  


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------













  sign_in_btn: any
  sign_up_btn: any
  containers: any

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  anime() {

    this.sign_in_btn = document.querySelector("#sign-in-btn");
    this.sign_up_btn = document.querySelector("#sign-up-btn");
    this.containers = document.querySelector(".containers");

    this.sign_up_btn.addEventListener("click", () => {
      this.containers.classList.add("sign-up-mode");
    });

    this.sign_in_btn.addEventListener("click", () => {
      this.containers.classList.remove("sign-up-mode");
    });

  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  sign_in(log: { Email: string, Password: string }) {
    this.MyService.signIn(log.Email, log.Password)
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  sign_up(form:{Username:string,Numero:number,Email:string,Password:string}){
   this.MyService.SignUp(form.Email,form.Password);
   this.MyService.addClient(form);
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  SignInWithGoogle(){
    this.MyService.GoogleSignIn()
  }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
  SignInWithFacebook(){
    this.MyService.FacebookSignIn()
  }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




  









}



