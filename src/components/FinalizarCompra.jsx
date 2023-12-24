import './FinalizarCompra.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartApi';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function FinalizarCompra(){

    const {valorDesconto, totalDaCompra} = useContext(CartContext)

    const navigate = useNavigate()

    function IrParaCarrinho(){
        navigate("/")
    }

    return(
        <div className='FinalizarCompra'>
            <h2>Compra Finalizada</h2>
            <p>Sua compra no valor de R$ {totalDaCompra*((100-valorDesconto)/100)},00 foi feita com sucesso</p>
            <button onClick={IrParaCarrinho}>
                Voltar ao carrinho
                <FaShoppingCart />
            </button>
        </div>
    )
}

export default FinalizarCompra