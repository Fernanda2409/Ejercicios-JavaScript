document.getElementById('formue5').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var cntnacimiento = parseFloat(document.getElementById('cntnacimiento').value);
    var cntactual = parseFloat(document.getElementById('cntactual').value);
    
    
    
    if (isNaN(cntnacimiento) || cntnacimiento <= 0) {
        alert("El año de nacimiento no es valido");
        return;
    }
    if (isNaN(cntactual) || cntactual <= 0  ) {
        alert("El año actual no es valido");
        return;
    }
    if(cntnacimiento > cntactual){
        alert("El año de nacimiento es mayor que el año actual")
        return;
    }
    if (!Number.isInteger(cntnacimiento)) {
    alert("El año de nacimiento no debe tener decimales.");
    return;
    }
    if (!Number.isInteger(cntactual)) {
    alert("El año actual no debe tener decimales.");
    return;
    }
    
    var resultado = (cntactual-cntnacimiento);

    alert(`La persona tiene: ${resultado}`);

});