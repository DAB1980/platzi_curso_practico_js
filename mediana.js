const lista1=[
    40000000,
    300,
    100,
    400,
    50
];

function comparar(a, b) {
    return a - b;
}

function Espar(num){
    var num1=num%2;
    if ((num1) =="0"){
        return true;
    }
    else{
        return false;
    }
}


function mediana_lista(lista){
    
    lista1.sort(comparar);
    
    const mitadlista=parseInt(lista.length/2);
    var mediana=0;
    
    if (Espar(lista.length)){
        mediana=(lista[mitadlista-1]+lista[mitadlista])/2;
        return mediana;
    }
    else {
        mediana=lista[mitadlista];
        return mediana;
    }
}


