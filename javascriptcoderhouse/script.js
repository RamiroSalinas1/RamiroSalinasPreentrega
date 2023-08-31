// Función para calcular la propina y el total a pagar
function calculateTip() {
    const total = parseFloat(document.getElementById("total").value);

    if (isNaN(total) || total <= 0) {
        alert("Por favor, ingresa un monto total válido.");
        return;
    }

    const percentages = [5, 10, 15, 20, 25];
    const selectedPercentage = parseInt(document.getElementById("percentage").value);

    // Función para calcular la propina y el total basado en un porcentaje
    function calculateAmounts(percentage) {
        const tipAmount = total * (percentage / 100);
        const totalAmount = total + tipAmount;
        return {
            percentage: percentage,
            tip: tipAmount.toFixed(2),
            total: totalAmount.toFixed(2)
        };
    }

    const results = percentages
        .filter(percentage => percentage >= selectedPercentage) // Filtrar porcentaje seleccionado
        .map(calculateAmounts) // Calcular propina y total para cada porcentaje

    // Mostrar los resultados en el HTML
    const tipAmountElement = document.getElementById("tipAmount");
    tipAmountElement.innerHTML = "<h2>Resultados:</h2>" +
        results.map(result => `<p>${result.percentage}% de propina: Propina $${result.tip}, Total a Pagar $${result.total}</p>`).join("");
}
