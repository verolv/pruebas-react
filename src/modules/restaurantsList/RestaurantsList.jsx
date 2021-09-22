
//import React, {useEffect, useState} from 'react';
//import userEvent from '@testing-library/user-event';

//Hook de estado
import React, { useEffect, useMemo, useState } from 'react';
import { getMenus } from "./actions";
//import { getPedidos } from './actions';
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import Header from './components/header/Header';
import "./restaurantsList.css";

//Conectar el componente con redux y lanzar la carga del menu a traves del dispatch de la accion
import { connect } from "react-redux";

const ITEMS_PER_PAGE = 15;

const RestaurantsList = (props) => {

    const {
      userInfo,
      loadMenus,
      menus,
      loading
    } = props;
      
    //const [loading,setLoading] = useState(true);
    //const [menus, setMenus] = useState([])
    const [reload, setReload] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
      loadMenus (0, ITEMS_PER_PAGE);
      /*
        getMenus().then(menusResponse => {
            setMenus(menusResponse);
            setLoading(false);
        });
        */
    }, []);
   
    /*
     //Reload
    useEffect(() => {
        if (reload) {
          setMenus([]);
          getMenus().then(menusResponse => {
            setMenus(menusResponse);
            setLoading(false);
            setReload(false);
          });
        }
      }, [reload]);
      */
        
    //const menus = getMenus();
    //const pedidos = getPedidos();
    //debugger;

    //console.log("Render RestaurantList: ", reload);

    const Items = React.memo(() => <>
        {menus.items.map(menuItem =>
            <RestaurantCard restaurant={menuItem} key={menuItem.id} />            
        )}
    </>, [menus]);
  
    return (
      <>
        <Header />
        <div>{`Hola ${userInfo ? userInfo.name : ''}!!`}</div>
        <div>
          Contador: {count}
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
        <button onClick={() => setReload(true)}>Recargar</button>
        <div className="restaurants">
          {loading &&
            <div className="loading">Cargando..</div>
          }
          
          {!loading && <Items />}
          
        </div>
      </>
    );

    /*
    return (        
        <div className="restaurantApp">
            <div className="header">	                   
                <span className="logo">                                       
                </span>
                <span className="title">Inicio</span>			
            </div>
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>Contador</button>
            </div>
            <button onClick={() => setReload(true)}>Reload</button>            
            {!loading && menus.map(menuItem =>
                <div className="restaurant-order">									
                    <form>                    				                    
                        <p><span>Pedido Num.: </span>{menuItem.key}</p>
                        <p><span>Fecha/Hora Pedido: </span>20/09/21 - 11:00</p>                    
                        <p><span>Fecha/Hora Entrega: </span>20/09/21 - 13:00</p>                                                           
                        <p><span>Estado: </span>Pendiente</p>
                        <span>Detalle pedido: </span>
                        <span>{menuItem.key}</span>
                        <ul>
                            <li>Plato A</li>							
                            <li>Plato A</li>	
                        </ul>
                        <span>{menuItem.key}</span>
                        <ul>						
                            <li>Plato A</li>							
                            <li>Plato A</li>	
                        </ul>																	
                        <div className="estado">						
                            <input type="checkbox"></input>
                            <label>En curso</label>
                            <input type="checkbox"></input>
                            <label>Cancelado</label>
                            <input type="checkbox"></input>
                            <label>Listo</label>
                            <input type="checkbox"></input>
                            <label>Entregado</label>
                        </div>
                        <button type="submit">Actualizar estado</button>					                    
                    </form>                    
                </div>
            )}            
        </div>        
    );
    */  
};

//Conectamos con Redux
export default connect(
  store => ({
    menus: store.restaurantsList.menus,
    loading: store.restaurantsList.loading,    
  }),
  dispatch => ({     
    loadMenus: (start, count) => dispatch(getMenus(start, count))
  })
)(RestaurantsList);

