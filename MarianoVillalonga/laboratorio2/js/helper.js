  /* 1) Crear un programa permita al usuario obtener por pantalla un número aleatorio entre 0 y 1, 
  cuando lo solicite desde un botón solicitar. 
  El nro debe ser generado desde una función JS. Guardar como aleatorio01  */
  function generarAleatorio01() {
    const aleatorio = Math.random();
    alert("Número aleatorio entre 0 y 1: " + aleatorio);
  }

  /* 2) Modificar el programa para que el usuario pueda obtener un número aleatorio entre 1 y 100 y que sea un nro. Entero. 
  Guardar como aleatorio02  */
  function generarAleatorio02() {
    const aleatorio = Math.floor(Math.random() * 100) + 1;
    alert("Número aleatorio entre 1 y 100: " + aleatorio);
  }

  /* 3) Modificar el programa para que el usuario pueda obtener un número aleatorio entero, 
  entre un mínimo y un máximo que solicite. Guardar como aleatorio03  */
  function generarAleatorio03() {
    const minimo = parseInt(prompt("Ingrese el valor mínimo:"));
    const maximo = parseInt(prompt("Ingrese el valor máximo:"));
    const aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    alert("Número aleatorio entre " + minimo + " y " + maximo + ": " + aleatorio);
  }

  /* 4) Crear un programa que genere un nro. Aleatorio entero entre 1 y 10, que pida al usuario que lo adivine. 
  Al dar clic en botón Aceptar, el programa debe comparar el nro. Ingresado contra el generado y si lo acertó deberá 
  mostrar un mensaje de “Éxito”, de lo contrario, deberá mostrar cuál era el nro. Correcto. Guardar como aleatorio04  */
  function adivinarNumero() {
    const numeroAdivinar = Math.floor(Math.random() * 10) + 1;
    const intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    if (intento === numeroAdivinar) {
      alert("¡Éxito! Has adivinado el número.");
    } else {
      alert("El número correcto era: " + numeroAdivinar);
    }
  }

  /* 5) Modificar el programa anterior para que permita hasta 3 intentos. Al comparar cada intento debe informar si el nro. 
  a adivinar en menor o mayor al nro ingresado. Guardar como aleatorio05  */
  function adivinarNumeroConIntentos() {
    const numeroAdivinar = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    while (intentos > 0) {
      const intento = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
      if (intento === numeroAdivinar) {
        alert("¡Éxito! Has adivinado el número.");
        return;
      } else if (intento < numeroAdivinar) {
        alert("El número a adivinar es mayor.");
      } else {
        alert("El número a adivinar es menor.");
      }
      intentos--;
    }
    alert("Se acabaron los intentos. El número correcto era: " + numeroAdivinar);
  }

  /* 6) Crear un juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador 
  a adivinar el número en 10 intentos. Después de cada intento, debe decirle al jugador si ha acertado o no — y si está equivocado, 
  debe decirle si el nro. a adivinar, es en menor o mayor al nro. ingresado. También debe ir exhibiendo los números que ya se probaron anteriormente. 
  El juego terminará una vez que el jugador acierte o cuando se acaben los intentos, en cuyo caso debe mostrar cuál era el nro correcto.   */
  function juegoAdivinaNumero() {
    const numeroCorrecto = Math.floor(Math.random() * 100) + 1;
    let intentos = 10;
    let numerosIntentados = [];
    while (intentos > 0) {
      const intento = parseInt(prompt("Intenta adivinar el número (entre 1 y 100):"));
      if (isNaN(intento) || intento < 1 || intento > 100) {
        alert("Por favor ingresa un número válido entre 1 y 100.");
        continue;
      }
      if (numerosIntentados.includes(intento)) {
        alert("Ya has intentado ese número. Intenta con otro.");
        continue;
      }
      numerosIntentados.push(intento);
      if (intento === numeroCorrecto) {
        alert("¡Felicidades! Has adivinado el número correcto: " + numeroCorrecto);
        return;
      } else if (intento < numeroCorrecto) {
        alert("El número a adivinar es mayor.");
      } else {
        alert("El número a adivinar es menor.");
      }
      intentos--;
    }
    alert("Se acabaron los intentos. El número correcto era: " + numeroCorrecto);
  }