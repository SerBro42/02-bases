import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Ahora que hemos creado el servicio, lo inyectamos aquí mediante el constructor
  constructor( private dbzService: DbzService ) {

  }

  /* Ahora que el servicio es privado, hace falta crear una función getter para obtener la lista
  de personajes de nuestro servicio */
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  /* Ahora que nuestro servicio es privado, la única forma de llamar a sus funciones es desde el
  archivo main-page.component.ts. Creamos aquí una función cuya finalidad es llamar a la función
  propia del servicio privado */
  onDeleteCharacter( id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character): void {
    this.dbzService.addCharacter( character );
  }

}
