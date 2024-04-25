function validarCUIT() {
    var cuit = document.getElementById("cuit").value.replace(/\D/g, '');
    var alertaDiv = document.getElementById("alerta");
    var alertaDiv1 = document.getElementById("alerta1");

    if (cuit.trim() === "") {
        alertaDiv.textContent = "Por favor, ingresa un CUIT.";
        alertaDiv.style.display = "block";
        alertaDiv1.style.display = "none";
        return;
    }

    if (!/^\d+$/.test(cuit)) {
        alertaDiv.textContent = "El CUIT solo puede contener dígitos numéricos.";
        alertaDiv.style.display = "block";
        alertaDiv1.style.display = "none";
        return;
    }

    if (cuit.length !== 11) {
        alertaDiv.textContent = "El CUIT debe tener 11 dígitos.";
        alertaDiv.style.display = "block";
        alertaDiv1.style.display = "none";
        return;
    }

    var prefijo = cuit.substring(0, 2);
    if (prefijo !== "20" && prefijo !== "23" && prefijo !== "24") {
        alertaDiv.textContent = "El prefijo del CUIT no es válido.";
        alertaDiv.style.display = "block";
        alertaDiv1.style.display = "none";
        return;
    }

    var digitoVerificador = parseInt(cuit.charAt(10));
    var suma = 0;
    var coeficientes = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for (var i = 0; i < 10; i++) {
        suma += parseInt(cuit.charAt(i)) * coeficientes[i];
    }

    var resultado = 11 - (suma % 11);
    if (resultado === 11) {
        resultado = 0;
    }

    if (resultado !== digitoVerificador) {
        alertaDiv.textContent = "El dígito verificador no es correcto.";
        alertaDiv.style.display = "block";
        alertaDiv1.style.display = "none";
        return;
    }

    alertaDiv.style.display = "none";
    alertaDiv1.textContent = "El CUIT ingresado es válido: " + cuit;
    alertaDiv1.style.display = "block";
}