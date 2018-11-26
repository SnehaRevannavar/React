export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const FETCH_USERS = 'FETCH_USERS';

export function delete_user(username){
    return{
        type : DELETE_USER,
        username : username
    }
}

export function add_user(userObj) {
    return {
        type:ADD_USER,
        userObj
    }
}

export function get_users(){
    return(dispatch)=>{
        fetch('http://localhost:4000/getusers')
        .then((respJSON)=>{
            dispatchEvent({
                type:FETCH_USERS,
                data:respJSON
            });
        });
    };
}