import { Component, OnInit } from '@angular/core';
import {TasksService} from "../servicios/tasks.service"
@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {

  constructor(private servicio: TasksService) { }

  ngOnInit(): void {
  }
  editarProductos(){
    var id = (document.getElementById("idProducto") as HTMLInputElement).value
    var name = (document.getElementById("name1") as HTMLInputElement).value
    var precio = (document.getElementById("precio1") as HTMLInputElement).value
    var cosecha = (document.getElementById("cosecha1") as HTMLInputElement).value
    var categoria = (document.getElementById("categoria1") as HTMLInputElement).value
    var fase = (document.getElementById("fase1") as HTMLInputElement).value
    var estado = (document.getElementById("estado1") as HTMLInputElement).value
    this.servicio.editarProducto(id,name,precio,cosecha,categoria,fase,estado)
  }
}
