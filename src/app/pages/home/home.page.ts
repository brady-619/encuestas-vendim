import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  IonicModule } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(public alertCtrl: AlertController,private router: Router) {}


  cerrar(){
    console.log("sale");
    
  }



  async encuestas(){
    console.log("encuestas");



    this.router.navigate(['pregunta1']);
   
    
  }



 async calificaciones(){
    console.log("encuestas");

    const alert = await this.alertCtrl.create({
      header: 'Funcionalidad en desarrollo.',
      // subHeader: 'SubTitle',
      // message: 'This is an alert message',
      buttons: ['OK'],
    });
    await alert.present();
    
  }
}
