import { Config } from "../../config/Config";

//Constantes para Redux
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';

export const loginUser = (login, password) => {
    //Indicar a Redux que estamos cargando

    /*
    return fetch(Config.backendBaseUrl + '/login', {
        method : 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            login,
            password
        })
    }).then(response  => response.json())
    */

    //Indicar a Redux que ya hemos cargado y la info del usuario es XXX
    //Redireccion a la Home

    return dispatch => {
        dispatch({
          type: USER_LOGIN_REQUEST
        });

        // Indicar a Redux que estamos cargando
        return fetch(Config.backendBaseUrl + '/login', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                login,
                password
            })
        }).then(response => response.json()).then(userInfo => {
            dispatch({
                type: USER_LOGIN_RESPONSE,
                userInfo
            });
        });
    }   
}