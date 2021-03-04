import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiplicarAction } from 'src/app/redux/actions/contador.actions';
import { AppStore } from '../../app.reducers';
import { DividirAction } from '../../redux/actions/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppStore>){
    this.store.subscribe( state => { 
      this.contador = state.contador;
    });
  }

  ngOnInit(): void {
    this.store.subscribe(state => { 
      console.log(state.contador);
    });
  }

  multiplicar() :void {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  dividir() :void {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }

  resetNieto(nuevoContador: number) :void {
    this.contador = nuevoContador;
  }

}
