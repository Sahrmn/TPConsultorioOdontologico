import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EspecialidadService } from '../servicios/especialidad.service';
import { Especialidad } from '../especialidad';
import { ClienteService } from '../servicios/cliente.service';
import { RecepcionistaService } from '../servicios/recepcionista.service';
import {CalendarModule} from 'primeng/calendar';
import { EspecialistaService } from '../servicios/especialista.service';

interface Dato{
	respuesta: string
}

interface Horario{
  dia: string,
  hora_inicio: number,
  hora_fin: number
}

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  nombre: string;
  apellido: string;
  dni: number;
  username: string;
  password: string;
  password2: string;
  file: any;
  tipo: string;
  text: string;
  text2: string;
  especialidades: Especialidad[] = [];
  especialidad: string;
  matricula: string;
  horario: Horario[] = [];

  constructor(private espService: EspecialidadService, private clienteService: ClienteService, private recepService: RecepcionistaService, private especialistaService: EspecialistaService) {
  	//traigo especialidades
  	this.espService.listar().subscribe(lista =>{
  		this.especialidades = lista;
  		console.log(this.especialidades);
      this.especialidad = this.especialidades[0].id;
  	});
  }

  ngOnInit() {
  	this.tipo = "cliente";

  }

  alta(){
  	if(this.verificarInputs()){
  		if(this.tipo == 'cliente'){
  			this.clienteService.alta(this.file[0], this.nombre, this.apellido, this.dni, this.username, this.password).subscribe((data:Dato) =>{
			    	console.log(data);
			    	this.mostrarAlertOk(data.respuesta);
			    });
  		}

  		if(this.tipo == 'recepcionista'){
  			this.recepService.alta(this.nombre, this.apellido, this.dni, this.username, this.password).subscribe((data:Dato) =>{
			    	console.log(data);
			    	this.mostrarAlertOk(data.respuesta);
			    });
  		}

  		if(this.tipo == 'especialista'){
  			this.especialistaService.alta(this.nombre, this.apellido, this.dni, this.username, this.password, this.matricula, this.especialidad, this.horario).subscribe((data:Dato) =>{
			    	console.log(data);
			    	this.mostrarAlertOk(data.respuesta);
			    });
  		}
  	}
  }

  verificarInputs(){
  	let retorno = false;
  	console.log(this.nombre);
  	console.log(this.apellido);
  	console.log(this.dni);
  	console.log(this.username);
  	console.log(this.password);
  	console.log(this.password2);
  	console.log(this.file);
  	console.log(this.tipo);
  	console.log(this.especialidad);
  	console.log(this.matricula);

  	if(this.nombre != undefined && this.apellido != undefined && this.username != undefined 
  		&& this.password != undefined && this.password2 != undefined && this.tipo != undefined){
  		if(this.password == this.password2){

  			if(this.dni != undefined && this.dni as number){
  				if(this.tipo == 'cliente' && this.file != undefined){
  					retorno = true;
				}
				
				if(this.tipo == 'cliente' && this.file == undefined)
  					this.mostrarAlert("Falta subir una foto");

				if(this.tipo == 'recepcionista'){
  					retorno = true;
				}

				if(this.tipo == 'especialista'){
					if(this.matricula != undefined){
						if(this.especialidad != undefined){
  							retorno = true;

						}else{
							this.mostrarAlert("Falta completar el campo matricula");
						}
					}else{
						this.mostrarAlert("Falta completar el campo matricula");
					}
				}

  			}
  			else
  				this.mostrarAlert("El DNI debe ser numerico");

  		}
  		else{
  			this.mostrarAlert("Las contraseñas ingresadas son diferentes");
  		}
  	}
  	else{
  		this.mostrarAlert("Faltan campos que rellenar");

  	}
  	return retorno;

  }

  nuevoDia(e){
    console.log(e);
    //console.log(e.horaIni.getHours());
    //console.log(e.horaIni.getMinutes());

    let hora1 = e.horaIni.getHours();
    let hora2 = e.horaFin.getHours();

    let nuevoHorario: Horario = {
      'dia': e.dia,
      'hora_inicio': hora1,
      'hora_fin': hora2
    }

    this.horario.push(nuevoHorario);

  }

  eliminarDeLista(item){
    for (var i = 0; i < this.horario.length; ++i) {
      if(this.horario[i] == item){
        this.horario.splice(i, 1);
      } 
    }
  }

  onFileChange(event){
    this.file = event.target.files;
    console.log(event);
  }

  mostrarAlert(text){
  	this.text = text;
    $('#alert-1').fadeIn();
    
    setTimeout(function(){
    	$('#alert-1').fadeOut();
    }, 3000);
  }

  cerrarAlert(){
	$('#alert-1').fadeOut();
  }

  mostrarAlertOk(text){
  	this.text2 = text;
    $('#alert-2').fadeIn();
    
    setTimeout(function(){
    	$('#alert-2').fadeOut();
    }, 3000);
  }






}
