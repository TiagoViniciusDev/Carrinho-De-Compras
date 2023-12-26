//Desabilitando seleção de texto por duplo clique

document.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
      e.preventDefault();
    }
  }, false);
