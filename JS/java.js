const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const pantallaPregunta = document.getElementById('pantalla-pregunta');
const pantallaRegalo = document.getElementById('pantalla-regalo');
const sobre = document.getElementById('sobre');

// Frases divertidas que se activarán cuando intente esquivar con el No
const frasesTrampa = [
    "¡Ups! Intenta otra vez 😜",
    "Esa opción está rota ❤️",
    "¡Obligatorio decir que sí!",
    "No se acepta un No por respuesta",
    "Prueba el botón verde de al lado"
];

// Función mágica para teletransportar el botón No
function huirBotonNo() {
    // Calculamos posiciones aleatorias restando el tamaño del botón para que no se salga de la pantalla
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 20);
    
    btnNo.style.position = 'fixed'; // Fixed asegura que se mueva por toda la ventana visible
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

    // Cambiar el texto aleatoriamente para hacerlo interactivo
    const fraseAleatoria = frasesTrampa[Math.floor(Math.random() * frasesTrampa.length)];
    btnNo.innerText = fraseAleatoria;
}

// Eventos para PC y móviles
btnNo.addEventListener('mouseenter', huirBotonNo);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita clics accidentales en smartphones
    huirBotonNo();
});

// Cuando por fin presiona Sí
btnSi.addEventListener('click', () => {
    pantallaPregunta.classList.add('oculto');
    pantallaRegalo.classList.remove('oculto');
});

// Manejo del sobre al hacer clic
sobre.addEventListener('click', () => {
    sobre.classList.toggle('abierto');
});