/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

export const Header = ({presupuesto,setPresupuesto, isValid, setIsValid}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValid ? (
                <ControlPresupuesto presupuesto={presupuesto}/>
            ) :(
                <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} setIsValid={setIsValid}/>
            )}
        </header>
    )
}
