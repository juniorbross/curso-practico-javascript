//const precioOriginal = 100;
//const descuento = 15;

const cupon = [
    "jhonellol",
    "carlosneitor",
    "juniorbross",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

//interaccion con el html

function ClickDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

   const resultado = calcularPrecioConDescuento(priceValue, discountValue);
   const resultp = document.getElementById("ResultP");

   resultp.innerText ="el precio final es $" + resultado;
}

 function ClickCupon(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    var descuento;

   switch(cuponValue){
    case cupon[0]:
        descuento = 30;
    break;

    case cupon[1]:
        descuento = 20;
    break;

    case cupon[2]:
        descuento = 100;
    break;
 }


 const resultado = calcularPrecioConDescuento(priceValue, descuento);
 const resultp = document.getElementById("ResultP");

 resultp.innerText ="el precio final es $" + resultado;

 }