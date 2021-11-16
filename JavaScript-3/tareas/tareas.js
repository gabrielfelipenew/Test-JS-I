// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[ (array.length -1) ];
  
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i<array.length;i++){

    array[i]=array[i] + 1
  }
  return array;

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase=""
  for (var i=0; i<palabras.length;i++){

    frase = frase + palabras[i] +  " "
  }
  return frase.trimRight("") ;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var flag=false
  for (var i=0; i<array.length;i++){
    if (array[i]==elemento) flag=true 
    
  }
  return flag ;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var suma=0;
for (var i=0; i<numeros.length;i++){
  suma = suma + numeros[i] 
  
}
return suma ;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma=0;
  for (var i=0; i<resultadosTest.length;i++){
  suma = suma + resultadosTest[i] 
  }
  return (suma / resultadosTest.length);
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo=0;
  for (var i=0; i<numeros.length;i++){
    if (numeros[i]>maximo) maximo = numeros [i]
    }
    return maximo;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicacion=1;
  if (arguments.length == 0 )  return 0;
  else if (arguments.length ===1 ) return arguments[0]
  else {
    for (var i=0; i < arguments.length ; i++) {
    
       multiplicacion = (multiplicacion * arguments[i]);
    }
    return multiplicacion;
  }
  
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var mayores_que_19 =0;
  for (var i=0; i < arreglo.length ; i++) {
    if (arreglo[i]>19)  mayores_que_19 = mayores_que_19 + 1;
 }
 return mayores_que_19;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
if (numeroDeDia === 1  || numeroDeDia == 7) return "Es fin de semana"
else return "Es dia Laboral"
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  cadena= n.toString(10)
  //if (n[0]=="9") return true
  //else return false
  if (cadena[0] == "9") return true
  else return false
  
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
var son_iguales = true
for (var i=0; i < (arreglo.length - 1) ; i++) {
  if (arreglo[i]!= arreglo[i+1])  son_iguales=false
}
return son_iguales
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var indice=0;
var nuevo_array = new Array () ;
for (var i=0; i < array.length ; i++) {
  if (array[i]=== "Marzo" || array[i]=== "Noviembre" || array[i]=== "Enero" ) {
    nuevo_array[indice]= array[i]
    indice = indice +1;
  }
}

if (indice==3) return nuevo_array
else return ("No se encontraron los meses pedidos")
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  var nuevo_array = new Array () ;
  for (var i=0; i < array.length ; i++) {
    if (array[i]>100 ) {
      nuevo_array.push (array[i])
    }
  }
  
  
  return nuevo_array
  




}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
