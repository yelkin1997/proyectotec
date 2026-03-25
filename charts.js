document.addEventListener("DOMContentLoaded", function () {

    //  GRAFICO 1: ENERGIA EOLICA COLOMBIA
    const ctx1 = document.getElementById("graficoEolico").getContext("2d");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            datasets: [{
                label: "Consumo (TW)",
                data: [548547, 57624, 702303, 68377, 50887, 30714, 4344, 6332, 1012, 59852],
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
                data: [59852246, 31732163, 59858196, 28208168],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

});