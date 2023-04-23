import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta5',
  templateUrl: './pregunta5.page.html',
  styleUrls: ['./pregunta5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta5Page implements OnInit {

  pregunta5:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.removeItem("5")


  }



  siguiente(pregunta5:any){
    console.log("sig", pregunta5);
    
localStorage.setItem("5",pregunta5 )  
    
  
    this.router.navigate(['/pregunta6']);
  }


  atras(){
    console.log("atras");

    this.router.navigate(['/pregunta4']);
    

  }

}
