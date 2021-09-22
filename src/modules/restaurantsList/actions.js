//import menus from './restaurantsMenus.json';
//import pedidos from './restaurantsList';
/*
export const getMenus = () => {   
    return new Promise((resolve, reject) => {       
        setTimeout(() => {
            resolve (menus);
        }, 5000);       
    });
}
export const getPedidos = () => {
    return pedidos;
};
*/

//Aqui el segundo paso sera recuperar la info del servicio que montamos en "service"
import { Config } from "../../config/Config";

//Constantes para Redux
export const GET_MENUS_REQUEST = 'GET_MENUS_REQUEST';
export const GET_MENUS_RESPONSE = 'GET_MENUS_RESPONSE';

export const getMenus = (start, count) => {
    console.log("Get menus...");

    /*
    return fetch(`${Config.backendBaseUrl}/menus`)
        .then(response => response.json());
    */

    return dispatch => {
        dispatch({
            type: GET_MENUS_REQUEST
        });       

        return fetch(`${Config.backendBaseUrl}/menus?start=${start}&count=${count}`)
        .then(response => response.json()).then(menus => {
             dispatch({
                type: GET_MENUS_RESPONSE,
                menus: menus
            });
        });
    }
}



