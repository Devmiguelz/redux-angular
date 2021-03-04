import { Action } from "@ngrx/store";
import { DECREMENTAR, INCREMENTAR, MULTIPLICAR, DIVIDIR, RESET } from '../types/contador.types';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;

    constructor(public payload: number) { }

}

export class DividirAction implements Action {
    readonly type = DIVIDIR;

    constructor(public payload: number) { }

}

export class ResetAction implements Action {
    readonly type = RESET;
}

export type Actions = IncrementarAction | 
                      DecrementarAction | 
                      MultiplicarAction |
                      DividirAction |
                      ResetAction;