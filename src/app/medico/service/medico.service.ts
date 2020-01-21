import { Injectable } from '@angular/core';
import { BaseApiService } from '../../shared/base-api.service';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService extends BaseApiService<Medico> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'medicos');
  }

}
