import "./restaurantCard.css";

export const RestaurantCard = (props) => {
    const {
        name,
        phone,
        onlineEnabled,
        id
    } = props.restaurant;

    console.log(`Render Resaurant Card with id ${id}`);
    
    return (
        <div className="restaurant-card loading">
            <div>Carrusel</div>
            <form>
                <div>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                onChange={() => console.log("make order")}
                            />
                            <span>Nombre plato</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 2</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 3</span>
                        </li>
                    </ul>
                </div>
                <div className="restaurant-info">
                    <span>{name}</span>
                    <span>Teléfono {phone}</span>
                    {onlineEnabled &&
                        <button>Pedir</button>
                    }
                </div>
            </form>
        </div>
    )

    /*
    return (
        <div className="restaurant-order">									
            <form>                    				                    
                <p><span>Pedido Num.: </span></p>
                <p><span>Fecha/Hora Pedido: </span>20/09/21 - 11:00</p>                    
                <p><span>Fecha/Hora Entrega: </span>20/09/21 - 13:00</p>                                                           
                <p><span>Estado: </span>Pendiente</p>
                <span>Detalle pedido: </span>
                <span>{name}</span>
                <ul>
                    <li>Plato A</li>							
                    <li>Plato A</li>	
                </ul>
                <span>{name}</span>
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
    )
    */
}