import { useState } from 'react';
import './App.css';
import Resultado from './Resultado'


function Jogo(prop) {
  console.log(prop.sorteado)

  const [chute, salvachute] = useState(0)
  const [resultado, salvaresultado] = useState()

  const salvatentativa = (evento) => {
    if (evento.target.value > 0) {
      salvachute(parseInt(evento.target.value))
    }
  }
  
  const adivinha = () => {
    if(chute == prop.sorteado){
      salvaresultado(1)
    }
    else if (chute > prop.sorteado){
      salvaresultado(2)
    }
    else{
      salvaresultado(3)
    }
  }

  return (
    <div className="input-numeros">
    <h3> Digite o número para adivinhar </h3>
    <input type='number' onChange={salvatentativa} value={chute}></input>   
    <button onClick={adivinha}>Verificar!</button>
    {resultado && <Resultado condicao={resultado} />}
    </div>
  );
}

export default Jogo;
