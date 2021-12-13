import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserPagesComponent } from '../user-pages/user-pages.component';

@Component({
  selector: 'app-nav-agricultor',
  templateUrl: './nav-agricultor.component.html',
  styleUrls: ['./nav-agricultor.component.css']
})
export class NavAgricultorComponent implements OnInit {

  usuario = localStorage.getItem("username")
  constructor(private router:Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  logOut(){
    this.router.navigate(['home']);
  }
  irUserPage(){
    this.matDialog.open(UserPagesComponent);
  }
  irProductos(){
    this.router.navigate(["home/agricultor"])
  }
  irClientes(){
    this.router.navigate(["productos"])
  }
}
