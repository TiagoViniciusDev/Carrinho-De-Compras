//Desabilitando seleção de texto por duplo clique

document.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
      e.preventDefault();
    }
  }, false);

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

  export {gerarNumero, gerarCategoria}