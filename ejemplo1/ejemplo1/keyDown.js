window.onload = function() {

    var tecla = document.getElementById("Texto");
    document.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            alert("Clickeaste el Enter");
        }
    });
}