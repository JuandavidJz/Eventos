document.addEventListener("keyup", function(event) {
    const teclaPresionada = event.key;
    document.getElementById("teclaPresionada").innerText = "Tecla presionada: " + teclaPresionada;
});
