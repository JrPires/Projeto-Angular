import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from '../usuario/listar/listar.component';
import { FormComponent } from './form/form.component';
import { UsuarioResolve } from './service/usuario.resolve';


const usuarioRoutes: Routes = [
  {  path: 'usuario/listar', component: ListarComponent },
  
    {  path: 'usuario/novo', component: FormComponent,
    resolve: {
      medico: UsuarioResolve,
    }
},  
  // {  path: 'listar', component: ListarComponent,
  //       resolve: {
  //         medico: UsuarioResolve,
  //       }
  //   },
  
  {  path: 'usuario/editar/:id', component: FormComponent,
    resolve: {
      medico: UsuarioResolve
  }
}
  
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
