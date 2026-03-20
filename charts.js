document.addEventListener("DOMContentLoaded", function () {

    // 📊 GRAFICO 1: ENERGIA EOLICA COLOMBIA
    const ctx1 = document.getElementById("graficoEolico").getContext("2d");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            datasets: [{
                label: "Consumo (TW)",
                data: [5485471, 57624802, 702303, 6837745, 50887343, 3071419, 4344, 6332, 1012, 59852246],
                borderWidth: 3,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        },
        
        

        
        
        
    });


    // 📊 GRAFICO 2 (EJEMPLO)
    const ctx2 = document.getElementById("grafico2").getContext("2d");

    new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Eólica", "Solar", "Hidráulica"],
            datasets: [{
                label: "Producción energética",
                data: [70, 50, 90],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

});