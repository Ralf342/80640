import {Box,Button,TextField} from "@mui/material";
import axios  from "axios";
import { useState } from "react";

function Formulario (props){
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState ({
        nombre: '',
        password: ''
    })

    const hacerPeticion = async() => {
        try {
            const response = await axios.get('https://localhost:4567/ruta1')
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }

    const procesarFormulario = async(evento) =>{
        evento.preventDefault()
        console.log("datos recuperados del formulario: ", datosFormulario)
        setCargando(true)
        try{
            const response = await hacerPeticion()
            //console.log(res)
            setCargando(false)
            //validar el formulario contra lo del backend
            if(datosFormulario.nombre === response.alumno){
                console.log('ok el usuario existe')
            }else{
                console.log('El usuario no existe')
            }
        }catch(error){
            console.log('error', error)
            setCargando(false)
        }
    }

    const cambiosformulario = (evento) =>{
        const {name, value} =evento.target
        setDatosFormulario ({ ...datosFormulario, [name]:value})
    }

    return(
        <>
          <form onSubmit={ procesarFormulario }>
            <h1>Inicio de Sesión </h1>
            <Box m={5}>
                <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosformulario} name="nombre" value={datosFormulario.nombre}></TextField>
            </Box>
            <Box m={5}>
                <TextField label="Contraseña:" variant="outlined" type="password" fullWidth onChange={cambiosformulario} name="password" value={datosFormulario.password}></TextField>
            </Box>
            <Box m={5}>
                <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}> Iniciar Sesión</Button>
            </Box>
            </form>  
        </>
    )
}
export default Formulario