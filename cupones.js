function Cupon(nombre,descuento){
    this.nombre=nombre;
    this.descuento=descuento;
}

function Calcular_Precio_Descuento(precio,descuento){
    if (descuento=="0"){
        return (precio);
    }
    else{
        return (precio*((100-descuento)/100));
    }
}

function OnLoad(){
    var myListaCupones=[];
    var myCupon = new Cupon("Cupon1",30);
    myListaCupones.push(myCupon);
    myCupon = new Cupon("Cupon2",25);
    myListaCupones.push(myCupon);
    myCupon = new Cupon("Cupon3",20);
    myListaCupones.push(myCupon);
    myCupon = new Cupon("Cupon4",15);
    myListaCupones.push(myCupon);
    myCupon = new Cupon("Cupon5",10);
    myListaCupones.push(myCupon);

    const myCombo=document.getElementById("Cupones");
    myCombo.innerHTML += "<option value='"+"0"+"' selected>"+"Sin Cupon"+"</option>"; 
   
    for (const cupon of myListaCupones){
        myCombo.innerHTML += "<option value='"+cupon.descuento+"'>"+cupon.nombre+" ("+cupon.descuento+"%)</option>"; 
    }
}

function CalcularPrecioFinal(){
    const input=document.getElementById("PrecioLista");
    const myprecio_origin=input.value;
    
    const mycombo=document.getElementById("Cupones");
    const myindice=mycombo.selectedIndex;
    const mydesc=mycombo.options[myindice].value;
    const myprecio_final=Calcular_Precio_Descuento(myprecio_origin,mydesc);
    
    const parrafo=document.getElementById("precio_final");
    parrafo.innerText="El precio final con descuento es $"+myprecio_final;
 }
