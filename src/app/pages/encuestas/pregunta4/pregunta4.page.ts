import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.page.html',
  styleUrls: ['./pregunta4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
