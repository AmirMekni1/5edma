import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-ajouterdemande',
  templateUrl: './ajouterdemande.component.html',
  styleUrls: ['./ajouterdemande.component.css']
})
export class AjouterdemandeComponent implements OnInit{
  ISuser: boolean = false;
  name:any;
  em:any
  myDate= Date.now();
    constructor(private MyService: ServicesService, private router: Router,private spinner:NgxSpinnerService) {
      this.MyService.user.subscribe(user => {
        if (user) {
          this.ISuser = true
          this.name=user.displayName
        } else {
          this.ISuser = false
          console.log(this.ISuser)
        }
      })
      this.em =this.MyService.id
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
    
    InsertOffre(form:{codeOffre:string,Username:string,Numero:number,Email: string,TitreOffre:string,Description:string,Image:string}){
      this.MyService.AddOffre(form,this.myDate)
    }
}
