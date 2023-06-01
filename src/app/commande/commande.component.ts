import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  ISuser: boolean = false;

em:any
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
  }ngOnInit(): void {
  this.AllOffre();
  this.SetOffre()
  }

  loadingPage() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

  }
  SignOut(){
    this.MyService.Logout();
  }

  public Arraycommande: any = [];
  public ArraycommandeUser: any = [];
  AllOffre() {
    this.MyService.getCommande().subscribe(data => {
      this.Arraycommande = data.map(e => {
        const inf = e.payload.doc.data();
        return inf;
      })
    }, err => {
      return alert(window.alert(err))
    })
  }

SetOffre() {
    console.log(this.Arraycommande)
    for (let index = 0; index < this.Arraycommande.length; index++) {
      const element = this.Arraycommande[index];
      if(this.Arraycommande.Email==this.MyService.id)
   {
      console.log(this.Arraycommande.Email)
     this.ArraycommandeUser.Numero=this.Arraycommande.get('Numero')
     this.ArraycommandeUser.TitreOffre=this.Arraycommande.get('Titre')
     this.ArraycommandeUser.Image=this.Arraycommande.get('Image')
     this.ArraycommandeUser.Username=this.Arraycommande.get('Username')
     this.ArraycommandeUser.Description=this.Arraycommande.get('Description')
    }
  }
  console.log(this.Arraycommande)
}


}