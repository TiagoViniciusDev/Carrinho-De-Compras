import './Produto.css'
import ProdutoCarrinho from './ProdutoCarrinho';
import Cupom from './cupom';

import { useContext } from 'react';
import { CartContext } from '../context/CartApi';

import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

function Produto(){

    const {cartItens, divDesconto, setDivDesconto, valorDesconto, totalDaCompra, quantidadeDeItens} = useContext(CartContext)

    function ocultarCupons(){
        setDivDesconto(false)
    }

    return(
        <div className='Produto'>
            <div className='produtosNoCarrinho'>
                {Object.keys(cartItens).length == 0 &&(
                    <div className='carrinhoVazio'>
                        <h3>Seu Carrinho está vazio</h3>
                        <p>Adicione produtos clicando no botão adicionar produto</p>
                    </div>
                )}
                {cartItens.map((data) => (
                    <ProdutoCarrinho key={data.id} data={data}/>
                ))}
            </div>
            <div className='preçoTotal'>
                <header>
                    <h3>Preço</h3>
                    <h3>Total</h3>
                </header>
                <div className='preço'>
                    <p className={`${valorDesconto == 0 ? "displayNone" : ""}`}>R$ {totalDaCompra},00 </p>
                    <div className='preçoFinal'>
                        <p>R$ {totalDaCompra*((100-valorDesconto)/100)},00</p>
                        <div className={`desconto ${valorDesconto == 0 ? "displayNone" : ""}`}>
                            <FaArrowDown />
                            <span>{valorDesconto}%</span>
                        </div>
                    </div>
                    <div className={`valorDesconto ${valorDesconto == 0 ? "displayNone" : ""}`}>
                        <p>R${totalDaCompra - totalDaCompra*((100-valorDesconto)/100)},00 de desconto</p>
                    </div>
                </div>
            </div>
            <div className={`cuponsDeDesconto ${divDesconto ? "" : "displayNone"}`}>
                <IoIosCloseCircle onClick={ocultarCupons} title='Fechar'/>
                <div className='cuponsContainer'>
                    <Cupom nome="5% OFF" desc="Válido para compras acima de R$129" valor={5} classe={totalDaCompra > 129 ? "cupomDisponivel" : "cupomIndisponivel"}/>
                    <Cupom nome="10% OFF" desc="Válido para compras acima de R$259" valor={10} classe={totalDaCompra > 259 ? "cupomDisponivel" : "cupomIndisponivel"}/>
                    <Cupom nome="5% OFF" desc="Válido para compras de 3 ou mais itens" valor={5} classe={quantidadeDeItens >= 3 ? "cupomDisponivel" : "cupomIndisponivel"}/>
                    <Cupom nome="15% OFF" desc="Válido para compras de 5 ou mais itens" valor={15} classe={quantidadeDeItens >= 5 ? "cupomDisponivel" : "cupomIndisponivel"}/>
                    <Cupom nome="35% OFF" desc="Válido para compras de 10 ou mais itens" valor={35} classe={quantidadeDeItens >= 10 ? "cupomDisponivel" : "cupomIndisponivel"}/>
                </div>
            </div>
        </div>
    )
}

export default Produto