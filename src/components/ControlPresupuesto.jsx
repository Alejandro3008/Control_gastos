/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const ControlPresupuesto = ({presupuesto}) => {
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>  
                <p>Grafica aqui</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
                <p>Disponible: <span>{formatearCantidad(0)}</span></p>
                <p>Gastado: <span>{formatearCantidad(0)}</span></p>
            </div>
        </div>
    )
}
