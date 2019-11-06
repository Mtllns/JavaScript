// Exercici 1 
console.log("Exercici 1: Hola Mundo");
        
// Exercici 2
alert("Exercici 2: Me llamo Miquel");

// Exercici 3
var nombre = "Miquel";
var apellido = "Matallanes";
console.log("Exercici 3: "+nombre + " " + apellido);

//Exercici 4
var num1 = 5;
var num2 = 8;
var suma = num1+num2;
console.log("Exercici 4: "+"La suma de " + num1 + " + " + num2 + " es: "+suma);

// Exercici 5
var nota_examen = 4.6;

if(nota_examen >=5){
    console.log("Has aprovado!");
}else{
    alert("Exercici 5: "+"Ooh has suspendido el examen con un "+nota_examen);
}

// Exercici 6
var remplazo = /blau/gi;
var frase = "Tinc un cotxe de color blau";
var newfrase = frase.replace(remplazo, "verd");
console.log("Exercici 6: "+frase);
console.log("Exercici 6: "+newfrase);

frase = "Tinc un cotxe de color blau";
newfrase = frase.replace(/o/gi,"u");
console.log("Exercici 6: "+newfrase);

// Exercici 7
var mobles = ["taula", "cadira", "ordinador", "libreta"];

for (let i = 0; i < mobles.length; i++) {
    document.write("<p>Exercici 7: "+"L'objecte " +mobles[i] + " està en la posició "  +i + "</p>");
}

// Exercici 8
function calculadora(operador, valor1, valor2) {
    var suma = (valor1 + valor2);
    var resta = (valor1 - valor2);
    var multi = (valor1 * valor2);
   
    if(operador == "suma"){
        document.write("<p>Exercici 8: "+"La suma entre "+valor1+ " + " +valor2+ " es: " +suma+ "</p>");
    }else if(operador == "resta"){
        document.write("<p>Exercici 8: "+"La resta entre "+valor1+ " - " +valor2+ " es: " +resta+ "</p>");
    }else {
        document.write("<p>Exercici 8: "+"La multiplicación entre "+valor1+ " x " +valor2+ " es: " +multi+ "</p>");
    }
    
}
var resultat = calculadora("resta",40,20);