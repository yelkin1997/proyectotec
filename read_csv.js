
//Cargar y mostrar CSV
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
        const separador = contenido.includes(";") ? ";" : ",";
        const filas = contenido
            .split("\n")
            .map(fila => fila.trim())
            .filter(fila => fila !== "")
            .map(fila => fila.split(separador));
        let tabla = "<div class='contenedor-tabla'><table>";

        //Encabezado
        tabla += "<thead><tr>";
        filas[0].forEach(columna => {
            tabla += "<th>" + columna + "</th>";
        });
        tabla += "</tr></thead>";
        
        // cuerpo
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
    };
    lector.readAsText(archivo);
});

//Eliminar CSV cargado
botonEliminar.addEventListener("click", function(){
    inputCSV.value = "";
    tablaCSV.innerHTML = "";
    alert("Archivo eliminado. Puedes cargar otro.");
});