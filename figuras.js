// codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro mide :" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area mide :" + areaCuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo
console.group("triangulos");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "los lados del cuadrado miden:"
 + ladotriangulo1 + "cm,"
  + ladotriangulo2 + "cm,"
   + baseTriangulo + "cm"
   );

   const alturaTriangulo = 5.5;
   console.log("la altura del triangulo mide:" + alturaTriangulo + "cm");
   
   const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + baseTriangulo;
   console.log("el perimetro mide :" + perimetroTriangulo + "cm");

   const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
   console.log("el area mide :" + areaTriangulo + "cm^2");
console.groupEnd()

// codigo circulo 
console.group("circulo");
// Radio 
const radioCirculo = 4;
console.log("el radio del circulo mide:" + radioCirculo + "cm");

//diametro
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo mide:" + diametroCirculo + "cm");

// PI
const PI= Math.PI;

// circunferencia
const perimetroCirculo =diametroCirculo * PI;
console.log("el perimetro del circulo mide:" + perimetroCirculo + "cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area mide :" + areaCirculo +"cm^2");


console.groupEnd();