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

