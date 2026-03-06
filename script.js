document.addEventListener("DOMContentLoaded", function () {


    // Cambiar título principal

    const titulo = document.querySelector("header h1");
    titulo.textContent = "Mundo Digital Interactivo 🚀";



    // Mensaje de bienvenida

    alert("Bienvenido a Mundo Digital");


    //  Cambiar color del header al hacer clic

    const header = document.querySelector("header");

    header.addEventListener("click", function () {
        header.style.backgroundColor = "#006399";
    });


 
    //  Botón para ocultar/mostrar noticias

    const botonNoticias = document.createElement("button");
    botonNoticias.textContent = "Mostrar / Ocultar Noticias";
    botonNoticias.style.margin = "20px";

    const seccionNoticias = document.getElementById("Noti");

    seccionNoticias.before(botonNoticias);

    botonNoticias.addEventListener("click", function () {
        if (seccionNoticias.style.display === "none") {
            seccionNoticias.style.display = "grid";
        } else {
            seccionNoticias.style.display = "none";
        }
    });


    //  Agregar noticia dinámica

    const nuevaNoticia = document.createElement("article");

    nuevaNoticia.innerHTML = `
        <h2>Nueva Aplicación Recomendada</h2>
        <p>Hemos probado una nueva app que optimiza el rendimiento del sistema y mejora la seguridad.</p>
        <ul>
            <li>Interfaz sencilla</li>
            <li>Mayor velocidad</li>
            <li>Protección mejorada</li>
        </ul>
    `;

    seccionNoticias.appendChild(nuevaNoticia);



    //  Validación del formulario

    const formulario = document.getElementById("Formulario");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const motivo = document.getElementById("motivo").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        // Expresiones regulares
        const revCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const revTelefono = /^[0-9]{10}$/;

        if (nombre === "" || correo === "" || telefono === "" || motivo === "" || mensaje === "") {
        alert("Por favor complete todos los campos.");
        return;
        }

        if (!revCorreo.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        eturn;
        }

        if (!revTelefono.test(telefono)) {
        alert("Ingrese un número de teléfono válido (10 dígitos).");
        return;
        }


        alert("Gracias por tu mensaje, " + nombre + ". Te responderemos pronto.");

        formulario.reset();
    });

});