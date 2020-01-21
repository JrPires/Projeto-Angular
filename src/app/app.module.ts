import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MedicoModule} from './medico/medico.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormComponent } from './usuario/form/form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule
} from '@angular/material';
import { ListarComponent } from './paciente/listar/listar.component';
import { NgContentComponetComponent } from './medico/components/ng-content-componet/ng-content-componet.component';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { UsuarioModule } from './usuario/usuario-modulo';
import { PacienteModule } from './paciente/paciente.module';
import { MenuModule } from './menu/menu.module';


@NgModule( {
  declarations: [
    AppComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MedicoModule,
    UsuarioModule,
    MenuModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    SharedModule,
    MatMenuModule,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AppModule { }
