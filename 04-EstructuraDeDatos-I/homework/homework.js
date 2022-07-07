"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  while (n > 1) {
    return n * nFactorial(n - 1);
  }

  return 1;

  /* 
    5 > 1 true
      retorname 5 * nf(4) PAUSE
        4 > 1 true
          retorname 4 * nf(3) PAUSE
            3 > 1 true
              retorname 3 * nf(2) PAUSE
                2>1 true
                  retorname 2* nf(1)
                    1>1 false
                      retorname 1         

    5 > 1 true
      retorname 5 * nf(4)  5 * 24 = 120
        4 > 1 true
          retorname 4 * nf(3)  4 * 6 = 24
            3 > 1 true
              retorname 3 * nf(2)  // retorname 3*2 = 6
                2>1 true
                  retorname 2* nf(1) // retorname 2*1 = 2
                    1>1 false 
                      retorname 1  // retorna 1       


  */
}

function nFibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
/*   let array = [];

  this.enqueue = function (item) {
    return array.push(item);
  };

  this.size = function () {
    return array.length;
  };

  this.dequeue = function () {
    return array.shift();
  }; */

  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item)
  }

  size() {
    return this.queue.length;
  }

  dequeue() {
    return this.queue.shift();
  }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
