
import './home.css';

const ElementoLista = (props) => {
	const {
		numero
	} = props;
	
	return (
		<li>{'Componente: ' + numero}</li>
	)
}

export const Home = () => {
	const nombre = "Vero";
	const value = true;
	const numeros = [1,2,3,4,5];
	return (
		<div className="home">
			Hola {nombre};
		    {'Hola Dos - ' + nombre};
			{!value &&
				<div>No estas logueado</div>
			}
			<ul>
				{numeros.map((numero, i) =>							
					<ElementoLista numero={numero} key={i} />
				)}
			</ul>
		</div>
    );
}