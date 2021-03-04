import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.reducers';
import { ResetAction } from '../../redux/actions/contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.contador = state.contador;      
    });
  }

  reset() : void{
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }
}
