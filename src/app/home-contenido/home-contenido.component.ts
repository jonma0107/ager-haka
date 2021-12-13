import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-contenido',
  templateUrl: './home-contenido.component.html',
  styleUrls: ['./home-contenido.component.css']
})
export class HomeContenidoComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  
}
