// ejemplo de como hacer llamada a la base de datos y agregar un boton
// en el que muestre como trae la informacion.

import axios from "axios"
export default function Home(){
    function handleBd(){
        axios.get("http://localhost:3001/animals")
        .then(data=>console.log(data.data))
    }

    return <div>
        <h1>Home</h1>
        <h2>mara valentina</h2>
        <h3>mamamama</h3>
        <button onClick={handleBd} >BASE DE DATOS</button>
    </div>
}