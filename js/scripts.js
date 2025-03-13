let mensaje = document.getElementById("mensajito");
console.log(mensaje.innerText);
//alert(mensaje.innerText);

let variable; //DECLARANDO UNA VARIABLE VACÍA
variable = 1.666; //ASIGNANDO UN VALOR
console.log("El tipo de dato es: "+typeof variable); //CONOCER EL TIPO DE DATO DE UNA VARIABLE
console.log("El valor de la variable es: "+variable); //CONOCER EL VALOR DE UNA VARIABLE

variable = false; //ASIGNANDO UN VALOR A LA VARIABLE
console.log("El tipo de dato es: "+typeof variable); //CONOCER EL TIPO DE DATO DE UNA VARIABLE
console.log("El valor de la variable es: "+variable); //CONOCER EL VALOR DE UNA VARIABLE

variable = "Hola Mundo";
console.log("El tipo de dato es: "+typeof variable); //CONOCER EL TIPO DE DATO DE UNA VARIABLE
console.log("El valor de la variable es: "+variable); //CONOCER EL VALOR DE UNA VARIABLE


function calcular(sumando1,sumando2,salida){
    let sumando1_obj = document.getElementById(sumando1);
    let sumando2_obj = document.getElementById(sumando2);
    
    let calculo = ( parseFloat(sumando1_obj.innerText) + parseFloat(sumando2_obj.innerText) );

    document.getElementById(salida).innerHTML = calculo;
}


function crearElemento(url = null){
    if(url !== null){
        url = url
    }else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_F_109008395_OQDupHMza1V6CNOzrJwWAKlaktT4IsRW.jpg";
    }

    let objetoimagen = document.createElement("img");
    objetoimagen.id = "imagencreada";
    objetoimagen.src = url;
    objetoimagen.alt = "ICONO SOBRE CONTROL DE VIDEOJUEGO";
    objetoimagen.title = "CONTROL DE VIDEOJUEGO";
    objetoimagen.width = 220;
    objetoimagen.height = 165;
    objetoimagen.addEventListener('click',function(){
        objetoimagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkU5595AC-bbsoPF-Ik0WzUbVj9rnAbs91kw&s";
        objetoimagen.width = 225;
        objetoimagen.height = 225;
    });
    document.getElementById('lienzo').appendChild(objetoimagen);
}