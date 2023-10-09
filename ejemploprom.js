let cantnotas = 0;
let sumanotas = 0;
while (true) //siempre ejecuta el ciclo
{
   let nota=prompt("carga la nota", "" ); // carga en la variable nota a través de un prompt 
   let valornota = parseFloat(nota);//convierte el contenido de cadena de caracteres a valor numerico
   if(valornota==-1){ // si ingresa -1 sale del loop
       break; //para salir del loop
    }
   sumanotas = valornota + sumanotas;//suma las notas de los participantes 

   cantnotas++; //incrementa en 1 la cantidad de notas
}
let resultadopromedio=sumanotas/cantnotas; //calcula promedio
let resultado1 = document.getElementById("resultado"); // carga la caja donde se va a mostrar el resultado
resultado1.innerHTML = resultadopromedio ; // muestra el resultado en la caja
