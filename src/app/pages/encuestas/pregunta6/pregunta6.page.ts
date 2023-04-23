import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta6',
  templateUrl: './pregunta6.page.html',
  styleUrls: ['./pregunta6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta6Page implements OnInit {

  pregunta6:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    localStorage.removeItem("6")


  }



  siguiente(pregunta6:any){
    console.log("sig", pregunta6);
    
localStorage.setItem("6",pregunta6 )  


  
    this.router.navigate(['/comentarios']);







  }


  atras(){
    console.log("atras");

    this.router.navigate(['/pregunta5']);
    

  }

}
