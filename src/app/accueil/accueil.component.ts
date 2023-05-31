import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public ArrayStudent: any = [];
  ISuser: boolean = false;
 

  constructor(private MyService: ServicesService, private router: Router,private spinner: NgxSpinnerService,private signInCompte: AngularFireAuth) {
    console.log( this.signInCompte.getRedirectResult)
    this.MyService.user.subscribe(user => {
      if (user) {
     
        this.ISuser = true
        console.log(user)
        
        console.log(user.email)
        console.log(this.MyService.nameAfficher);
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
    
  } 

  ngOnInit(): void {this.getusername(); }


  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

  }
  SignOut(){
    this.MyService.Logout();
    this.MyService.id="";
  }

  public name='';
  getusername(){
this.MyService.getuser(this.MyService.id).then(data=>{
this.name=data.get("Username");
this.MyService.setUserName(this.name)
})
console.log(this.name)
  }
}