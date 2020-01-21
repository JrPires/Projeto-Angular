import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoModule } from '../medico/medico.module';
import { PacienteModule } from '../paciente/paciente.module';
import { UsuarioModule } from '../usuario/usuario-modulo';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedicoModule,
    PacienteModule,
    UsuarioModule
  ]
})
export class MenuModule { }
