import { Link } from "react-router-dom";

function cardAnimal (props){

    return(
        <Link to={"/animals/"+props.id} > 
        <div> {props.nombre}</div>
        <div> {props.especie} </div>
        </Link>
    )
}