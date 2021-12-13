import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-finca',
  templateUrl: './listar-finca.component.html',
  styleUrls: ['./listar-finca.component.css']
})
export class ListarFincaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irFinca(){
    this.router.navigate(['finca-compra'])
  }
}
