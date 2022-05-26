const precio_original=200;
const descuento=20;


function Calcular_Precio_Descuento(precio,descuento){
    return (precio*((100-descuento)/100));
}

//const precio=Calcular_Precio_Descuento(precio_original,descuento);

//console.log("el precio original es $"+precio_original+" el descuento es de "+ descuento + "% y el precio con descuento es $"+precio);

function CalcularPrecioFinal(){
    const input=document.getElementById("PrecioLista");
    const myprecio_origin=input.value;
    
    const input2=document.getElementById("Porcentaje");
    const mydesc=input2.value;
    const myprecio_final=Calcular_Precio_Descuento(myprecio_origin,mydesc);
    
    //alert("l precio final es "+myprecio_final);
    const parrafo=document.getElementById("precio_final");
    parrafo.innerText="El precio final con descuento es $"+myprecio_final;
       
    
}
