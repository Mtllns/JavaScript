// Fase 3
console.log("\n"+"******* Fase 3 *******");

var nombre = ["M", "I", "Q", "U", "3", "L"];
var miNombre = new Map();

for (let i = 0; i < nombre.length; i++) 
{
    let letra = nombre[i];
    if(!miNombre.has(letra))
    {
        miNombre.set(letra, 1);
    }
    else 
    {
        miNombre.set(letra, miNombre.get(letra)+1)
    }
}
miNombre.forEach((value, key) => 
{
    console.log(key + ": " + value);
    document.write("<p>"+key + ": " + value+"</p>");
});