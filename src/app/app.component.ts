import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './redux/actions/contador.actions';
import { AppStore } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppStore>){
    this.store.subscribe( state => { 
      this.contador = state.contador;
    });
  }

  incrementar() :void {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() :void {
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
  
}
