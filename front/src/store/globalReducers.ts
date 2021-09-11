import { ActionToggleModalWindow, TOGGLE_MODAL_WINDOW } from './actions';

export interface IStateGlobal {
    modalWindow:boolean,  
}

const initialStateGlobal : IStateGlobal ={
    modalWindow : false
}

export function modalWindowReducer (
    state : boolean = initialStateGlobal.modalWindow,
    action : ActionToggleModalWindow
) {
    switch (action.type){
        case TOGGLE_MODAL_WINDOW:{
            return action.payload
        }
        default:
            return state;
    }
}