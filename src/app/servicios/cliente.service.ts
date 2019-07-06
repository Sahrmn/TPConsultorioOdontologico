import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service'; 
import { Cliente } from '../clases/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private miHttp: MiHttpService<Cliente>) { }

  alta(file, nombre, apellido, dni, usuario, clave){
    let formData: FormData = new FormData();
    formData.append('foto', file);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('dni', dni);
    formData.append('nombre_usuario', usuario);
    formData.append('clave', clave);

    console.log(formData);
    return this.miHttp.httpPostPSinSubscripcion("clientes/alta/", formData);
  }



}
