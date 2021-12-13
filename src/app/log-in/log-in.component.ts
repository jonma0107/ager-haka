import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../servicios/auth.service"

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router:Router, private servicio: AuthService) { }

  ngOnInit(): void {
  }
  logIn(){
      var username = (document.getElementById("username") as HTMLInputElement).value
      var password = (document.getElementById("password") as HTMLInputElement).value
      this.servicio.logIn(username, password)
      alert("Ingreso de usuario exitoso.")
      this.router.navigate(["home/agricultor"]
      )
      
  }
}
