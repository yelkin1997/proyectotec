function resultado(){
    const valor = document.getElementById("kwh").value;
    const cov= parseFloat(valor)
    const twh= convierte_twh(cov)
    const porcent=1012
    const porcentaje= ((twh*100)/porcent).toFixed(4)
    const res="Tu consumo mensual promedio fue de "+valor+"kwh. Siendo equivalente al "+ porcentaje+"% del consumo eolico total correspondiente al año 2020 en Colombia";

    if(valor != ""){
        Swal.fire({
            title: 'Resultado',
            text: res,
            icon: 'success',
            confirmButtonText: 'Entendido'
        })
        limpia()
    }else{
        Swal.fire({
            title: '¡Error!',
            text: 'no hay datos ingresados',
            icon: 'error',
            confirmButtonText: 'Close'
        })
    }
    
}
function convierte_twh(dato){
    return (dato/1000)*12
}
function limpia(){
    document.getElementById("kwh").value=""
}