import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.page.html',
  styleUrls: ['./pregunta1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta1Page implements OnInit {

  pregunta1:any;

  constructor() { }

  ngOnInit() {
  }


  siguiente(){
    console.log("sig");
    

  }


  atras(){
    console.log("atras");
    

  }

}
