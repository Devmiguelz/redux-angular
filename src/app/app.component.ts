import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';

interface AppStore{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppStore>){
    /* this.contador = 10; */
    this.store.subscribe( state => { 
      this.contador = state.contador;
     });
  }

  incrementar() :void{
    /* this.contador += 1; */
    const accion: Action = { type: "INCREMENTAR" };

    this.store.dispatch(accion);

  }

  decrementar() :void{
    /* this.contador -= 1; */

    const accion: Action = { type: "DECREMENTAR" };

    this.store.dispatch(accion);

  }
  
}
