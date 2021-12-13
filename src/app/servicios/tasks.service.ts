import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url:string = "https://app89.herokuapp.com/"
  constructor() {}
  ingresarProducto(name:string,precio:string,cosecha:string,categoria:string,fase:string,estado:string){
    return axios.post("https://app89.herokuapp.com/producto/crear/", {
      "nombre": name,
      "precioLibra": precio,
      "cosecha": "2021-12-02",
      "categoria": categoria,
      "fase": "2021-12-02",
      "estado": estado
  }).then(res =>{
    alert("Producto ingresado correctamente en base de datos")
  }).catch((error)=>{
    alert("No se pudo ingresar producto"+error)
  })
  }
  editarProducto(id:string,name:string,precio:string,cosecha:string,categoria:string,fase:string,estado:string){
    return axios.put("https://app89.herokuapp.com/producto/actualizar/"+id, {
      "nombre": name,
      "precioLibra": precio,
      "cosecha": "2021-12-02",
      "categoria": categoria,
      "fase": "2021-12-02",
      "estado": estado
  }).then(res =>{
    console.log({
      "nombre": name,
      "precioLibra": precio,
      "cosecha": "2021-12-02",
      "categoria": categoria,
      "fase": "2021-12-02",
      "estado": estado
  })
    alert("Producto ingresado correctamente en base de datos")
  }).catch((error)=>{
    console.log(error)
    alert(error)
  })
  }
}
