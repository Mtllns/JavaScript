function lemon(value) {
    clearLemons(); //vacia clase active
    addLemons(value); //añade clase active
}

function clearLemons() { //primer paso limpiar todos los lemon
    for(var i=0; i<=4; i++) {
        document.getElementById("star" +i).classList.remove("active");
    }
}

function addLemons(value) { //despues de limpiar, añade los active nuevos
    for(var i=0; i<=value; i++) {
        document.getElementById("star" +i).classList.add("active");
    }
}

window.addEventListener("click", function(e) { //captura cualquier click en cualquier sitio "e" es el nombre argument
    if(!document.getElementById("lemon").contains(e.target)) { //si el click NO está dentro del div, limpiar todo
        clearLemons();
    }
})

var x = 1;

if(x == 1)
{
    function demo1(x){
        console.log("El valor de X es: "+x);
        return x*2;
    }
}
else 
{
    function demo1(x)
    {   
        console.log("El valor de X es: "+x);
        return x*10;
    }
}
x = demo1(3);
console.log("El valor de X es: "+x);
document.writeln(x);
