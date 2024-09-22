document.getElementById('formue7').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var cntpago = parseFloat(document.getElementById('cntpago').value);
    var cnthoras = parseFloat(document.getElementById('cnthoras').value);
    
    
    
    if (isNaN(cntpago) || cntpago <= 0) {
        alert("El pago por hora no es valido");
        return;
    }
    if (isNaN(cnthoras) || cnthoras <= 0  ) {
        alert("Las horas trabajadas no son validas");
        return;
    }
    if (!Number.isInteger(cnthoras)) {
    alert("Las horas trabajadas no pueden ser decimales");
    return;
    }
    if(isNaN(cnthoras)|| cnthoras >40 || cnthoras <=48){
        var resultado1 = (cnthoras-40);
        var resultado = ((resultado1*cntpago)*2)
        alert(`El pago de las horas extra por las horas de trabajo es : $${resultado}`);
        return;
    }
    if(isNaN(cnthoras)|| cnthoras > 48 ){
        var resultado2 = (40-cnthoras);
        var resultado3 = ((resultado1*cntpago)*3)
        alert(`El pago de las horas extra por las horas de trabajo es : $${resultado3}`);
        return;
    }
    

});