import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{title}}</h1>
            <h3>La base es {{base.toString()}}</h3>

            <button (click) = "acumular(1)"> + {{base.toString()}}</button>
            <span>{{numero}}</span>
            <button (click) = "acumular(-1)"> - {{base.toString()}} </button>
            `
})
export class ContadorComponent{
    public title : string = 'Contador App';
    public numero: number = 0;
    public base  : number = 20;
  
    acumular(operacion:number){
      this.numero += (this.base*operacion);
    }
}