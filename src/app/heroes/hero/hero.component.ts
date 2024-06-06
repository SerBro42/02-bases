import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `Nombre: ${ this.name } - Edad: ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 23;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;

    // Sólo cambia el primer elemento h1 que encuentra en la página
    //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    // Cambia todos los elementos h1 que encuentre en la página
    // document.querySelectorAll('h1').forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
