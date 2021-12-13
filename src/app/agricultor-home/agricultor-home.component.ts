import { Component, OnInit } from '@angular/core';
import {TasksService} from "../servicios/tasks.service"
import { MatDialog} from '@angular/material/dialog';
import axios from 'axios';
import { EditarProductosComponent } from '../editar-productos/editar-productos.component';

@Component({
  selector: 'app-agricultor-home',
  templateUrl: './agricultor-home.component.html',
  styleUrls: ['./agricultor-home.component.css']
})
export class AgricultorHomeComponent implements OnInit {
  datos:any={}
  url:string = "https://app89.herokuapp.com/"
  constructor(private servicio: TasksService, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  enviarProductos(){
    var name = (document.getElementById("name") as HTMLInputElement).value
    var precio = (document.getElementById("precio") as HTMLInputElement).value
    var cosecha = (document.getElementById("cosecha") as HTMLInputElement).value
    var categoria = (document.getElementById("categoria") as HTMLInputElement).value
    var fase = (document.getElementById("fase") as HTMLInputElement).value
    var estado = (document.getElementById("estado") as HTMLInputElement).value
    this.servicio.ingresarProducto(name,precio,cosecha,categoria,fase,estado)
  }
  listarProductos(){
    
  }
  getProductos(){
    var nameT;
    axios.get(this.url+"producto/lista/",{
      params:{
        name: 'producto'
      }
    }).then(
      res=>{
        this.datos = res.data
        console.log(this.datos)
        
      }
    ).catch((error)=>{
      alert("No se pueden listar los datos")
    })

  }

  editProductos(){
    
    this.matDialog.open(EditarProductosComponent);
  }
}