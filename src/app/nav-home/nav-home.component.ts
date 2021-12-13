import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {LogInComponent} from '../log-in/log-in.component'

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent {

  constructor(private matDialog: MatDialog) { }

  onOpenLogIn(){
  this.matDialog.open(LogInComponent);
  }
}
