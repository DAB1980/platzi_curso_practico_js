//helpers
function EsPar(nNum){
    
    return (nNum % 2 === 0 );
};

function media_aritmetica(lista){
    const sumalista=lista.reduce(
        function (valor_acumulado=0,nuevo_elemento){
            return (valor_acumulado + nuevo_elemento);
        }
    );
    return (sumalista/lista.length);
}

//Calculador Mediana

function CalcularMedianaSueldos(nLista){
    const mitad=parseInt(nLista.length/2);
    if (EsPar(nLista.length)){

        const personamitad1=nLista[mitad-1];
        const personamitad2=nLista[mitad];
        
        const mediana=media_aritmetica([personamitad1,personamitad2]);
        return mediana;
    }
    else{
        const personamitad=nLista[mitad];
        return personamitad;
    }
}


//Mediana General

const sueldosCol=Colombia.map(
    function (nPersona){
        return nPersona.salario;
    }
);

const sueldosColOrdenados=sueldosCol.sort(
    function (salario1,salario2){
        return salario1-salario2;
    }
);

//Mediana Top 10%
const inicio=sueldosColOrdenados.length-Math.round(sueldosColOrdenados.length / 10);
const cant=Math.round(sueldosColOrdenados.length / 10);
const sueldosTop10=sueldosColOrdenados.splice(inicio, cant);


console.log("Mediana Sueldos Gral. $"+
    CalcularMedianaSueldos(sueldosColOrdenados)
);

console.log("Mediana Sueldos Top 10% $"+
    CalcularMedianaSueldos(sueldosTop10)
);