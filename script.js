document.addEventListener("DOMContentLoaded", function () {


    // Cambiar título principal

    const titulo = document.querySelector("header h1");
    titulo.textContent = "Energía eolica. La fuerza del viento impulsando el futuro 🚀";



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

    // config csv

  
   // Cargar y mostrar CSV


const inputCSV = document.getElementById("csv1");
const botonCargar = document.getElementById("cargarCSV");
const botonEliminar = document.getElementById("eliminarCSV");
const tablaCSV = document.getElementById("tablaCSV");

botonCargar.addEventListener("click", function(){

    const archivo = inputCSV.files[0];

    if(!archivo){
        alert("Seleccione un archivo CSV");
        return;
    }

    const lector = new FileReader();

    lector.onload = function(e){

        const contenido = e.target.result;

        const filas = contenido.split("\n").slice(0,11);

        let tabla = "<table>";

        filas.forEach((fila,i)=>{

            const columnas = fila.split(",");

            tabla += "<tr>";

            columnas.forEach(col=>{
                if(i===0){
                    tabla += `<th>${col}</th>`;
                }else{
                    tabla += `<td>${col}</td>`;
                }
            });

            tabla += "</tr>";

        });

        tabla += "</table>";

        tablaCSV.innerHTML = tabla;

    };

    lector.readAsText(archivo);

});



// Eliminar CSV cargado


botonEliminar.addEventListener("click", function(){

    inputCSV.value = "";
    tablaCSV.innerHTML = "";

    alert("Archivo eliminado. Puedes cargar otro.");

});



});