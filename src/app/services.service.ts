import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user: Observable<any>;
  constructor(private signInCompte:AngularFireAuth , private router:Router) { 
    this.user = this.signInCompte.user //recuperer_user_Pour_tester_L'etat_de_session
   }


    signIn(username: string, password: string) {
      return this.signInCompte.signInWithEmailAndPassword(username, password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/test"])
      }).catch(() => {
        return this.signInCompte.signInWithEmailAndPassword(username + "@gmail.com", password + "NidhalAhmedAmir").then((d) => {
          console.log(d)
          this.router.navigate(["/test"])
        }).catch((data) => { window.alert(data) })
      })
    }


    SignUp(username: string, password: string) {
      return this.signInCompte.createUserWithEmailAndPassword(username, password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/"])
      }).catch(() => {
        this.signInCompte.createUserWithEmailAndPassword(username + "@gmail.com", password + "NidhalAhmedAmir").then((data) => {
          console.log(data)
          this.router.navigate(["/"])
        }).catch()
      })
    }

    Logout() {
      this.signInCompte.signOut();
    }
  }

