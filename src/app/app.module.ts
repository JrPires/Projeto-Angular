import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MedicoModule} from './medico/medico.module';
import {PacienteModule} from './paciente/paciente.module';
import {FormsModule} from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListarComponent } from './usuario/listar/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MedicoModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
