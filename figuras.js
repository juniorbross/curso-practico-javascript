// codigo del cuadrado
console.group("cuadrados");


function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("el perimetro mide :" + perimetroCuadrado + "cm");

 
function areaCuadrado(lado){
    return lado * lado
}
//console.log("el area mide :" + areaCuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo
console.group("triangulos");
   
    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }
   //console.log("el perimetro mide :" + perimetroTriangulo + "cm");

   function areaTriangulo(base, altura) {
       return (base * altura )/2;
   }
  // console.log("el area mide :" + areaTriangulo + "cm^2");
console.groupEnd()

// codigo circulo
console.group("circulo");


//diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI= Math.PI;

// circunferencia
  function perimetro(radio) {
      const diametro = diametroCirculo(radio);
      return diametro * PI;
  }

//area
function areaCirculo(radio){
   return (radio * radio) * PI;
}

console.groupEnd();

//aqui interactuamos con el html

 function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
     const value = input.value;

     const perimetro = perimetroCuadrado(value);
     alert(perimetro);
 }

 function CalcularAreaCuadrado() {
     const input = document.getElementById("InputCuadrado");
     const value = input.value;

     const area = areaCuadrado(value);
     alert(area);
}