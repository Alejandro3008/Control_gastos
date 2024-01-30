/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CerrarBtn from '../assets/cerrar.svg';
export const Modal = ({setModal,animarModal,setAnimarModal}) => {
    const [nombre,setNombre] = useState('');
    const ocultarModal = () =>{
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        },400)
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal}/>
            </div>
            <form className={`formulario ${animarModal ? " animar" : "cerrar" }`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto:</label>
                    <input type='text' placeholder='Añade el nombre del gasto' id='nombre'/>
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad:</label>
                    <input type='number' placeholder='Añade la cantidad' id='cantidad'/>
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    <select id='categoria'>
                        <option value=""> --- Seleccione ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type='submit' value="Añadir gasto"/>
            </form>
        </div>
    )
}
