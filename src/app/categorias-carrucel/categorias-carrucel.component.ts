import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-carrucel',
  templateUrl: './categorias-carrucel.component.html',
  styleUrls: ['./categorias-carrucel.component.css']
})
export class CategoriasCarrucelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irFrutas(){
    this.router.navigate(['productos/categorias/frutas'])
  }
}
