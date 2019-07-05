import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service'; 
import { Cliente } from '../clases/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private miHttp: MiHttpService<Cliente>) { }

  alta(foto, nombre, apellido, dni, usuario, clave){
  	let data = {
  		'foto': foto.name,
  		'nombre': nombre,
  		'apellido': apellido,
  		'dni': dni,
  		'nombre_usuario': usuario,
  		'clave': clave
  	};
    return this.miHttp.httpPostPSinSubscripcion("clientes/alta/", data);
  }



}
