            const evento = document.getElementById("formulario")
            formulario.addEventListener("click", evento =>{
                evento.preventDefault()
                let u = document.getElementById("Usuario").value
                let p = document.getElementById("Contraseña").value
                alert(u + p)
            })
            
        