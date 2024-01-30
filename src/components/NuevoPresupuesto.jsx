/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Message } from './Message';
import React from 'react'

export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValid}) => {

    const [error,setError] = useState('');
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!presupuesto || Number(presupuesto)<0){
                setError('No es un presupuesto valido!')
                return
        }

        setError('')
        setIsValid(true)

    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label htmlFor="presupuesto">Definir presupuesto</label>
                    <input id='presupuesto' type="number" className='nuevo-presupuesto' placeholder='Añade tu presupuesto' value={presupuesto} onChange={e => setPresupuesto(Number(e.target.value))}/>
                </div>
                <input type="submit" value="Añadir"/>
                {error && <Message tipo="error">{error}</Message>}
            </form>
        </div>
    )
}
