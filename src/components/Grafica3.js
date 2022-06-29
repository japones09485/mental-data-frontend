import React, {useEffect,useState} from "react"; 
import { info } from "../funciones/funciones";
import btn3 from '../assets/images/btn_enf_cronicas-1.png';
import Menu from "../components/Menu";

const Grafica3 = () =>{
    const [data, setdata] = useState(null)

    useEffect(()=>{
        info(setdata)
    },[])

    return(
        <>
        <h1>hola mundo</h1>
            {info != null ? ('Si hay informacion')
            :('No hay informacion')}
        </>
    )
}



export default Grafica3;