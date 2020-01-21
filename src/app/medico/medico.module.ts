import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListarComponent} from './components/listar/listar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EditarComponent} from './components/editar/editar.component';
import {SharedModule} from '../shared/shared.module';
import {MedicoRoutingModule} from './medico-routing.module';
import {DiretivaExemploComponent} from './components/diretiva-exemplo/diretiva-exemplo.component';
import { PipeExemploComponent } from './components/pipe-exemplo/pipe-exemplo.component';

@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent,
    DiretivaExemploComponent,
    PipeExemploComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MedicoRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MedicoModule { }
