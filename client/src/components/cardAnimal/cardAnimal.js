import { Link } from "react-router-dom";

export function cardAnimal (props){

    return(
        <Link to={"/animals/"+props.id} > 
        <div> {props.name}</div>
        <div> {props.species} </div>
        </Link>
    )
}