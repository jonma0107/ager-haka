import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAuth:string = "https://ager-auth-app.herokuapp.com/";

  constructor(private router:Router) {}
  signUp(user:string){
      return axios.post(this.urlAuth + "signup/", user)
  }
  
  logIn(username:string,password:string){
    localStorage.setItem("username", username)
    return axios.post(this.urlAuth + "login/", {
      "username": username,
      "password": password
    }).then(res =>{
      console.log(res.data)
      localStorage.setItem("refresh", res.data["refresh"])
      localStorage.setItem("access", res.data["access"])
    }).catch((error)=>{
      alert("Iniciar")
    })
  }
}
