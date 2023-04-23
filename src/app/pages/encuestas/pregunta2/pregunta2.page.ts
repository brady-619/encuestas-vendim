import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta2Page implements OnInit {


  pregunta2:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.removeItem("2")


  }


  siguiente(pregunta2:any){
    console.log("sig", pregunta2);
    
localStorage.setItem("2",pregunta2 )  
  
    this.router.navigate(['/pregunta3']);
  }


  atras(){
    console.log("atras");

    this.router.navigate(['/pregunta1']);
    

  }

}
