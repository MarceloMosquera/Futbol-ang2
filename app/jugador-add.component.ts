import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Jugador } from './data.jugador';
import { JUGADORES } from './data.jugador';
import { Posicion } from './data.posicion';
import { POSICIONES } from './data.posicion';


@Component({
  selector: 'jugador-add',
  template: `
    <h4>Ingrese nuevo jugador</h4>
    <div *ngFor="let posicion of Posiciones; let idx = index">
        <label>{{ posicion.NombrePosicion }}
          <input type="radio" name="radiogroup" [checked]="idx === 0" (change)="onChangePosicion(posicion)" />
        </label>
    </div>
    <select [ngModel]="JugadorSelected" (ngModelChange)="onChangeJugador($event)" >
        <option *ngFor="let jugador of JugadoresAElegirFiltrados" [ngValue]="jugador" >
        Nombre: {{jugador.Nombre}} {{jugador.Apellido}}, Edad: {{jugador.Edad}}, Precio: U$S {{jugador.Precio}}
        </option>
    </select>
    <div style='margin-top: 10px; margin-bottom: 10px'>
      <button (click)="AgregarJugador()" (enable)=" JugadorSelected() != null">Guardar jugador</button>
    </div>
  `
})
export class JugadorAddComponent {

  @Output() 
  AgregarJugadorEvent: EventEmitter<Jugador> = new EventEmitter();

  Posiciones: Posicion[];
  JugadoresAElegir: Jugador[];
  JugadoresAElegirFiltrados: Jugador[];
  PosicionSelected: Posicion;
  JugadorSelected: Jugador;

  ngOnInit() {
    this.Posiciones = POSICIONES;
    this.JugadoresAElegir = JUGADORES;
    this.PosicionSelected = new Posicion("A", "");
    this.UpdateFiltrados();
  }
  onChangePosicion(posicion) {
      this.PosicionSelected = posicion;
      this.UpdateFiltrados();
  }
  onChangeJugador(jugador) {
    this.JugadorSelected =jugador;
  }
  UpdateFiltrados(){
    this.JugadoresAElegirFiltrados = this.JugadoresAElegir.filter(
          jugador => jugador.IdPosicion === this.PosicionSelected.IdPosicion);
  }
  AgregarJugador(){
    this.AgregarJugadorEvent.emit(this.JugadorSelected);
  }
}