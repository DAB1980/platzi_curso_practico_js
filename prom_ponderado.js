const notas=[
    {
        materia: "A",
        nota: 10,
        creditos:2,
    },
    {
        materia: "B",
        nota: 8,
        creditos:3,
    },
    {
        materia: "C",
        nota: 7,
        creditos:5,
    },
    {
        materia: "D",
        nota: 9,
        creditos:4,
    }
];

function caluclarPromPonderado(nlista){
    const listaNotasconCreditos=nlista.map(function (nObject){
            return nObject.nota*nObject.creditos;
        }
    );

    const sumaNotasconCreditos=listaNotasconCreditos.reduce(
        function (suma=0,nuevo_valor){
            return (suma+nuevo_valor);
        }
    );

    const listaCreditos=nlista.map(function (nObject){
            return nObject.creditos;
        }
    );

    const sumaCreditos=listaCreditos.reduce(
        function (suma=0,nuevo_valor){
            return (suma+nuevo_valor);
        }
    );

    const myProm_Ponderado=sumaNotasconCreditos/sumaCreditos;
    return myProm_Ponderado;
};