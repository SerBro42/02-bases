import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Output similar al de add-character.component.ts
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  // Aquí vamos a recibir información del componente padre (main-page.component)
  @Input()
  // En caso de recibir una lista de personajes vacía, se usan estos datos en su lugar
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id?: string):void {
    // Capta y emite el index del personaje que queremos eliminar
    console.log(id);
    if ( !id ) return;

    this.onDeleteId.emit( id );

  }

}
