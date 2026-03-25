document.addEventListener("DOMContentLoaded", function () {

    //  GRAFICO 1: ENERGIA EOLICA COLOMBIA
    const ctx1 = document.getElementById("graficoEolico").getContext("2d");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            datasets: [{
                label: "Consumo (TW)",
                data: [0.0548, 0.0576, 0.0702, 0.0683, 0.0508, 0.0030, 0.0434, 0.0633, 0.0101, 0.0598],
                borderWidth: 3,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                    y: {
                        beginAtZero: true
                    }
                },
            
           
        },
        
        

        
        
        
    });


    //  GRAFICO 2 
    const ctx2 = document.getElementById("grafico2").getContext("2d");

    new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Eólica", "Solar", "Hidráulica", "Otros" ],
            datasets: [{
                label: "Producción energética",
                data: [0.0598, 0.3173, 59.8581, 2.8208],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

});