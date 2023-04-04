import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})





export class LoginService {

  

  constructor(private http:HttpClient) { }

  Login(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://fdtyjs9u50.execute-api.us-east-1.amazonaws.com/dev/login_admin',params).subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}

}
