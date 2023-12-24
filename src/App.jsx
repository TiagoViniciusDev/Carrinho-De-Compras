import './App.css'
import { gerarNumero } from './index.js';
import { gerarCategoria } from './index.js';
import Produto from './components/Produto'

import { FaCartPlus } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { TbDiscountCheckFilled } from "react-icons/tb";

import { useContext } from 'react';
import { CartContext } from '../src/context/CartApi';

import { useNavigate } from 'react-router-dom';

function App() {

  const {cartItens, setCartItens, setDivDesconto, totalDaCompra} = useContext(CartContext)

  function adicionarProduto(){
    setCartItens([...cartItens, {
      id: cartItens.length*10,
      img: "../imagens/celular.jpg",
      nomeProduto: "Nome Do Produto",
      categoria: gerarCategoria(),
      preço: gerarNumero(10,50)*10,
      quantidade: 1,
    }])
  }

  function mostrarCupons(){
    setDivDesconto(true)
  }

  const navigate = useNavigate()

  function FinalizarCompra(){
    if(totalDaCompra == 0){
      alert("Você não tem itens no carrinho")
    } else{navigate("Finalizar-Compra")}
  }

  return (
    <div className="App">
      <div className="carrinhoDeCompras">
        <header>
          <h2>Seu Carrinho</h2>
        </header>
        <div className="carrinhoTopo">
          <p>Produto</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Valor</p>
        </div>
        <div className='produtosContainer'>
          <Produto />
        </div>
        <div className='botões'>
          <button onClick={adicionarProduto}>
            Adicionar Produto
            <FaCartPlus />
          </button>
          <button onClick={mostrarCupons}>
            Cupom de Desconto
            <TbDiscount2 />
          </button>
          <button onClick={FinalizarCompra}>
            Finalizar Compra
            <TbDiscountCheckFilled />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
