import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent implements OnInit {
  ISuser: boolean = false;
  name=this.MyService.getUserName()  
em:any
dateOffre:any
  myDate= Date.now();

  constructor(private MyService: ServicesService, private router: Router,private spinner:NgxSpinnerService) {
    this.MyService.user.subscribe(user => {
      if (user) {
        this.ISuser = true
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
    this.em =this.MyService.id
  }
  
  
  ngOnInit(): void {
 this.MyService.getUserName() 
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
  
  InsertOffre(form:{codeOffre:string,Email:string,Username:string,Numero:number,TitreOffre:string,Description:string,Image:string}){
   
    console.log(this.myDate)
    this.MyService.AddOffre(form,this.myDate,this.MyService.id,this.name)
    this.router.navigate(['/Demande'])
   
  }
  
  
}