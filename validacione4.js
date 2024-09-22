document.getElementById('formue4').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var cntpromedio = parseFloat(document.getElementById('cntpromedio').value);
    var cntexamen = parseFloat(document.getElementById('cntexamen').value);
    var cnttrabajo = parseFloat(document.getElementById('cnttrabajo').value);
    var constantep = 0.55;
    var constantee = 0.3;
    var constantet = 0.15;
    
    
    if (isNaN(cntpromedio) || cntpromedio < 0 || cntpromedio > 10 ) {
        alert("El valor del promedio no es valido");
        return;
    }
    if (isNaN(cntexamen) || cntexamen< 0 || cntexamen > 10 ) {
        alert("El valor del examen final no es valido");
        return;
    }
    if (isNaN(cnttrabajo) || cnttrabajo < 0 || cnttrabajo > 10 ) {
        alert("El valor del trabajo final no es valido");
        return;
    }
    
    var resultado1 =(cntpromedio*constantep);
    var resultado2 =(cntexamen*constantee);
    var resultado3 =(cnttrabajo*constantet);
    var resultado = (resultado1+resultado2+resultado3);

    alert(`La calificacion final es: ${resultado.toFixed(2)}`);

});