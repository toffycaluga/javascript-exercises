// char counter js
function countCharacters() {


    //seleccionamos el input
    const input = document.getElementById("textInput");


    //seleccionamos el charCount
    const charCount = document.getElementById("charCount");


    //cambiamos el contenido del span id=charCount por la cantidad de los caracteres del input
    charCount.textContent = input.value.length;
}
