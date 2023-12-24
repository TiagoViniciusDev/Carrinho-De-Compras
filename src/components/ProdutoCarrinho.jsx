import './ProdutoCarrinho.css'

import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

import { useContext, useState } from 'react';
import { CartContext } from '../context/CartApi';

function ProdutoCarrinho({data}){

    const {cartItens, setCartItens, setQuantidadeContext, setValorDesconto} = useContext(CartContext)

    const [quantidade, setQuantidade] = useState(data.quantidade) //Precisei usar state porque o texto html não estava atualizando só com a mudança do valor do objeto


    function aumentarQuantidade(){
        setQuantidade(quantidade + 1)
        setQuantidadeContext(quantidade)
        var itemID = cartItens.filter(elemento => elemento.id == data.id)
        itemID[0].quantidade = data.quantidade + 1
    }

    function diminuirQuantidade(){
        setValorDesconto(0) //Removendo qualquer desconto
        if(quantidade > 1){
            setQuantidade(quantidade - 1)
            setQuantidadeContext(quantidade)
            var itemID = cartItens.filter(elemento => elemento.id == data.id)
            itemID[0].quantidade = data.quantidade - 1
        } else{
            removerProduto()
        }
    }

    function removerProduto(){
      setCartItens(cartItens.filter(elemento => elemento.id !== data.id))
      setValorDesconto(0) //Removendo qualquer desconto
    }

    return(
        <div className='produtoCarrinho'>
        <div className='coluna1'>
            <CiCircleRemove className='removerProduto' onClick={removerProduto} title='Remover'/>
            <div className='imgProduto'></div>
            <div className='infoProduto'>
                <h4>{data.nomeProduto}</h4>
                <p>{data.categoria}</p>
            </div>
        </div>
        <div className='coluna2'>
            <p>R$ {data.preço},00</p>
        </div>
        <div className='coluna3'>
            <IoIosRemove onClick={diminuirQuantidade}/>
            <p>{quantidade}</p>
            <IoIosAdd onClick={aumentarQuantidade}/>
        </div>
        <div className='coluna4'>
            <p>R$ {(quantidade)*(data.preço)},00</p>
        </div>
     </div>  
    )
}

export default ProdutoCarrinho