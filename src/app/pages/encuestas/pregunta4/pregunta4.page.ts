import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.page.html',
  styleUrls: ['./pregunta4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta4Page implements OnInit {

  pregunta4:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.removeItem("4")


  }



  siguiente(pregunta4:any){
    console.log("sig", pregunta4);
    
localStorage.setItem("4",pregunta4 )  
  
    this.router.navigate(['/pregunta5']);
  }


  atras(){
    console.log("atras");

    this.router.navigate(['/pregunta4']);
    

  }

}
