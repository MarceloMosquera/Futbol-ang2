import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Jugador } from './data.jugador';
import { JugadorDetailComponent } from './jugador-detail.component';


@Component({
  selector: 'equipo-detail',
  directives: [JugadorDetailComponent],
  template: `
      <ul class="task-list">
          <li class="col-md-12 col-lg-12">
            <h4 style="font-weight: 700">Arquero</h4>
            <div *ngFor="let jugador of JugadoresFiltrados('A') ">
              <jugador-detail [Jugador]="jugador" (BorrarJugadorEvent)="onBorrarJugador($event)"></jugador-detail>
            </div>
          </li>
          <li class="col-md-12 col-lg-12">
            <h4 style="font-weight: 700">Defensores</h4>
            <div *ngFor="let jugador of JugadoresFiltrados('D') ">
              <jugador-detail [Jugador]="jugador" (BorrarJugadorEvent)="onBorrarJugador($event)"></jugador-detail>
            </div>
          </li>
          <li class="col-md-12 col-lg-12">
            <h4 style="font-weight: 700">Mediocampistas</h4>
            <div *ngFor="let jugador of JugadoresFiltrados('M') ">
              <jugador-detail [Jugador]="jugador" (BorrarJugadorEvent)="onBorrarJugador($event)"></jugador-detail>
            </div>
          </li>
          <li class="col-md-12 col-lg-12">
            <h4 style="font-weight: 700">Delantero</h4>
            <div *ngFor="let jugador of JugadoresFiltrados('DL') ">
              <jugador-detail [Jugador]="jugador" (BorrarJugadorEvent)="onBorrarJugador($event)"></jugador-detail>
            </div>
          </li>
        	<h4 style="font-weight: 700">Formación: {{JugadoresFiltrados("D").length}} - {{JugadoresFiltrados("M").length}} - {{JugadoresFiltrados("DL").length}}</h4>
  `
})
export class EquipoDetailComponent {
  @Input()
  Jugadores: Jugador[];

  JugadoresFiltrados(idPosicion: string) : Jugador[] {
    return this.Jugadores.filter(jugador => {
        return jugador.IdPosicion == idPosicion;
      });
  }

  @Output() 
  BorrarJugadorEvent: EventEmitter<Jugador> = new EventEmitter();

  onBorrarJugador(jugador) {
    this.BorrarJugadorEvent.emit(jugador);
  }
}

