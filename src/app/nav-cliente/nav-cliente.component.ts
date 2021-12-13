import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserPagesComponent } from '../user-pages/user-pages.component';

@Component({
  selector: 'app-nav-cliente',
  templateUrl: './nav-cliente.component.html',
  styleUrls: ['./nav-cliente.component.css']
})
export class NavClienteComponent implements OnInit {

  usuario = "Nombre usuarioxxxxx";//incluir solo 20 caracteres

  constructor(private router:Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  logOut(){
    this.router.navigate(['home']);
  }
  irUserPage(){
    this.matDialog.open(UserPagesComponent);
    localStorage.clear()
  }
}
