import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

export interface data{
  respuesta: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nombre: string;
  pass: string;
  siteKeyCaptcha: string = '6LcbjqcUAAAAALsRmUkUalDluKdKGcFctdQEGJaC';
  text: string;
  robot: boolean = true;

  constructor(private usuarioService: UsuarioService, private router: Router) { 
  }

  ngOnInit() {
  }

  public resolved(captchaResponse: string) {
        this.usuarioService.enviarCaptcha(captchaResponse).subscribe((data: data) =>{
          console.log(data);
          if(data.respuesta == "No eres un robot")
            this.robot = false;
        });
  }

  entrar(){
  	if(this.nombre != undefined && this.pass != undefined){
  		if(!this.robot){
	  		this.usuarioService.login(this.nombre, this.pass).subscribe(data =>{
	  			let datos = {
	  				'nombre': this.nombre,
	  				'tk': data
	  			};
          console.log(data);
	  			localStorage.setItem('usuario', JSON.stringify(datos));
	  			this.router.navigate(['home']);
	  		});
      }
      else{
        console.log("Eres un robot!");
      }
  	}
  	else{
  		console.log("Faltan campos que rellenar");
  		this.text = "Faltan campos que rellenar";
  	}
  }

}
