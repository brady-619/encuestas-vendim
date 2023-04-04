import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.page.html',
  styleUrls: ['./pregunta3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pregunta3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
