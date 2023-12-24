import './Cupom.css'

import { useContext } from 'react';
import { CartContext } from '../context/CartApi';

function Cupom({nome, desc, valor, classe}){

    const {totalDaCompra, quantidadeDeItens, setDivDesconto, setValorDesconto} = useContext(CartContext)

    function aplicarDesconto(){
        switch(valor){
            case 5: if(totalDaCompra > 129 || quantidadeDeItens >= 3){
                setDivDesconto(false)
                setValorDesconto(valor)
            } else{alert("Sua compra deve ultrapassar R$129 ou ter pelo menos três itens no carrinho para reivindicar esse desconto")}
            break;
            case 10: if(totalDaCompra > 259){
                setDivDesconto(false)
                setValorDesconto(valor)
            } else{alert("Sua compra deve ultrapassar R$259,00 para reivindicar o desconto")}
            break;
            case 15: if(quantidadeDeItens >= 5){
                setDivDesconto(false)
                setValorDesconto(valor)
            } else{alert("Você deve ter cinco ou mais itens no carrinho para reivindicar esse desconto")}
            break;
            case 35: if(quantidadeDeItens >= 10){
                setDivDesconto(false)
                setValorDesconto(valor)
            } else{alert("Você deve ter dez ou mais itens no carrinho para reivindicar esse desconto")}
            break;
        }
    }

    return(
        <div className={`Cupom ${classe}`} onClick={aplicarDesconto}>
            <h3>{nome}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Cupom