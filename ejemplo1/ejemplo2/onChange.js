function actualizarTexto() {
    var campoInput = document.getElementById("inputField");
    var elementoTexto = document.getElementById("displayText");
    elementoTexto.textContent = "El valor cambiado es: " + campoInput.value;
  }
  
  