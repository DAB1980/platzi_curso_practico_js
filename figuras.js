// códifo cuadrado
console.group("CUADRADO");
//const lado_cuadrado=5;
//console.log("los lados del cuadrado miden "+lado_cuadrado+" centimetros");

function perimetro_cuadrado(lado){
    return (lado*4);
}
//console.log("el perímetro del cuadrado es "+ perimetro_cuadrado +" centimetros");

function area_cuadrado(lado){
    return (lado*lado);
}

//console.log("el área del cuadrado es "+ area_cuadrado + " centimetros cuadrados");
console.groupEnd();

//codigo triangulo
console.group("TRIANGULO");
//const base_triangulo=4;
//const ladoa_triangulo=6;
//const ladob_triangulo=6;
//const altura_triangulo=7;
//console.log(
//    "los lados del triangulo son: ladoA = "+
    //base_triangulo+
    //" cm., ladoB="+
    //ladoa_triangulo+
    //" cm., base="+
    //ladob_triangulo+
    //" cm., altura="+
    //altura_triangulo+
    //" cm."
//);

function perimetro_triangulo(lado1, lado2, base){
    return (lado1+lado2+base);
}
//console.log("el perímetro del triangulo es "+ perimetro_triangulo +" centimetros");

function area_triangulo(base, altura){
    return (base*altura);
}
//console.log("el área del triangulo es "+ area_triangulo + " centimetros cuadrados");
console.groupEnd();

//codigo circulo
console.group("CIRCULO");
//const radio_circulo=5;
function diametro_circulo(radio){
    return (radio*2);
}

function circunferencia_ciruclo(radio){
    var diametro=diametro_circulo(radio);
    return (diametro*Math.PI);
}

function area_circulo(radio){
    return (radio*radio*Math.PI);
}

//console.log(
//    "El circulo tiene un radio de "+
//    radio_circulo+
//    " cm."
//);

//console.log("el perímetro del circulo es "+ circunferencia_ciruclo +" centimetros");
//console.log("el área del circulo es "+ area_circulo + " centimetros cuadrados");
console.groupEnd();

//Conectamos HTML con JS

function CalcularPerimteroCuadrado(){
    const input=document.getElementById("input_cuadrado");
    const value=input.value;
    console.log(value);
    const perimetro=perimetro_cuadrado(value);
    alert("El perimetro del cuadrado es "+ perimetro);
}

function CalcularAreaCuadrado(){
    const input=document.getElementById("input_cuadrado");
    const value=input.value;
    console.log(value);
    const area=area_cuadrado(value);
    alert("El area del cuadrado es "+area);
}

function CalcularAlturaTriangulo(){
    const input=document.getElementById("input_triangulo_lado1");
    const lado1=input.value;

    const input2=document.getElementById("input_triangulo_lado2");
    const lado2=input2.value;

    const input3=document.getElementById("input_triangulo_base");
    const base=input3.value;

    if (lado1==lado2)
    {
        const altura=Math.sqrt((lado1*lado1)-((base*base)/4));
        alert ("La altura del triangulo isóseles es "+altura);
    }
    else{
        alert ("No es un un triangulo isósles!!!");
    }
}