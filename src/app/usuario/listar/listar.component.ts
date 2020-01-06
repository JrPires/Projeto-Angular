import { Component, OnInit } from '@angular/core';
import {Medico} from '../../medico/model/medico';
import {MedicoService} from '../../medico/service/medico.service';
import {Router} from '@angular/router';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public usuarios: Usuario[];
  colunas: string[] = ['nome', 'senha', 'confirmar'];

  constructor(private medicoService: MedicoService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.medicoService.listar()
      .subscribe(medicos => {
        this.medicos = medicos;
      });
  }

  editar({ id }: Medico): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: Medico): void {
    this.medicoService.remover(id)
      .subscribe(() => this.atualizar());
  }
}
