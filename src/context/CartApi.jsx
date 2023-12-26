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

    //Gerando Número Inteiro Aleatorio 
    
    function gerarNumero(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
    
      function gerarCategoria(){
        const num = gerarNumero(1,5)
        if(num == 1){
          return "Eletrônico"
        } 
        else if(num == 2){
          return "Eletrôdomestico"
        } 
        else if(num == 3){
          return "Vestuário"
        } 
        else if(num == 4){
          return "Acessório"
        } 
        else if(num == 5){
          return "Brinquedo"
        } else{
          return "Categoria"
        }
      }

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
        quantidadeDeItens,

        gerarNumero,
        gerarCategoria
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}