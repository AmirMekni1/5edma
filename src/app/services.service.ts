import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from './auth/client';
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user: Observable<any>;
  constructor(private signInCompte:AngularFireAuth , private router:Router,private dataS: AngularFirestore) { 
    this.user = this.signInCompte.user //recuperer_user_Pour_tester_L'etat_de_session
   }


    signIn(Email: string, password: string) {
      return this.signInCompte.signInWithEmailAndPassword(Email, password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/test"])
      }).catch(() => {
        return this.signInCompte.signInWithEmailAndPassword(Email + "@gmail.com", password + "NidhalAhmedAmir").then((d) => {
          console.log(d)
          this.router.navigate(["/test"])
        }).catch((data) => { window.alert(data) })
      })
    }


    SignUp(Email: string, password: string) {
      return this.signInCompte.createUserWithEmailAndPassword(Email, password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/"])
      }).catch(() => {
        this.signInCompte.createUserWithEmailAndPassword(Email + "@gmail.com", password + "NidhalAhmedAmir").then((data) => {
          console.log(data)
          this.router.navigate(["/"])
        }).catch()
      })
    }

    Logout() {
      this.signInCompte.signOut();

      this.router.navigate(['/']);
    }

    // Add a new document in collection "cities" with ID 'LA'
     

a:any;
    

    addClient(client: Client) {
     
      this.a = String(client.Username)
     // db.collection('cities').doc('LA').set(data);
        this.dataS.collection("infoclient").doc(this.a).set({
        Email: client.Email,
        Password: client.Password,
        Numero: client.Numero,
        Username: this.a
      }).then(() => { this.router.navigate(['/']) }).catch((erreur) => { window.alert(erreur) })
    }
  /*
  
    editCompte(client: Client) {
      this.a = String(indices)
     this.dataS.collection("infoclient").doc(this.a).set({
        Email: client.Email,
        Password: client.Password,
        Numero: client.Numero,
        Username: this.a
      }).then(() => { this.router.navigate(['/']) }).catch((erreur) => { window.alert(erreur) })
    }
  
    deleteEtudiant(iindice: number) {
      this.a = String(iindice)
      return this.dataS.collection("eleve").doc(this.a).delete()
    }

    */
  }
