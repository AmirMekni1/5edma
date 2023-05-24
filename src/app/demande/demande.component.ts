import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  ISuser: boolean = false;
name:any;

  constructor(private MyService: ServicesService, private router: Router,private spinner: NgxSpinnerService) {
    this.MyService.user.subscribe(user => {
      if (user) {
        this.ISuser = true
        this.name=user.displayName
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
    
  }ngOnInit(): void {
  
  }

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }

  SignOut(){
    this.MyService.Logout();
  }
}
