function loadExercise(exerciseName) {
    // seleccionamos el el contenedor para el ejercicio
    const resultContainer = document.getElementById('result-container')

    // Cargamos el contenido del ejercicio de forma asncrona
    fetch(`exercises/${exerciseName}.html`)
        .then(response => response.text())
        .then(html => {
            // insertamos el contenido del ejercicio en el contenedor
            resultContainer.innerHTML = html
        })
        .catch(error => console.error('error al cargar el ejercicio:', error));


}

