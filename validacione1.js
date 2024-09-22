document.getElementById('formue1').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var cntinvertida = parseFloat(document.getElementById('cntinvertida').value);
    var interes = 0.02; // Tasa de interés del 2%
    
    
    if (isNaN(cntinvertida) || cntinvertida <= 0) {
        alert("Por favor, ingrese un monto válido ");
        return;
    }

    
    var resultado = (cntinvertida * interes) + cntinvertida;

    
    alert(`Total Después de un Mes: $${resultado.toFixed(2)}`);
});
