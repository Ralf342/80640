const app = document.getElementById("formulario")
    const formu = (parametro) => {
        return `
        <fieldset>
            <legend>${parametro.leyenda}</legend>
                <label for="${parametro.id1}">${parametro.NombreLabel1}</label>
                <input type="text" name="${parametro.NombreCaja1}" id="${parametro.id1}">
                <label for="${parametro.id2}">${parametro.NombreLabel2}</label>
                <input type="text" ${parametro.NombreCaja2}" id="${parametro.id2}">
        </fieldset>
        `
    }
    let button = (parametros) => {
        return `
        <input type="submit" value="${parametros.nombre}" id="boton">
        `
    }
    app.innerHTML = formu({leyenda:"Información Personal", NombreLabel1:"Nombre",NombreCaja1:"Nombre",id1:"nombre",NombreLabel2:"Correo Electronico",NombreCaja2:"Correo",id2:"correo"})
    app.insertAdjacentHTML ("beforeend", formu({leyenda:"Información de Dirección", NombreLabel1:"Dirección",NombreCaja1:"Dirección",id1:"direccion",NombreLabel2:"Ciudad",NombreCaja2:"Ciudad",id2:"ciudad"}))
    app.insertAdjacentHTML ("beforeend", button({nombre:"Iniciar sesion"}))