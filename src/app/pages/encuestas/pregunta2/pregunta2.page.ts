import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
