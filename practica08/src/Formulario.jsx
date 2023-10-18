// import MiFieldSet from "./MiFieldSet"
import DatosPersonales from "./DatosPersonales"
import DatosEscolares from "./DatosEscolares"
function formulario (){
    return(
        <>
        <form action="">
        {/* <MiFieldSet titulo="Datos personales" txt1="Nombre" txt2="Contraseña"></MiFieldSet>
        <MiFieldSet titulo="Datos Escolares" txt1="Carrera: " txt2="Semestre"></MiFieldSet> */}
        <DatosPersonales></DatosPersonales>
        <DatosEscolares></DatosEscolares>
        <input type="submit" value="Enviar datos"></input>
        </form>
        </>
    )
}

export default formulario