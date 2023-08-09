// Función para calcular la propina y el total a pagar
function calculateTip() {
    const total = parseFloat(document.getElementById("total").value);

    // Validar si se ingresó un número válido para el total
    if (isNaN(total) || total <= 0) {
        alert("Por favor, ingresa un monto total válido.");
        return;
    }

    const percentages = [5, 10, 15, 20, 25];
    let results = "";

    // Iterar a través de los porcentajes y calcular la propina y el total
    for (const percentage of percentages) {
        const tipAmount = total * (percentage / 100);
        const totalAmount = total + tipAmount;
        results += `${percentage}% de propina: Propina $${tipAmount.toFixed(2)}, Total a Pagar $${totalAmount.toFixed(2)}\n`;
    }

    // Mostrar los resultados en el HTML
    document.getElementById("tipAmount").innerText = results;
}

