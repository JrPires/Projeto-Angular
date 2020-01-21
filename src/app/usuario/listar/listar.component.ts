import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public usuarios: Usuario[];
  colunas: string[] = ['nome', 'dataNascimento', 'email'];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.usuarioService.listar()
      .subscribe(usuarios => {
        this.usuarios = this.usuarios;
      });
  }

  editar({ id }: Usuario): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: Usuario): void {
    this.usuarioService.remover(id)
      .subscribe(() => this.atualizar());
  }
}
