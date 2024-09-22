document.getElementById('formue3').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var cntcompra = parseFloat(document.getElementById('cntcompra').value);
    var descuento = 0.15; // Tasa de interés del 2%
    
    
    if (isNaN(cntcompra) || cntcompra <= 0) {
        alert("El valor de la compra no es valido");
        return;
    }
    
    var resultado = cntcompra-(cntcompra*descuento);

    
    alert(`El total a pagar es: $${resultado.toFixed(2)}`);

});