import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import MiFieldSet from './MiFieldSet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App /> */}
    <MiFieldSet titulo="Datos personales" txt1="Nombre" txt2="Contraseña"></MiFieldSet>
  </React.StrictMode>,
)
