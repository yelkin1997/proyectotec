document.addEventListener("DOMContentLoaded", function () {


    // Cambiar título principal

    const titulo = document.querySelector("header h1");
    titulo.textContent = "Energía eolica. La fuerza del viento impulsando el futuro 🚀";



    // Mensaje de bienvenida

    alert("Bienvenido a un mundo de energia limpia!");


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
        <h2>Un buque que vuelve a aprovechar el viento</h2>
        <br>
        <img id="noticia" src="img/Neol3.png" alt="noticia" width="300" height="200">
        <p>Ecopetrol contrató buque con sistema de propulsión eólica para transporte de nafta</p>
        <p>Ecopetrol anunció la contratación de una embarcación con un sistema auxiliar de propulsión eólica, que le permite a la compañía reducir las emisiones de dióxido de carbono en 49% frente a los buques tradicionales. La primera operación de esta embarcación se dio con el transporte de 300.000 barriles de nafta entre la Refinería de Cartagena y la Terminal Marítima Pozos Colorados.</p>
        <p>La petrolera explicó que el buque está compuesto por tres velas de succión "que aprovechan la fuerza del viento para generar impulso adicional, y reduce el consumo de combustible y mejorando el desempeño energético del trayecto".</p>
        <p>Para mas información, puedes consultar el articulo completo a continuación:</p>
        <p><a id="clip" href="https://www.larepublica.co/economia/ecopetrol-contrato-buque-con-sistema-de-propulsion-eolica-para-transporte-de-naftaec-4276891" target="_blank">Artículo completo</a></p>
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
        return;
        }

        if (!revTelefono.test(telefono)) {
        alert("Ingrese un número de teléfono válido (10 dígitos).");
        return;
        }


        alert("Gracias por tu mensaje, " + nombre + ". Te responderemos pronto.");

        formulario.reset();
    });




});