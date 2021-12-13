//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

//Componentes
import { AppComponent } from './app.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { NavClienteComponent } from './nav-cliente/nav-cliente.component';
import { NavAgricultorComponent } from './nav-agricultor/nav-agricultor.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeContenidoComponent } from './home-contenido/home-contenido.component';
import { HomeComponent } from './home/home.component';
import { AgricultorHomeComponent } from './agricultor-home/agricultor-home.component';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { CategoriasCarrucelComponent } from './categorias-carrucel/categorias-carrucel.component';
import { FrutasCarrucelComponent } from './frutas-carrucel/frutas-carrucel.component';
import { FrutasComponent } from './frutas/frutas.component';
import { ClienteHomeComponent } from './cliente-home/cliente-home.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { ListarFincaComponent } from './listar-finca/listar-finca.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { FincaComponent } from './finca/finca.component';
import { CompraExitosaComponent } from './compra-exitosa/compra-exitosa.component';
import { HistorialClientesComponent } from './historial-clientes/historial-clientes.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { SingupComponent } from './singup/singup.component';

//Pipe
import {KeyPipe} from './pipes/key.pipe';
import { EditarProductosComponent } from './editar-productos/editar-productos.component'

@NgModule({
  declarations: [
    AppComponent,
    NavHomeComponent,
    NavClienteComponent,
    NavAgricultorComponent,
    LogInComponent,
    HomeContenidoComponent,
    HomeComponent,
    AgricultorHomeComponent,
    UserPagesComponent,
    CategoriasCarrucelComponent,
    FrutasCarrucelComponent,
    FrutasComponent,
    ClienteHomeComponent,
    ManzanaComponent,
    ListarFincaComponent,
    GoogleMapsComponent,
    FincaComponent,
    CompraExitosaComponent,
    HistorialClientesComponent,
    FavoritosComponent,
    SingupComponent,
    KeyPipe,
    EditarProductosComponent
  ],
  entryComponents:[
    LogInComponent,
    UserPagesComponent,
    CompraExitosaComponent,
    EditarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
