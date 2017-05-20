import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Jugador } from './data.jugador';

@Component({
  selector: 'jugador-detail',
  template: `
    	<div class="col-md-12">
			<strong>{{Jugador.Nombre}} {{Jugador.Apellido}}</strong>
			<label>{{Jugador.Edad}} Años</label>
			<a class="button" (click)="BorrarJugador()">Borrar</a>
		</div>
  `
})
export class JugadorDetailComponent {
  @Input()
  Jugador: Jugador;

  @Output() 
  BorrarJugadorEvent: EventEmitter<Jugador> = new EventEmitter();

  BorrarJugador(){
    this.BorrarJugadorEvent.emit(this.Jugador);
  }
}

