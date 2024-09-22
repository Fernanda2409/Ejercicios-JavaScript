document.getElementById('formue2').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    var cntsueldo = parseFloat(document.getElementById('cntsueldo').value);
    var cntventa1 = parseFloat(document.getElementById('cntventa1').value);
    var cntventa2 = parseFloat(document.getElementById('cntventa2').value);
    var cntventa3 = parseFloat(document.getElementById('cntventa3').value);
    var comision = 0.1; // Tasa de interés del 2%
    
    
    if (isNaN(cntventa1) || cntventa1 <= 0) {
        alert("El valor de la primer venta no es valido");
        return;
    }
    if(isNaN(cntventa2) || cntventa2 <= 0){
        alert("El valor de la segunda venta no es valido");
        return;
    }
    if(isNaN(cntventa3) || cntventa3 <= 0){
        alert("El valor de la tercer venta no es valido");
        return;
    }
    if(isNaN(cntsueldo) || cntsueldo <= 0){
        alert("El valor del sueldo no es valido");
        return;
    }


    var resultado1 = (cntventa1*comision);
    var resultado2 = (cntventa2*comision);
    var resultado3 = (cntventa3*comision);
    var resultado4 = (resultado1+resultado2+resultado3);
    var resultado5 = (cntsueldo+resultado4);

    alert(`Comisión total: $${resultado4.toFixed(2)}`)
    alert(`Sueldo total: $${resultado5.toFixed(2)}`);

});