import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.page.html',
  styleUrls: ['./pregunta3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta3Page implements OnInit {

  pregunta3:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.removeItem("3")


  }



  siguiente(pregunta3:any){
    console.log("sig", pregunta3);
    
localStorage.setItem("3",pregunta3 )  
    
  
    this.router.navigate(['/pregunta4']);
  }


  atras(){
    console.log("atras");

    this.router.navigate(['/pregunta2']);
    

  }

}
