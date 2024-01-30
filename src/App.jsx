import { useState } from "react"
import { Header } from "./components/Header"
import { Modal } from "./components/Modal";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg"

function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() =>{
      setAnimarModal(true)
    },250);
  }
  return (
    <div>
      <Header 
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto} 
        isValid={isValid} 
        setIsValid={setIsValid}
      />
      {isValid && (
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto}/>
        </div>
      )}

      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal}/>}
    </div>
  )
}

export default App
