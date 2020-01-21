import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarComponent } from './medico/components/listar/listar.component';


// @ts-ignore
// @ts-ignore
const routes: Routes = [
  { path: '', component: ListarComponent}
  // {
  //   path: 'pacientes',
  //   // children: [
  //   //   {component, path, children: []}
  //   // ],
  //   loadChildren: () => import('./paciente/paciente.module')
  //     .then(mod => mod.PacienteModule),
  // },
  // {
  //   path: 'usuarios',
  //   // children: [
  //   //   {component, path, children: []}
  //   // ],
  //   loadChildren: () => import('./usuario/usuario-modulo')
  //     .then(mod => mod.UsuarioModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
