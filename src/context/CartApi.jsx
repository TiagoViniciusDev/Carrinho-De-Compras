import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartItens, setCartItens] = useState([
        {
            id: 0,
            //img: "../imagens/celular.jpg",
            nomeProduto: "Nome Do Produto",
            categoria: "Eletrônico",
            preço: 120,
            quantidade: 1
        },
        {
            id: 1,
            //img: "../imagens/celular.jpg",
            nomeProduto: "Nome Do Produto",
            categoria: "Vestuário",
            preço: 160,
            quantidade: 2
        }
    ])

    const [quantidadeContext, setQuantidadeContext] = useState()

    const [divDesconto, setDivDesconto] = useState(false)

    const [valorDesconto, setValorDesconto] = useState(0)

    const totalDaCompra = cartItens.reduce((acumulador, atual) => acumulador + (atual.preço)*(atual.quantidade),0)
    const quantidadeDeItens = cartItens.reduce((acumulador, atual) => acumulador + (atual.quantidade),0)
    

    const value = {
        cartItens,
        setCartItens,

        quantidadeContext, 
        setQuantidadeContext,

        divDesconto, 
        setDivDesconto,

        valorDesconto, 
        setValorDesconto,

        totalDaCompra,
        quantidadeDeItens
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}