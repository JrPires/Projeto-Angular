import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './components/listar/listar.component';
import {MedicoResolve} from './service/medico.resolve';
import { EditarComponent } from './components/editar/editar.component';


const medicoRoutes: Routes = [
  // { path: 'medico', component: ListarComponent, children: [
      { path: 'medico/listar', component: ListarComponent},
      {
        path: 'medico/novo',
        component: EditarComponent,
        resolve: {
          medico: MedicoResolve,
        }
      },
      {
        path: 'medico/editar/:id',
        component: EditarComponent,
        resolve: {
          medico: MedicoResolve
        }
      }
    ]
    
  // },

// ];

@NgModule({
  imports: [RouterModule.forChild(medicoRoutes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
