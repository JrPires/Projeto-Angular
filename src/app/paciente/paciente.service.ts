import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../shared/base-api.service';
import { Paciente } from './model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApiService<Paciente> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'pacientes');
  }
}
