import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  //______________________________________________________________________________________________________
  ArrayClient = {
    Username:'',
    Numero:'',
    Email:'',
    Password:''
  };
  ISuser: boolean = false;
  id:any;
  name:any;
    //______________________________________________________________________________________________________

  constructor(private MyService: ServicesService, private router: Router,private spinner: NgxSpinnerService) {
    this.MyService.user.subscribe(user => {
      if (user) {
        this.ISuser = true
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
    this.name=this.MyService.id
  } 
  //______________________________________________________________________________________________________
  ngOnInit(): void {  
    
    this.SetClient()}
  //______________________________________________________________________________________________________

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

    //______________________________________________________________________________________________________

  SignOut(){
    this.MyService.Logout();
  }
  //______________________________________________________________________________________________________

 
 

  SetClient() {
    console.log(this.MyService.id)
    this.MyService.getuser(this.MyService.id).then(data => {
     this. ArrayClient.Email=data.get('Email')
     this. ArrayClient.Numero=data.get('Numero')
     this. ArrayClient.Password=data.get('Password')
     this. ArrayClient.Username=data.get('Username')
  })
}
 //____________________________________________________________________________________________________________

UpdateProfile(form:{Username:string,Numero:number,Email:string,Password:string}){
  this.MyService.update(form)
}

}

