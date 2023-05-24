import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
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
    
  }
  ngOnInit(): void {
  
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
