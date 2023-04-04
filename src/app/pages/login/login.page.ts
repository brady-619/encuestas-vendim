import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {


  constructor(  public alertCtrl: AlertController, public navCtrl: NavController) { }


  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required,Validators.minLength(1),]),
    password: new FormControl('',[Validators.required]),
  });

  ngOnInit() {
  }

  get registerFormControl() {
    return this.loginForm.controls;
  }


  async inicio() {
    console.log('click');

  
  }


}
