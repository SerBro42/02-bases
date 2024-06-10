

export interface Character {
  // Al importar el paquete externo UUID, añadimos un atributo adicional que será el ID del
  // personaje. Por ahora, lo dejaremos como opcional.
  id?: string;
  name: string;
  power: number;
}
