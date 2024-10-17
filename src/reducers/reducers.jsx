import { addItem } from "../actions/actions"

const initialState = {
    items:[]
}

const itemReducer = (state,initialState,action)=>{
    switch(action.type){
        case addItem:
            return {
                ...state,
                items:[...state.items,action.payload]
            };
        default:
            return state;
    }
}

export default itemReducer;