import './App.css';


function Resultado(prop) {
  return (
    <div>
    {(prop.condicao == 1) && <h2> PARABÉNS VOCÊ ACERTOU O NUMERO </h2> }
    {(prop.condicao == 2) && <h2> SEU CHUTE FOI MAIS ALTO QUE O NÚMERO </h2> }
    {(prop.condicao == 3) && <h2> SEU CHUTE FOI MAIS BAIXO QUE O NÚMERO </h2> }
    </div>
  );
}

export default Resultado;
