import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validacoes } from '../../shared/validacoes';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  usuario: Usuario;
  title: string;

  formulario: FormGroup;

  constructor(route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuarioService) {
    // this.usuario = route.snapshot.data.usuario;
    // this.title = this.usuario.id ? 'Atualizar Usuário' : 'Cadastrar Usuário';
  }

  ngOnInit() {
    
    this.formulario = this.formBuilder.group({
      nome: [this.usuario.nome, Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      dataNascimento: [this.usuario.dataNascimento, Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      email: [this.usuario.email, Validators.compose([
        Validators.required,
        Validacoes.ValidaEmail
      ])],
      senha: [this.usuario.senha, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      ConfirmaSenha: [this.usuario.confirmarSenha, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    });

    this.formulario.valueChanges
      .subscribe((values) => {
        console.log(values);
      });

    this.nome.valueChanges.subscribe(value => {
      if (value && value.length > 3) {
        this.email.setValue(`${value}@empresa.com`);
      }
    });
  }

  get nome() {
    return this.formulario.get('nome');
  }
  get dataNascimento() {
    return this.formulario.get('dataNascimento');
  }

  get email() {
    return this.formulario.get('email');
  }

  get senha() {
    return this.formulario.get('senha');
  }
  get confirmarSenha() {
    return this.formulario.get('ConfirmarSenha');
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.usuarioService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }

}
