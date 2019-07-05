import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service'; 
import { Especialidad } from '../especialidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private miHttp: MiHttpService<Especialidad>) { }

  listar(): Observable<Especialidad[]> {
  	return this.miHttp.httpGetO('especialidad/traer/');
  }







}
