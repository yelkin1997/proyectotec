
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

//Eliminar CSV cargado
botonEliminar.addEventListener("click", function(){
    inputCSV.value = "";
    tablaCSV.innerHTML = "";
    alert("Archivo eliminado. Puedes cargar otro.");
});