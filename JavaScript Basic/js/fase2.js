// Fase 2

console.log("\n"+"******* Fase 2 *******");

var nombre = ["M", "I", "Q", "U", "3", "L"];
console.log("Partim del nom "+ nombre.join(''));
document.write("<p>Partim del nom "+ nombre.join('')+"</p>");

for (let i = 0; i < nombre.length; i++) {
    if (nombre[i].match(/[aeiou]/gi)) 
    {
        console.log("He trovat la vocal: "+nombre[i]); 
        document.write("<p>He trovat la vocal: "+nombre[i]+ "</p>"); 
    }
    else if (!isNaN(nombre[i])) 
    {
        console.log("Els noms de persones no contenen el número: "+nombre[i]);
        document.write("<p>Els noms de persones no contenen el número: "+nombre[i]+"</p>");

    } else if(!nombre[i].match(/[aeiou]/gi))
    
    {
        console.log("He trovat la consonant: "+nombre[i]);
        document.write("<p>He trovat la consonant: "+nombre[i]+"</p>");
    }   
}

   

    
