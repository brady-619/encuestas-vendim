import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.page.html',
  styleUrls: ['./pregunta1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta1Page implements OnInit {

  pregunta1:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.removeItem("1")


  }


  siguiente(pregunta1:any){
    console.log("sig", pregunta1);
    
localStorage.setItem("1",pregunta1 )  
    this.router.navigate(['/pregunta2']);



  }


  atras(){
    console.log("atras");
    

  }

}
