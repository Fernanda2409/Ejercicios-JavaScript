document.getElementById('formue8').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var antiguedad = parseFloat(document.getElementById('antiguedad').value);
    var cntsalario = parseFloat(document.getElementById('cntsalario').value);
    
    
    if (isNaN(antiguedad) || antiguedad <= 0 ) {
        alert("La antiguedad no es valida");
        return;
    }
    if (isNaN(cntsalario) || cntsalario <= 0 ) {
        alert("El salario no es valida");
        return;
    }
    if (isNaN(antiguedad) || antiguedad < 0 || antiguedad < 1 ) {

        var resultado = (cntsalario*0.05);
        alert(`La utilidad que recibe el empleado es: $${resultado.toFixed(2)}`);
        return;
    }
    if (isNaN(antiguedad) || antiguedad >= 1 || antiguedad < 2 ) {
        var resultado = (cntsalario*0.07);
        alert(`La utilidad que recibe el empleado es: $${resultado.toFixed(2)}`);
        return;
    }
    if (isNaN(antiguedad) || antiguedad >= 2 || antiguedad < 5 ) {
        var resultado = (cntsalario*0.1);
        alert(`La utilidad que recibe el empleado es: $${resultado.toFixed(2)}`);
        return;
    }
    if (isNaN(antiguedad) || antiguedad >= 5 || antiguedad < 10 ) {
        var resultado = (cntsalario*0.15);
        alert(`La utilidad que recibe el empleado es: $${resultado.toFixed(2)}`);
        return;
    }
    if (isNaN(antiguedad) || antiguedad >= 10 ) {
        var resultado = (cntsalario*0.2);
        alert(`La utilidad que recibe el empleado es: $${resultado.toFixed(2)}`);
        return;
    }
   

});