import {DELETE_USER, ADD_USER,FETCH_USERS} from '../actions/Users';
import Switch from '../../node_modules/react-router-dom/Switch';

const initialAppState = [];

function userReducer(state=initialAppState,action){
    console.log(action);
    switch(action.type){
        case DELETE_USER:
            var new_state=state.filter((item,index)=>{
                return item.username != action.username
            });
            console.log(new_state);
            return new_state;
            break;
        case ADD_USER:
            return [...state, action.userObj];
            break;
        case FETCH_USERS:
            return[
                ...action.data
            ]
            break;
    }
    return state;
}

export default userReducer;