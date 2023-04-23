import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ComentariosPage implements OnInit {

  comentarios:any;
  nombre:any;
  direccion:any;

  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    localStorage.removeItem("comentarios")
    localStorage.removeItem("nombre")
    localStorage.removeItem("direccion")


  }



 async siguiente(comentarios:any, nombre:any, direccion:any){
    console.log("sig", comentarios, nombre, direccion);




    nombre==undefined?nombre="Ánonimo":nombre;



    
localStorage.setItem("comentarios",comentarios )  
localStorage.setItem("nombre",nombre )  
localStorage.setItem("direccion",direccion )  




const alert = await this.alertController.create({
  header: 'Registro guardado con éxito',
  subHeader: 'Tus respuesta guardadas fueron:' + "\n" +
  "1:"+ localStorage.getItem("1") + "\n" +
  "2:"+ localStorage.getItem("2") + "\n" +
  "3:"+ localStorage.getItem("3") + "\n" +
  "4:"+ localStorage.getItem("4") + "\n" +
  "5:"+ localStorage.getItem("5") + "\n" +
  "6:"+ localStorage.getItem("6") + "\n" +
  "nombre:"+ localStorage.getItem("nombre") + "\n" +
  "direccion:"+ localStorage.getItem("direccion") + "\n" +
  "comentarios:"+ localStorage.getItem("comentarios") + "\n" 
  
  
  
  ,
  // message: 'This is an alert!',
  buttons: ['OK'],
});

 await alert.present();








  }


  atras(){
    console.log("atras");

    this.router.navigate(['/pregunta6']);
    

  }

}
