import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service'; 
import { Especialista } from '../clases/especialista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  constructor(private miHttp: MiHttpService<Especialista>) { }


  alta(nombre, apellido, dni, usuario, clave, matricula, especialidad, horarios){
  	let data = {
  		'nombre': nombre,
  		'apellido': apellido,
  		'dni': dni,
  		'nombre_usuario': usuario,
  		'clave': clave,
  		'matricula': matricula,
  		'id_especialidad': especialidad,
  		'horarios': horarios
  	};
    return this.miHttp.httpPostPSinSubscripcion("especialista/alta/", data);
  }


}
