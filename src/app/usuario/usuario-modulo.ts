import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioRoutingModule} from './usuario-routing.modulo';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListarComponent, FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsuarioModule { }
