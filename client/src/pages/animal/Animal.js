import { useState } from "react"
import { useParams } from "react-router"

export default function Animal(){
    const {id} = useParams()
    const [detalle, setDetalle] = useState({})

/*     useEffect(()=>{
        axios.get("localhost:3001/animals/"+id)
        .then((data)=>setDetalle(data.data))
    }) */

    useEffect(()=>{
        axios.get("localhost:3001/animals/"+id)
        .then((data)=>setDetalle(data.data))
    })
    return <div>
        <h1>Animal</h1>
        <div>{detalle.nombre}</div>
        <div>{detalle.raza}</div>
        <div>{detalle.edad}</div>

    </div>
}