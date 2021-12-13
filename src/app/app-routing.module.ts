import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgricultorHomeComponent } from './agricultor-home/agricultor-home.component';
import { FrutasComponent } from './frutas/frutas.component';
import { ClienteHomeComponent } from './cliente-home/cliente-home.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { FincaComponent } from './finca/finca.component';
import { HistorialClientesComponent } from './historial-clientes/historial-clientes.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "productos", component: ClienteHomeComponent},
  {path: "productos/categorias/frutas", component: FrutasComponent},
  {path: "productos/categorias/escogeTuFincaManzanas", component: ManzanaComponent},  
  {path: "finca-compra", component: FincaComponent},  
  {path: "cliente/historialCompras", component: HistorialClientesComponent},
  {path: "cliente/favoritos", component: FavoritosComponent},
  {path: "home/agricultor", component: AgricultorHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
