import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Usuario} from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolve implements Resolve<Usuario> {
  constructor(private usuarioService: UsuarioService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario> | Usuario {
    const id = route.paramMap.get('id');
    if (id) {
      return this.usuarioService.consultar(id);
    }
    return new Usuario();

  }


}
