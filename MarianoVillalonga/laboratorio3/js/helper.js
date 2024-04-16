function sumar() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var mensaje = "";
    if (isNaN(numero1) || isNaN(numero2)) {
        mensaje = "Por favor ingresa números en ambos campos.";
    } else {
        var resultado = numero1 + numero2;
        document.getElementById('resultado').innerText = "Resultado: " + resultado + "\n";
        if (resultado > 0) {
            mensaje = "El resultado es positivo.";
        } else if (resultado < 0) {
            mensaje = "El resultado es negativo.";
        } else {
            mensaje = "El resultado es neutro.";
        }
    }
    document.getElementById('mensaje').innerText = mensaje;
}


function calcularArea() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById("resultadoArea").innerText = "Por favor, ingresa valores numéricos válidos.";
    } else {
        var area = (base * altura) / 2;
        document.getElementById("resultadoArea").innerText = "El área del triángulo es: " + area.toFixed(2);
    }
}

function compararCadenas() {
    var cadena1 = document.getElementById("cadena1").value;
    var cadena2 = document.getElementById("cadena2").value;
    
    var mayor = cadena1.localeCompare(cadena2);
    var resultado = "";
    if (mayor === 0) {
        resultado += "Las cadenas son iguales en orden alfabético.";
    } else if (mayor > 0) {
        resultado += "La mayor es: " + cadena1 + ".";
    } else {
        resultado += "La mayor es: " + cadena2 + ".";
    }
    
    var concatenadas = cadena1 + " " + cadena2;
    
    var masLarga = (cadena1.length > cadena2.length) ? cadena1 : cadena2;
    
    document.getElementById("resultado1").textContent = "LA MAYOR ES: " + resultado;
    document.getElementById("resultado2").textContent = "LAS CADENAS CONCATENADAS QUEDAN: " + concatenadas;
    document.getElementById("resultado3").textContent = "LA CADENA MÁS LARGA ES: " + masLarga + " Y TIENE " + masLarga.length + " CARACTERES";
}
