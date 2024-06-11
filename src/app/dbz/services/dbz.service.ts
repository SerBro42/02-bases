import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Esta lista de personajes será exportada hacia el componente hijo (list.component.ts)
  // Creamos este servicio para que el array y las funciones puedan ser utilizadas en todos
  // los componentes que los necesiten
  // Hemos importado el UUID, y llamamos esa función cada vez que necesitemos generar un ID
  // único
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  /* Cambio de nombre de la función para mayor claridad */
  addCharacter( character: Character ):void {
    // Al crear un nuevo personaje, cogemos el objeto character que nos pasan y le añadimos el
    // atributo id, el cual será generado mediante la llamada uuid(). El resto de atributos del
    // character son los mismos (de allí que sea ...character).
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);

  }

  // onDeleteCharacter ( index: number ): void {
  //   this.characters.splice(index, 1);
  // }
  // Borramos la función de eliminar anterior y la sustituimos por otra, que elimina personajes
  // en función de su ID único en vez de su índice en el array.
  deleteCharacterById( id: string ): void{
    this.characters = this.characters.filter( character => character.id !== id);
  }

  constructor() { }

}
