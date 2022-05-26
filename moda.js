const lista1=[
    1,
    2,
    2,
    4,
    1,
    3,
    4,
    1,
    1,
    2,
    2,
    3,
    1,
    4,
    4,
    4,
    4
];


function CalcularMedia(nlista){
    const lista1cont ={};

    nlista.map(
        function (elemento){
        if (lista1cont[elemento]){
            lista1cont[elemento]+=1;
        }
        else{
            lista1cont[elemento]=1;
        }
        }
    );

    const listaArray = Object.entries(lista1cont).sort(
        function (valoracumualdo, nuevovalor){
            return valoracumualdo[1] - nuevovalor[1];
        }
    );
    
    const moda=listaArray[listaArray.length-1];
    return moda;
    };

