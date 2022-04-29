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

function altura1 (cateto,base1){ 
    return Math.sqrt(Math.pow(cateto,2) - Math.pow(base1/2, 2))
}

function trianguloIsoceles(lado1,lado2,base){
    if(lado1===lado2 && lado1 != base){
         const altura = altura1(lado1,base);
         return areaTriangulo(altura,base);
        }
      else{
          console.log("sea serio")
      }  

    }

    function perimetroTriangulo(lado1, lado2, base){
        return (lado1*1 )+ (lado2*1) + (base*1);
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

function CalcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
     const value1 = input1.value;
     const value2 = input2.value;
     const value3 = input3.value;

     const perimetro = perimetroTriangulo(value1,value2,value3);
     alert(perimetro);
 }


