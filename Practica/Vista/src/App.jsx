import { useState } from 'react';
import './App.css'
import axios from "axios";


function Formulario() {
  const [cargando, setCargando] = useState(false);
  const [datosFormulario, setDatosFormulario]= useState({
    nombre:'',
    apellido:''
  });

  const hacePeticion=async()=>{
    try{
      const respuesta=await axios.get('http://localhost:4567/ruta2',{params:datosFormulario});  
      return respuesta.data;
    }catch(error){
      throw error;
    }
  }

  const hacePeticionDatos=async()=>{
    try{
      const respuesta=await axios.get('http://localhost:4567/ruta3',{params:datosFormulario});  
        return respuesta.data;
    }catch(error){
      throw error;
    }
  }

  const hacerPeticionBorrar=async()=>{
    try{
      const respuesta=await axios.get('http://localhost:4567/ruta4',{params:datosFormulario});  
      return respuesta.data;
    }catch(error){
      throw error;
    }
  }

  const hacerPeticionModificar=async()=>{
    try{
      const respuesta=await axios.get('http://localhost:4567/ruta5',{params:datosFormulario});  
      return respuesta.data;
    }catch(error){
      throw error;
    }    
  }

  const procesarFormulario=async(e)=>{
    e.preventDefault();
    setCargando(true);
     try{
      const respuesta=await hacePeticion();
      setCargando(false);
      let nombre;
      let apellido;
      if(respuesta){
        nombre=respuesta.nombre;
        apellido=respuesta.apellido;
      }
      console.log("Datos enviados: ",nombre," Apellid: ",apellido);
    }catch(error){
    setCargando(false);
    }
  }

  const cambiosFormulario=(evento)=>{
    const {name,value} =evento.target
    setDatosFormulario({
        ...datosFormulario, 
        [name]: value   
    })
}

const recuerarDatos=async(evento)=>{
evento.preventDefault();
  const respuesta=await hacePeticionDatos();
  if(respuesta){
    console.log(" DATOS RECUPERADO Nombre: ",respuesta.nombre,"Apellido ",respuesta.apellido);
  }
}

const eliminarDatos=async(evento)=>{
evento.preventDefault();
  const respuesta=await hacerPeticionBorrar();
  if(respuesta){
    console.log(" DATOS ELIMINADOS Nombre: ",respuesta.nombre,"Apellido ",respuesta.apellido);
  }
}

const modificarDatos=async(evento)=>{
  evento.preventDefault();
  const respuesta=await hacerPeticionModificar();
  if(respuesta){
    console.log(" DATOS MODIFICADOS Nombre: ",respuesta.nombre,"Apellido ",respuesta.apellido);
  }
}
  return(
    <>
    <form onSubmit={procesarFormulario}>
    <label htmlFor="nombre">Nombre</label>
    <input type="text" name="nombre" id="" onChange={cambiosFormulario} />
    <label htmlFor="apellido">Apellido</label>
    <input type="text" name="apellido" id="" onChange={cambiosFormulario}/>
    <input type="submit" value="Enviar" disabled={cargando}/>
    <button id='envio' onClick={recuerarDatos}>Recuperar</button>
    <button onClick={eliminarDatos}>Eliminar</button>
    <button onClick={modificarDatos}>Modificar</button>
    </form>
    </>   
  )
}
export default Formulario