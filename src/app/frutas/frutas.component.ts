import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  irFincaManzana(){
    this.router.navigate(['productos/categorias/escogeTuFincaManzanas'])
  }
}
