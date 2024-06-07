import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Aquí vamos a recibir información del componente padre (main-page.component)
  @Input()
  // En caso de recibir una lista de personajes vacía, se usan estos datos en su lugar
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

}
