function loadExercise(exerciseName) {
    // seleccionamos el el contenedor para el ejercicio
    const exerciseContainer = document.getElementById('exercise-container')
    // Cargamos el contenido del ejercicio de forma asncrona
    fetch(`components/${exerciseName}.html`)
        .then(response => response.text())
        .then(html => {
            console.log("estoy funcionando");
            // insertamos el contenido del ejercicio en el contenedor
            exerciseContainer.innerHTML = html
        })
        .catch(error => console.error('error al cargar el ejercicio:', error));
}