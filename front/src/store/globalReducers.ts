import { ModalType } from './../common/interfaces';
import { ActionToggleModalWindow, TOGGLE_MODAL_WINDOW, ActionTypeModalWindow, TYPE_MODAL_LOBBY } from './actions';

export interface IStateGlobal {
    modalWindow:boolean,  
    typeModalWindow : ModalType
}

const initialStateGlobal : IStateGlobal ={
    modalWindow : false,
    typeModalWindow : ModalType.createIssueModalWindow,
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

export function typeModalWindowReducer (
    state : ModalType = initialStateGlobal.typeModalWindow,
    action : ActionTypeModalWindow
) {
    switch (action.type){
        case TYPE_MODAL_LOBBY:{
            return action.payload
        }
        default:
            return state;
    }
}