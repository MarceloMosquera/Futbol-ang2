export class Jugador {
  Nombre: string;
  Apellido: string;
  Edad: number;
  Precio: number;
  IdPosicion: string;
  PieHabil: string;

  constructor(Nombre: string,  Apellido: string, Edad: number, 
        Precio: number, IdPosicion: string) {
      this.Nombre= Nombre;
      this.Apellido= Apellido;
      this.Edad= Edad;
      this.Precio= Precio;
      this.IdPosicion= IdPosicion;
    }
}

export const JUGADORES: Jugador[] = [
	new Jugador("Maxi", "Tabernero", 28, 700, "A"),
	new Jugador("Martin",  "Rodriguez", 27, 850, "A"),

	new Jugador("Diego", "Tubello", 29, 750, "D"),
	new Jugador("Guillermo", "Vasconcelos", 30, 750, "D"),
	new Jugador("Santiago", "Becquart", 27, 700, "D"),
	new Jugador("Alejandro", "Llanos", 28, 750, "D"),
	new Jugador("Gaston", "Feijoo", 26, 700, "D"),
	new Jugador("Ioce", "Velasco", 26, 700, "D"),
	
	new Jugador("Leandro", "Percivati", 24, 1000, "M"),
	new Jugador("Alexis", "Zunino", 30, 1000, "M"),
	new Jugador("Agustin", "Valle", 22, 900, "M"),
	new Jugador("Federico", "Vicente", 27, 950, "M"),
	new Jugador("Oscar", "Vilcas", 27, 900, "M"),
	
	new Jugador("Leandro", "Goldin", 28, 800, "DL"),
	new Jugador("Christian", "CS9 Smirnoff", 27, 750, "DL"),
	new Jugador("Becker", "Portilla", 27, 750, "DL"),
	new Jugador("Leonardo", "Tocci", 29, 800, "DL")
];
