import { useEffect, useState } from "react";
import axios from 'axios';
import { cardAnimal } from "../../components/cardAnimal/cardAnimal";

 function Home(){
    const [animales, setAnimales] = useState([])

    useEffect(()=>{
        //"llamada a la api para traer info de todos los animales"
        //"traemos un array con objetos animales"
        //setAnimales(/*"con lo que traemos de la BD"*/)
        axios.get("http://localhost:3001/animals/")
        .then(data => setAnimales(data.data))
    });

    return(
        <>
        {animales.map((elemento,index)=>{
            <cardAnimal
            id={index} 
            nombre={elemento.name} 
            especie={elemento.species} 
            adopted={elemento.adopted} 
            />
        })}
        </>

    )
}
export default Home;