import { Injectable } from '@angular/core';

import { JUGADORES } from './data.jugador';
import { Jugador } from './data.jugador';

@Injectable()
export class JugadorService {
  getJugadores() {
    //return HEROES;
    //return Promise.resolve(HEROES);
    return new Promise<Jugador[]>(resolve => setTimeout(() => resolve(JUGADORES), 2000) // 2 seconds
  );
  }
}