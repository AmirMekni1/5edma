import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit{

  ISuser: boolean = false;
  name:any;
  e:any;

  constructor(private myservice:ServicesService,private spinner: NgxSpinnerService,private route:Router){ 
    this.e=this.myservice.id;
    this.myservice.user.subscribe(user => {
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
   this.AllOffre()
  }
  public ArrayOffres: any = [];
  AllOffre() {
    this.myservice.getOffres().subscribe(data => {
      this.ArrayOffres = data.map(e => {
        const inf = e.payload.doc.data();
        return inf;
      })
    }, err => {
      return alert(window.alert(err))
    })
  }

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }

  SignOut(){
    this.myservice.Logout();
  }

  DeleteOffre(p:any){
    this.myservice.delete(p);
  }

  getIndice(i:any){
    this.myservice.setCodeOffre(i)
    this.route.navigate(['/Modifier'])
  }

}
