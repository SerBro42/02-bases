import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Esta lista de personajes será exportada hacia el componente hijo (list.component.ts)
  // Creamos este servicio para que el array y las funciones puedan ser utilizadas en todos
  // los componentes que los necesiten
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter( character: Character ):void {
    this.characters.push(character);
    // console.log('MainPage');
    // console.log(character);
  }

  onDeleteCharacter ( index: number ): void {
    this.characters.splice(index, 1);
  }

  constructor() { }

}
