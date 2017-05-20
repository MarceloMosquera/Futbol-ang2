import { Component, OnInit, Input } from '@angular/core';

import { Jugador } from './data.jugador';
import { EquipoDetailComponent } from './equipo-detail.component';
import { JugadorAddComponent } from './jugador-add.component';

@Component({
  selector: 'my-app',
  template: `<div class="col-md-12 col-lg-12" style="background-image: url('campo.jpg')">
			<h2>Gran DT Baufest</h2>
			<div class="col-md-6 col-lg-6">
        <jugador-add (AgregarJugadorEvent)="onAgregarJugador($event)" ></jugador-add>
				<h4>Saldo disponible: U$S {{Saldo}}</h4>
				<h4>Promedio de edad: {{PromedioEdad}}</h4>
			</div>
			<div class="col-md-6 col-lg-6">
        <div class="col-md-12 col-lg-12">
          <div class="col-md-10 col-lg-10">
            <div class="col-md-7 col-lg-7">
              <h3 style="font-weight: 700">Nombre del equipo:</h3>
              <div *ngIf="!NombreEditable">
                <h3>{{NombreEquipo}}</h3>
                <button (click)="NombreEditable=true;">Editar</button>
              </div>
              <div *ngIf="NombreEditable">
                <input class="form-control" type="text" [(ngModel)]="NombreEquipo"/>
                <button (click)="NombreEditable=false;">Guardar</button>
              </div>
            </div>
          </div>
        </div>
				<div class="col-md-12 col-lg-12">
          <equipo-detail (BorrarJugadorEvent)="onBorrarJugador($event)" [(Jugadores)]="Jugadores" ></equipo-detail>
				</div>
      </div>
    </div>`,
  directives: [EquipoDetailComponent, JugadorAddComponent]
})
export class AppComponent implements OnInit {

  Jugadores: Jugador[];
  NombreEquipo: string;
  NombreEditable: boolean;
  Saldo: number;
  PromedioEdad: number;

  constructor() {
    this.Jugadores = [];
    this.NombreEquipo = "";
    this.PromedioEdad = 0;
    this.Saldo = 9000;
    this.NombreEditable = true;
  }
  ngOnInit() { }

  onAgregarJugador(jugador) {
    if (jugador.IdPosicion == "A") {
      var hayArquero = this.Jugadores.filter(
        jugador => jugador.IdPosicion === "A").length > 0;
      if (hayArquero) {
        return;
      }
    }
    if (this.Jugadores.indexOf(jugador) > 0) {
      return;
    }
    if (this.Saldo >= jugador.Precio) {
      this.Jugadores.push(jugador);
      this.Saldo = this.Saldo - jugador.Precio;
      this.PromedioEdad = this.sacaPromedioEdad();
    }
  }

  onBorrarJugador(jugador) {
    var index = this.Jugadores.indexOf(jugador);
    this.Jugadores.splice(index, 1);
    this.Saldo = this.Saldo + jugador.Precio;
    this.PromedioEdad = this.sacaPromedioEdad();
  }


  sacaPromedioEdad(): number {
    var cantidadJugadores = 0;
    var sumaEdad = 0;
    this.Jugadores.forEach(jugador => {
      cantidadJugadores++;
      sumaEdad = sumaEdad + jugador.Edad;
    });
    if (cantidadJugadores == 0) {
      return cantidadJugadores;
    }
    return sumaEdad / cantidadJugadores;
  };
}
