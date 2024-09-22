    
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var email = document.getElementById('email').value.toUpperCase();
    var contraseña = document.getElementById('contraseña').value.toUpperCase();
    var comentario = document.getElementById('comentario').value.toUpperCase();
    
    function validar(formue9){
        // validar nombre
    
        let nombre=form.nombre.value.trim()
    
        if(nombre==""){
            alert("El campo nombre es un campo obligatorio");
        return false
        }
    }
        function validar2(formue9){
            
        
            let email=form.email.value.trim()
        
            if(email==""){
                alert("El campo email es un campo obligatorio");
            return false
            }
        }

        function validar3(formue9){
            
        
            let comentario=form.comentario.value.trim()
        
            if(comentario==""){
                alert("El campo comentario es un campo obligatorio");
            return false
            }
        }
    
    function validarPassword(contraseña) {
        
        if (contraseña.length < 6) {
            return false;
        }
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneDigito = /\d/.test(password);
    
        return tieneMinuscula && tieneMayuscula && tieneDigito;
    }
    
    const contraseña = "Passw0rd";
    if (validarPassword(password)) {
        console.log("La contraseña es válida.");
    } else {
        console.log("La contraseña no es válida.");
    }
    
        const password = "Passw0rd";
        if (validarPassword(password)) {
            console.log("La contraseña es válida.");
        } else {
            console.log("La contraseña no es válida.");
        }

        function validarCorreo(correo) {
            const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regexCorreo.test(correo);
        }
        
        const correo = "ejemplo@dominio.com";
        if (validarCorreo(correo)) {
            console.log("El correo es válido.");
        } else {
            console.log("El correo no es válido.");
        }

        if (comentario.length <= 50 || !isNaN(comentario)) {
            alert("El comentario tiene mas de 50 caracteres");
            return;
        }
        

