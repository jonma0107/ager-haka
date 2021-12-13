import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {CompraExitosaComponent} from '../compra-exitosa/compra-exitosa.component'

@Component({
  selector: 'app-finca',
  templateUrl: './finca.component.html',
  styleUrls: ['./finca.component.css']
})
export class FincaComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  onOpenCompra(){
    this.matDialog.open(CompraExitosaComponent);
    }

}
