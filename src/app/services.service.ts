import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from './auth/client';
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from '@angular/fire/auth';
import { update } from '@angular/fire/database';
import { offre } from './offre/offre';
import { Demande } from './demande/demande';
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user: Observable<any>;
  constructor(private signInCompte: AngularFireAuth, private router: Router, private dataS: AngularFirestore) {
    this.user = this.signInCompte.user //recuperer_user_Pour_tester_L'etat_de_session
  }

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  signIn(Email: string, password: string) {
    this.id=Email;
    return this.signInCompte.signInWithEmailAndPassword(Email, password + "NidhalAhmedAmir").then((data) => {
      console.log(this.signInCompte.settings)
      this.router.navigate(["/PageDaccueil"])
    }).catch(() => {
      return this.signInCompte.signInWithEmailAndPassword(Email , password + "NidhalAhmedAmir").then((d) => {
        console.log(d)
        this.router.navigate(["/PageDaccueil"])
      }).catch((data) => { window.alert(data) })
    })
  }

  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

id:any
  SignUp(Email: string, password: string) {
    this.id=Email;
    return this.signInCompte.createUserWithEmailAndPassword(Email, password + "NidhalAhmedAmir").then((data) => {
      
      console.log(data)
      this.router.navigate(["/PageDaccueil"])
    }).catch(() => {
      this.signInCompte.createUserWithEmailAndPassword(Email + "@gmail.com", password + "NidhalAhmedAmir").then((data) => {
        console.log(data)
        this.router.navigate(["/PageDaccueil"])
      }).catch()
    })
  }

  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  Logout() {
    this.signInCompte.signOut();

    this.router.navigate(['/']);
  }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  // Add a new document in collection "cities" with ID 'LA'
  a: any;
  nameAfficher:any;
  addClient(client: Client ) {
this.nameAfficher=client.Username;
    this.a = String(client.Username)
    // db.collection('cities').doc('LA').set(data);
    this.dataS.collection("infoclient").doc(client.Email).set({
      Email: client.Email,
      Password: client.Password,
      Numero: client.Numero,
      Username: this.a
    }).then(() => { }).catch((erreur) => { window.alert(erreur) })
  }
  
  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

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
  
  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    delete(indice: string) {
      return this.dataS.collection("InfoOffre").doc(indice).delete()
    }

  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

   

  GoogleSignIn() {
    return this.signInCompte.signInWithPopup(new GoogleAuthProvider().addScope('email')).then(() =>{
      alert('welcome');
    this.router.navigate(["/Reglage"])
  }).catch((erreur) => alert(erreur))
  }
  
  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


  FacebookSignIn() {
    return this.signInCompte.signInWithPopup(new FacebookAuthProvider()).then(() =>{
      alert('welcome');
    this.router.navigate(["/Reglage"])
  }).catch((erreur) => alert(erreur))
  }

  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  getuser(e:any) {
    return this.dataS.collection("infoclient").ref.doc(e).get()}

    getOffre(e:any) {
      return this.dataS.collection("InfoOffre").ref.doc(e).get()}
  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

valeur:any;
    getvalue(){
      return this.valeur;
    }

    setvalue(e:any){
this .valeur=e;    }



  /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  
  update(Profile:Client){
    {
      console.log( Profile.Email)
console.log(Profile.Password)
console.log( Profile.Numero)
  
console.log(Profile.Username)
  
         
          // db.collection('cities').doc('LA').set(data);
          this.dataS.collection("infoclient").doc(this.id).update({
            Email: this.id,
            Password: Profile.Password,
            Numero: Profile.Numero,
            Username:Profile.Username

          }).then(() => { }).catch((erreur) => { window.alert(erreur) })}
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

AddOffre(o:offre,x:number){
  return this.dataS.collection('InfoOffre').doc(o.codeOffre).set({
    codeOffre: o.codeOffre,
    Email: o.Email,
    Numero: o.Numero,
    Username:o.Username,
    Description:o.Description,
    Titre:o.TitreOffre,
    Image:o.Image,
    dateoffre:x
  }).then(() => {window.alert("Ajouté avec Succés") }).catch((erreur) => { window.alert(erreur) })
}

UpdateOffre(o : any,x: any){
  return this.dataS.collection("InfoOffre").doc(x).set({
    Numero: o.Numero,
    Username:o.Username,
    Description:o.Description,
    Titre:o.TitreOffre,
    Image:o.Image
  }).then(() => {window.alert("Modifié avec Succés") }).catch((erreur) =>{window.alert(erreur)})
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

getOffres(){
  return this.dataS.collection('InfoOffre').snapshotChanges()
}
code:any
setCodeOffre(c:any){
  this.code=c;
}
getCodeOffre(){
  return this.code;
}

getCommande(){
  return this.dataS.collection('InfoDemande').snapshotChanges()
}

AddDemande(o:Demande){
  return this.dataS.collection('InfoDemande').doc(o.codeDemande).set({
    codeDemande: o.codeDemande,
    Email: o.Email,
    Numero: o.Numero,
    Username:o.Username,
    Description:o.Description,
    Titre:o.TitreOffre,
    Image:o.Image
  }).then(() => {window.alert("commandé avec Succés") }).catch((erreur) => { window.alert(erreur) })
}
}