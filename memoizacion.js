
// La recursividad, tiene el problema que , implica muchos calculos, en este caso el Fibonacci.

let contadorRec = 1
function fibonacciRecursivo(num) {
	contadorRec++
	if (num == 1) return 0
    if (num == 2) return 1

    return fibonacciRecursivo(num - 1 ) + fibonacciRecursivo(num - 2)
}

// Guardar los numeros que ya se van calculando
// Aplicar: Memoizacion

let contadorMemo = 1
function fibonacciMemo(num, memoria = {}) {
	contadorMemo++
	if(memoria[num]) return memoria[num]
	if (num == 1) return 0
    if (num == 2) return 1

    return  memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num - 2, memoria)
}


fibonacciRecursivo(20)
console.log(contadorRec)


fibonacciMemo(20)
console.log(contadorMemo)