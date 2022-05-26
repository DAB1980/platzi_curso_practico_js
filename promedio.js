const mylista=[
100,
200,
350,
400,
500
];

function media_aritmetica(lista){
    const sumalista=lista.reduce(
        function (valor_acumulado=0,nuevo_elemento){
            return (valor_acumulado + nuevo_elemento);
        }
    );
    return (sumalista/lista.length);
}

