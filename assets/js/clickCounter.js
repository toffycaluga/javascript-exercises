// clickcounter js


let contadorClicks = 0;

// se hace una funcion para aumentar en el contador
function aumentar() {
    const clickCount = document.getElementById('clickCount');

    // aumentamos en 1 el contador
    contadorClicks++;

    // Aqui hay 2 maneras de concatenar la variable y el string a utilizar

    // clickCount.textContent = contadorClicks + " clicks";

    clickCount.textContent = `${contadorClicks} clicks`;

}