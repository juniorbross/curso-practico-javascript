//const precioOriginal = 100;
//const descuento = 15;

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