import { actions } from '../actions';

const reducer = (state, action) => {
    
    switch(action.type){
        case actions.setFavorite:
            console.log('action -> ', action);
            return {
                ...state,
                myList:[...state.myList, action.payload]
            }
        case actions.deleteFavorite:
            console.log('state.myList -> ', state.myList);
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        default: 
            return state;
    }
}

export default reducer;