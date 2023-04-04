import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {


  constructor(  public alertCtrl: AlertController, public navCtrl: NavController,private login: LoginService) { }


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

    const params = this.loginForm.value;
    // console.log('click',params);


    if (
      this.loginForm.value.usuario != '' ||
      this.loginForm.value.password != ''
    ) {
      const params = this.loginForm.value;
      // console.log("params env",params)

      await this.login.Login(params).then(async (respuesta) => {
        // console.log("la resp del serv es:",respuesta);
        // console.log("la resp del nomb es:",respuesta.data[0].nombre);

        if (respuesta.status == '000') {
          // this.nombre = respuesta.data[0].nombre;

          // console.log("nombre", this.nombre)
          /*global*/
          // localStorage.setItem("nombre_global",this.nombre)

          // this.idclientes = respuesta.data.idclientes;
          /*global*/
          // localStorage.setItem("idclientes_global",this.idclientes)

          // this.router.navigate(['/home'])

          // localStorage.setItem('ingresado', 'true');
          this.navCtrl.navigateRoot('home');
        } else {
          // alert("usuario no registrado")
          // localStorage.setItem("nombre_global","")
          /*global*/
          // localStorage.setItem("idclientes_global","")
          const alert = await this.alertCtrl.create({
            header: 'Usuario no registrado o inactivo.',
            // subHeader: 'SubTitle',
            // message: 'This is an alert message',
            buttons: ['OK'],
          });
          await alert.present();
        }
      });
    } else {
      alert('Favor de llenar todos los campos');
    }
  }
}
