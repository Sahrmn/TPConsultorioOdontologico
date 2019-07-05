import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { MiHttpService } from './mi-http.service'; 
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService<Usuario>) { }

  alta(usuario){
    this.miHttp.httpPostP("usuario/alta/", usuario);
  }

  listar(): Observable<Usuario[]> {
  	return this.miHttp.httpGetO('usuario/ver/');
  }

  login(user, pass){
  	let array = {
  		'nombre': user,
  		'clave': pass
  	}
  	return this.miHttp.httpPostPSinSubscripcion("login/", array);
  }

  enviarCaptcha(response){
    let data = {
      'g-recaptcha-response': response
    };
    return this.miHttp.httpPostPSinSubscripcion("captcha/", data);
  }
}
