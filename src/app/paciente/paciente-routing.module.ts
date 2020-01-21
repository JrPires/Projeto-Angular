import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { FormComponent } from './form/form.component';
import { PacienteResolve } from './paciente.resolve';


const pacienteRoutes: Routes = [

  // { path: 'paciente', component: ListarComponent },
  {
    path: 'paciente', component: FormComponent,
    resolve: {
      paciente: PacienteResolve,
    }
  },
  {
    path: 'paciente/listar', component: ListarComponent,
    resolve: {
      paciente: PacienteResolve,
    }
  },
  {
    path: 'paciente/editar/:id', component: FormComponent,
    resolve: {
      paciente: PacienteResolve
    }
  }


  // {
  //   component: ListarComponent,
  //   path: '',
  // },
  // {
  // path: 'pacientes',
  // // children: [
  // //   {component, path, children: []}
  // // ],
  // loadChildren: () => import('../paciente/paciente.module')
  //   .then(mod => mod.PacienteModule),
  // }
];

@NgModule({
  imports: [RouterModule.forChild(pacienteRoutes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
