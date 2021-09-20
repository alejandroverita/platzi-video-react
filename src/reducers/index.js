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
            };
        case actions.loginRequest: 
            console.log('loginRequest -> ', state.user);
            return {
                ...state,
                user: action.payload,
            };
        case actions.logoutRequest:
            console.log('Logout Request -> ', state.user)
            return {
                ...state,
                user: action.payload,
            };
        case actions.registerRequest:
            return{
                ...state,
                user: action.payload,
            };
        default: 
            return state;
    }
}

export default reducer;