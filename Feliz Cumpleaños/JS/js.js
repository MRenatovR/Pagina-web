document.addEventListener('DOMContentLoaded', function () {
    crearConfeti();
});

function crearConfeti() {
    for (var i = 0; i < 100; i++) { 
        var confeti = document.createElement('div');
        confeti.className = 'confetti';
        confeti.style.backgroundColor = generarColorAleatorio(); 
        confeti.style.left = Math.random() * window.innerWidth + 'px'
        confeti.style.animationDelay = Math.random() * 5 + 's'; 
        document.body.appendChild(confeti);
    }
}

function generarColorAleatorio() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function accionBoton3() {
    var cancion = document.getElementById('cancion');
    cancion.play();
}



document.addEventListener('DOMContentLoaded', function () {
    var dangoButton = document.getElementById('botonDango');
    var dangoImages = document.querySelectorAll('.dango-gif');
    var mensajeDiv = document.getElementById('mensaje');
    var cancion = document.getElementById('cancion');

    // Ocultar los GIFs de Dango al cargar la página
    dangoImages.forEach(function (img) {
        img.style.display = 'none';
    });

    dangoButton.addEventListener('click', function () {
        // Mostrar los GIFs de Dango
        dangoImages.forEach(function (img) {
            img.style.display = 'block';
        });

        // Reproducir la canción automáticamente
        cancion.play();

        // Mostrar el mensaje
        mensajeDiv.style.display = 'block';
    });
});