import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-fp5edma',
  templateUrl: './fp5edma.component.html',
  styleUrls: ['./fp5edma.component.css']
})
export class FP5edmaComponent {

  ISuser: boolean = false;
  constructor(private myservice:ServicesService){ 
    this.myservice.user.subscribe(user => {
      if (user) {
        this.ISuser = true
        console.log(this.ISuser)
      } else {
        this.ISuser = false
        console.log(this.ISuser)
      }
    })
   }
   f(){
    this.myservice.Logout()
   }
}
