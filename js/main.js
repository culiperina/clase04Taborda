//Declaro mis productos y precios (por ahora solo utlizo producto1, producto2 y producto3)
var producto1 ="Curso Básico";
var producto2 = "Curso Intermedio";
var producto3= "Curso Avanzado";
var producto4= "Envío dentro de CABA";
var producto5= "Envío resto del país";

var precio1= 250;
var precio2= 450;
var precio3= 1000;
var precio4= 200;
var precio5= 400;

var total= 0;

// Solicito que ingrese el producto que quiere
var compra= parseInt(prompt ("Ingresá qué producto querés comprar: \n 1. Curso Básico $250 \n 2. Curso Intermedio $450 \n 3. Curso Avanzado $1000"));

const funcioncompra = (compraseleccionada) => {
switch (compraseleccionada) {
  case 1:
    alert ("Excelente elección! Agregaste " + producto1 + " al carrito.");
    total = total + precio1;

  break;
  case 2:
    alert ("Excelente elección! Agregaste " + producto2 + " al carrito.");
    total = total + precio2;

    break;
    case 3:
      alert ("Excelente elección! Agregaste " + producto3 + " al carrito.");
    total = total + precio3;
      break;
      default:
        alert ("No seleccionaste ningún producto");
        break;
}
}

while (compra<=3 && compra>0){
funcioncompra(compra);
compra= parseInt(prompt ("Ingresá qué producto querés comprar: \n 1. Curso Básico $250 \n 2. Curso Intermedio $450 \n 3. Curso Avanzado $1000 \n 4. Finalizar compra envío"));
 }
alert("Compra finalizada, el total es $"+ total);

