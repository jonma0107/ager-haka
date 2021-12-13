import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frutas-carrucel',
  templateUrl: './frutas-carrucel.component.html',
  styleUrls: ['./frutas-carrucel.component.css']
})
export class FrutasCarrucelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irCategoriaFrutas(){
    this.router.navigate(['productos/categorias/frutas']);
  }
  irFincaManzana(){
    this.router.navigate(['productos/categorias/escogeTuFincaManzanas'])
  }
}
