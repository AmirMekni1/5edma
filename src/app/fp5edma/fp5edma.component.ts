import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-fp5edma',
  templateUrl: './fp5edma.component.html',
  styleUrls: ['./fp5edma.component.css']
})
export class FP5edmaComponent {


  constructor(private myservice:ServicesService){ 
 
   }
   f(){
    this.myservice.Logout()
   }
}
