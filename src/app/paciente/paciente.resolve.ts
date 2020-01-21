import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Paciente} from './model/paciente';
import {PacienteService} from './paciente.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteResolve implements Resolve<Paciente> {
  constructor(private pacienteService: PacienteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> | Paciente {
    const id = route.paramMap.get('id');
    if (id) {
      return this.pacienteService.consultar(id);
    }
    return new Paciente();

  }


}
