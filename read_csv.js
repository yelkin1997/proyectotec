document.addEventListener("DOMContentLoaded", function () {

    const tablaCSV = document.getElementById("tablaCSV");

    fetch("datos.csv")
        .then(response => response.text())
        .then(contenido => {

            const separador = contenido.includes(";") ? ";" : ",";

            const filas = contenido
                .split("\n")
                .map(fila => fila.trim())
                .filter(fila => fila !== "")
                .map(fila => fila.split(separador));

            let tabla = "<div class='contenedor-tabla'><table>";

            //  Encabezado
            tabla += "<thead><tr>";
            filas[0].forEach(col => {
                tabla += "<th>" + col + "</th>";
            });
            tabla += "</tr></thead>";

            //  Mostrar TODOS los datos
            tabla += "<tbody>";
            for (let i = 1; i < filas.length; i++) {
                tabla += "<tr>";
                filas[i].forEach(celda => {
                    tabla += "<td>" + celda + "</td>";
                });
                tabla += "</tr>";
            }
            tabla += "</tbody></table></div>";

            tablaCSV.innerHTML = tabla;

        })
        .catch(error => {
            tablaCSV.innerHTML = "<p>Error cargando el CSV</p>";
            console.error(error);
        });

});