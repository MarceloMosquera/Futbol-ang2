export class Posicion {

  constructor(public IdPosicion: string, public NombrePosicion: string)
  {}

}

export const POSICIONES: Posicion[] = [
	{ IdPosicion: "A", NombrePosicion: "Arquero" },
	{ IdPosicion: "D", NombrePosicion: "Defensor" },
	{ IdPosicion: "M", NombrePosicion: "Mediocampista" },
	{ IdPosicion: "DL", NombrePosicion: "Delantero" }
];
