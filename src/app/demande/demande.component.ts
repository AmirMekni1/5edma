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
  name=this.myservice.getUserName() 
  e:any;

  constructor(private myservice:ServicesService,private spinner: NgxSpinnerService,private route : Router){ 
    this.e=this.myservice.id;
    this.myservice.user.subscribe(user => {
      if (user) {
        this.ISuser = true
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
   }
  ngOnInit(): void {
   this.AllOffre()
this.myservice.getUserName() 
  }
  public ArrayDemandeTous: any = [];
  AllOffre() {
    this.myservice.getOffres().subscribe(data => {
      this.ArrayDemandeTous = data.map(e => {
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
  }
  ArrayDemande = {
    Username:'',
    Numero:'',
    Email:'',
    TitreOffre:'',
    Description:'',
    Image:'',
    codeDemande:''
  };
  SetOffre() {
    
}
  commander(i:any){
    console.log(i)
    this.myservice.getOffre(i).then(data => {
      console.log(i)
     this.ArrayDemande.Numero=data.get('Numero')
     this.ArrayDemande.TitreOffre=data.get('Titre')
     this.ArrayDemande.Image=data.get('Image')
     this.ArrayDemande.Username=data.get('Username')
     this.ArrayDemande.Description=data.get('Description')
     this.ArrayDemande.Email=data.get("Email");
     this.ArrayDemande.codeDemande=data.get("codeOffre")
  })
  console.log(this.ArrayDemande)
    this.myservice.AddDemande(this.ArrayDemande);
  }
  getIndiceInfo(i:any){
    this.myservice.setCodeOffre(i)
    this.route.navigate(['/Info'])
  }
}
