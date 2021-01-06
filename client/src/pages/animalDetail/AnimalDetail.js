import { useState } from "react"
import { useParams, useEffect } from "react"
import axios from "axios"

export default function AnimalDetail(){
    const {id} = useParams()
    const [detalle, setDetalle] = useState({})

useEffect(()=>{
        axios.get("localhost:3001/animals/"+id)
        .then((data)=>setDetalle(data.data))
    })

/*     useEffect(()=>{
        axios.get("localhost:3001/animals/"+id)
        .then((data)=>setDetalle(data.data))
    }) */

    return <div>
        <h1>Animal</h1>
        <div>{detalle.name}</div>
        <div>{detalle.species}</div>
        <div>{detalle.age}</div>
        <div>{detalle.description}</div>
        <div>{detalle.size}</div>
        <div>{detalle.adopted}</div>

    </div>
}