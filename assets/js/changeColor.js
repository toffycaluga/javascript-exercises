// change color js

function cambiaColor() {


    const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);


    const containerChangeColor = document.getElementById('container-change-color')


    containerChangeColor.style.backgroundColor = colorAleatorio;

}





