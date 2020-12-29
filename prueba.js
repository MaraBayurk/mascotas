import { useEffect, useState } from "react";
import cardAnimal from "cardAnimal"

function Home(){
    const [animales, setAnimales] = useState([])

    useEffect(()=>{
        "llamada a la api para traer info de todos los animales"
        "traemos un array con objetos animales"
        setAnimales("con lo que traemos de la BD")
        axios.get("localhost:3001/animals/")
        .then(data => setAnimals(data.data))
    })

    return(
        <>
        {animales.map((elemento,index)=>{
            <cardAnimal id={index} nombre={elemento.nombre} especie={elemento.especie} />
        })}
        <Link to={"/animals/"+0} > 
        <div> zeus </div>
        <div> perro </div>
        </Link>

        <Link to={"/animals/"+1} > 
        <div> Luna</div>
        <div> gato </div>
        </Link>

        </>

    )
}