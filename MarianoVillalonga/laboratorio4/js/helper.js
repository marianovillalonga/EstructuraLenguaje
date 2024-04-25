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

    var comprobador = parseInt(cuit[0]) * 5 + parseInt(cuit[1]) * 4 + parseInt(cuit[2]) * 3 + parseInt(cuit[3]) * 2 + parseInt(cuit[4]) * 7 + parseInt(cuit[5]) * 6 + parseInt(cuit[6]) * 5 + parseInt(cuit[7]) * 4 + parseInt(cuit[8]) * 3 + parseInt(cuit[9]) * 2;
    comprobador = comprobador % 11;

    var dig_verif = parseInt(cuit[10]);

    if (comprobador == 0) {
        if (dig_verif == 0) {
            alertaDiv.style.display = "none";
            alertaDiv1.textContent = "El CUIT ingresado es válido: " + cuit;
            alertaDiv1.style.display = "block";
            return;
        }
        else {
            alertaDiv.textContent = "Atención: Su código verificador es incorrecto.";
            alertaDiv.style.display = "block";
            alertaDiv1.style.display = "none";
            return;
        }
    }
    else if (comprobador == 1) {
        if (prefijo == "23") {
            if (dig_verif == 4 || dig_verif == 9) {
                alertaDiv.style.display = "none";
                alertaDiv1.textContent = "El CUIT ingresado es válido: " + cuit;
                alertaDiv1.style.display = "block";
                return;
            }
            else {
                alertaDiv.textContent = "Atención: Su código verificador es incorrecto.";
                alertaDiv.style.display = "block";
                alertaDiv1.style.display = "none";
                return;
            }
        }
        else {
            alertaDiv.textContent = "Atención: Su prefijo es incorrecto.";
            alertaDiv.style.display = "block";
            alertaDiv1.style.display = "none";
            return;
        }
    }
    else {
        comprobador = 11 - comprobador;
        if (dig_verif == comprobador) {
            alertaDiv.style.display = "none";
            alertaDiv1.textContent = "El CUIT ingresado es válido: " + cuit;
            alertaDiv1.style.display = "block";
            return;
        }
        else {
            alertaDiv.textContent = "Atención: Su código verificador es incorrecto.";
            alertaDiv.style.display = "block";
            alertaDiv1.style.display = "none";
            return;
        }
    }
}
