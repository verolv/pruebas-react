import {
    GET_MENUS_REQUEST,
    GET_MENUS_RESPONSE
} from './actions';
  
const initialState = {
    menus: {
        currentPage: 0,
        items: [],
        totalItems: 0
    },    
    //userInfo: null,
    loading: false,
    //error: null
};
  
const restaurantsList = (state = initialState, action) => {
    switch (action.type) {
      case GET_MENUS_REQUEST:
        return {
          ...state,
          loading : true
        };
      case GET_MENUS_RESPONSE:
        return {
            ...state,
            loading : false,
            menus : {                
                items: [...action.menus]
            }
        };
      default:
        return state;
    }
};
  
export default restaurantsList;