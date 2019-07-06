import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dias-horarios',
  templateUrl: './dias-horarios.component.html',
  styleUrls: ['./dias-horarios.component.scss']
})
export class DiasHorariosComponent implements OnInit {

  horaIni: Date;
  horaFin: Date;
  dia: string = "lunes";
  @Output() public myOutPut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  agregar(){
  	console.log(this.dia);
  	console.log(this.horaIni);
  	console.log(this.horaFin);
  	let data = {
  		'dia': this.dia,
  		'horaIni': this.horaIni,
  		'horaFin': this.horaFin
  	}
  	this.myOutPut.emit(data);
  }

}
