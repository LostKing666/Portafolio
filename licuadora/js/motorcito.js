var estadoLicuadora = "apagada";
var sonidoDeLucuador = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlDeLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida"
        hacerbrbrbr();
        licuadora.classList.add("active");
        console.log("mee encendiron")
    } else {
        estadoLicuadora = "apagada"
        hacerbrbrbr();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

function hacerbrbrbr() {
    if (sonidoDeLucuador.paused) {
        botonLicuadora.play();
        sonidoDeLucuador.play();

    } else {
        botonLicuadora.play();
        sonidoDeLucuador.pause();
        sonidoDeLucuador.currentTime = 0;
    }
}