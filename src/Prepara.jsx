import { useState } from 'react';
import './App.css';
import Jogo from './Jogo';

function Prepara() {

  const [inicio, salvainicio] = useState(0)
  const [fim, salvafim] = useState(0)
  const [invalido, setinvalido] = useState(false)
  const [numero, numerosorteado] = useState()

  const verificainicio = (evento) => {
    if (evento.target.value >= 0){
      salvainicio(parseInt(evento.target.value))}

  }

  const verificafim = (evento) => {
    if (evento.target.value >= 0){
      salvafim(parseInt(evento.target.value))}
  }

  const geranumeroaleatorio = () => {
    numerosorteado(Math.floor(Math.random() * (fim - inicio)) + inicio)
  }

  const verificanumero = () => {
    if (inicio > fim){
      setinvalido(true)
      salvainicio(0)
      salvafim(0)
    }
    else {
      setinvalido(false)

      geranumeroaleatorio()
    }

  }

  return (
    <div className="input-numeros">
    <h4>Seja bem-vindo ao jogo de adivinhação!</h4>
    <h4>Digite um intervalo de números para jogar ...</h4>
    <div className="linha-entrada">
    <h3> de </h3>
    <input type='number' onChange={verificainicio} value={inicio} ></input>
    <h3> até </h3>
    <input type='number' onChange={verificafim} value={fim}></input>
    </div>
    {invalido && <h4> Digite um intervalo de números válidos </h4>}
    <button onClick={verificanumero}>Iniciar!</button>
    {(numero && !invalido) && <Jogo sorteado={numero}/> }
    </div>
 
  );
}

export default Prepara