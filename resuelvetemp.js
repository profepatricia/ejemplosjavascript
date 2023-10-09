
function cargardato(){
    let cajaEntrada = document.getElementById("temperatura");//Carga la caja de datos de entrada
    let datoTemp = parseFloat(cajaEntrada.value);//convierte el contenido de cadena de caracteres a valor numerico
    let gradosFahrenheit = (datoTemp * 9/5) + 32; // toma el valor para calcular
    let resultado1 = document.getElementById("resultado"); // carga la caja donde se va a mostrar el resultado
    resultado1.innerHTML =  gradosFahrenheit; // muestra el resultado en la caja
}


