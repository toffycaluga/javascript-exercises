document.addEventListener('DOMContentLoaded', function () {
    const clickCounterLink = document.getElementById('clickCounterLink');
    const changeColorLink = document.getElementById('changeColorLink');
    const charCounterLink = document.getElementById('charCounterLink');
    const htmlTab = document.getElementById('html-tab');
    const cssTab = document.getElementById('css-tab');
    const jsTab = document.getElementById('js-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const resultFrame = document.getElementById('result-frame');

    // Event listeners para los enlaces
    clickCounterLink.addEventListener('click', function (event) {
        event.preventDefault();
        loadExercise('clickCounter');
    });

    changeColorLink.addEventListener('click', function (event) {
        event.preventDefault();
        loadExercise('changeColor');
    });

    charCounterLink.addEventListener('click', function (event) {
        event.preventDefault();
        loadExercise('charCounter');
    });

    // Event listeners para las pestañas
    htmlTab.addEventListener('click', function () {
        openTab('html');
    });

    cssTab.addEventListener('click', function () {
        openTab('css');
    });

    jsTab.addEventListener('click', function () {
        openTab('js');
    });

    // Función para cargar el ejercicio
    function loadExercise(exerciseName) {
        fetch(`exercises/${exerciseName}.html`)
            .then(response => response.text())
            .then(html => {
                htmlCode.value = html;
                resultFrame.srcdoc = html;
            })
            .catch(error => console.error('Error loading exercise:', error));

        fetch(`assets/css/${exerciseName}.css`)
            .then(response => response.text())
            .then(css => {
                cssCode.value = css;
            })
            .catch(error => console.error('Error loading exercise CSS:', error));

        fetch(`assets/js/${exerciseName}.js`)
            .then(response => response.text())
            .then(js => {
                jsCode.value = js;
            })
            .catch(error => console.error('Error loading exercise JavaScript:', error));
    }

    // Función para abrir una pestaña
    function openTab(tabName) {
        // Ocultar todos los contenidos de las pestañas
        const tabContents = document.querySelectorAll('.tabcontent');
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // Desactivar todas las pestañas
        const tabLinks = document.querySelectorAll('.tablink');
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Mostrar el contenido de la pestaña seleccionada
        document.querySelector(`#${tabName}-content`).style.display = 'block';

        // Activar la pestaña seleccionada
        document.querySelector(`#${tabName}-tab`).classList.add('active');
    }
});
