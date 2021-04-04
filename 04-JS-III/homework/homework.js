// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}
devolverPrimerElemento(["Enfoque", "Fuerza", "Conviccion"]);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
devolverUltimoElemento(["Enfoque", "Fuerza", "Conviccion"]);


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray(["Enfoque", "Fuerza", "Conviccion"]);


function incrementarPorUno(hoja) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var NuevoCuaderno = [];
  for(var pag = 0; pag < hoja.length; pag++){
    NuevoCuaderno[pag] = hoja[pag]+1;

  }
  return NuevoCuaderno;
}
incrementarPorUno([1, 2, 3, 4, 5]);


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}
agregarItemAlComienzoDelArray(["Pan", "Leche", "Huevos", "Fruta"], "Almendras");


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray(["Pan", "Leche", "Huevos", "Fruta"], "Almendras");


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}
dePalabrasAFrase(["Pan", "Leche", "Huevos", "Fruta", "Almendras"]);


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++){
      if(array[i] == elemento){
          return true;
      }

  }
    return false;
}
arrayContiene(["dormitorio", "cosina", "baño"], "jardin");


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var Todos = 0;
  for(var i = 0; i < numeros.length; i++){
    Todos += numeros[i];
 }return Todos;

}
agregarNumeros([10,20,30,40,50,60,70,80,90,100]);


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}
promedioResultadosTest([10,20,30,40,50,60,70,80,90,100]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo= numeros[0];
  for(var i = 1; i < numeros.length; i++){
    if(numeros[i] > maximo){
      maximo = numeros[i];
    }
  }
  return maximo;
}
numeroMasGrande([6,2,3,8,4]);



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var Resultado = 1;
  if(arguments.length === 0){
    return 0;
  }
  for(var i = 0; i<arguments.length; i++){
      Resultado *= arguments[i];
  }return Resultado;
}
multiplicarArgumentos(1,2,3);


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var Resultado = 0;
  for(var i = 0; i<arreglo.length; i++){
      if(arreglo[i]>19){
        Resultado++
      }
  }
  return Resultado;
}
cuentoElementos([2,6,8,15,20,21,9,18,100,19]);


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
}else{
    return "Es dia Laboral";
}
} 
diaDeLaSemana(7);

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString();
  if(numero.charAt(0)==="9"){
    return true;

  }else{
    return false;
  }
    

  }
empiezaConNueve(2);


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var Parecidos=arreglo[0];
  for(var i=0; i<arreglo.length; i++){
    if(arreglo[i]!==Parecidos){
        return  false;
}

}
return true; 
} 
todosIguales([1,1,2]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses=[];
  for(var i=0; i<array.length; i++){
    if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
      meses.push(array[i]);
    }

  }
    if(meses.length<3){
      return "No se encontraron los meses pedidos";

    }else{
      return meses;
    }
}
mesesDelAño(["Diciembre","Octubre","Enero","Julio","Marzo","Noviembre"]);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var Sobre100=[];
  for(var i=0; i<array.length; i++){
      if(array[i]>100){
          Sobre100.push(array[i]);

      }

  }
  return Sobre100;
}
mayorACien([0,60,50,120,90,70,200]);


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray=[];
  var Total=numero;
  for(var i=0; i<10; i++){
    Total+=2;
    if(Total === i){
      break;
    }else{
        nuevoArray.push(Total);

    }

  }
    if(i<10){
        return "Se interrumpió la ejecución";

    }else{
      return nuevoArray;
    }
}
breakStatement(2);


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray=[];
  var Total=numero;
  for(var i=0; i<10; i++){
    if(i===5){
        continue;
    }else{
      Total+=2;
      nuevoArray.push(Total);
    }

  }
  return nuevoArray;
}
continueStatement(2);


// No modificar nada debajo de esta línea
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
  breakStatement,
  continueStatement
};
