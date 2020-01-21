import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../paciente.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formulario: FormGroup;
  paciente: Paciente;
  title: string;
  btnEnable = 'false';
  constructor(route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private pacienteService: PacienteService) {
      this.paciente = route.snapshot.data.paciente;
    this.title = this.paciente.id ? 'Atualizar Paciente' : 'Cadastrar Paciente';
     }

  ngOnInit() {
    this.validarFormulario();
  }

  validarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [this.paciente.nome, Validators.compose([
      Validators.required,
      Validators.maxLength(30)
      ])],
      endereco: [this.paciente.endereco, Validators.compose([
          Validators.required,
          Validators.maxLength(30)
      ])],
      cpf: [this.paciente.cpf, Validators.compose([
        Validators.required,
        Validators.maxLength(11)
      ])],
      cep: [this.paciente.cep, Validators.compose([
        Validators.required,
        Validators.maxLength(8)
      ])],
      telefone: [this.paciente.telefone, Validators.compose([
        Validators.maxLength(14)
      ])]
    })

    // this.formBuilder.group({
    //   name: [null, [ Validators.required, Validators.maxLength(50)]],
    //   endereco: [null, [Validators.required, Validators.email]],
    //   cpf: [null, [ Validators.required, Validators.maxLength(11)]],
    //   cep: [null, [ Validators.required, Validators.maxLength(8)]],
    //   telefone: [null, [ Validators.required, Validators.maxLength(15)]]
    // });
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get endereco() {
    return this.formulario.get('endereco');
  }

  get cpf() {
    return this.formulario.get('cpf');
  }

  get cep() {
    return this.formulario.get('cep');
  }

  get telefone() {
    return this.formulario.get('telefone');
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.pacienteService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }

}
