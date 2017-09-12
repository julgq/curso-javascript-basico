// Los iteradores nos permitirán hacer listas infinitas elementos, haciéndolos distintos a los arreglos (arrays) los cuales tiene un numero finito de elementos definidos
// Para los iteradores podemos obtener lo siguiente:

/*
	1.- next() - iterará los datos
	2.- value - nos devolverá el valor del dato
	3.- done - será un indicador para cuando la lista se haya terminado

	con iteradores es muy sencillo realizar un for y obtener los datos:

	for(let value of fibo){
	console.log(value)
	}
*/


// Decirle a nuestra función que es un iterador:

function fibonacci(reset){
	let a = 0, b = 1
	//Closure
	return {
		next: function () {
			if (reset) a = 0, b = 1
			let f = a
			a = b
			b = f + b
			return { value: f, done: false}
		}

	}
}


const fibo = fibonacci()

fibo.next().value // 0


const fibo2 = {}
fibo2[Symbol.iterator] = fibonacci

let i = 0
for (let value of fibo2){
	console.log(value)
	i++
	if (i > 20 ) break
}


function iterador(){
	let a = 0, b = 1
	//Closure
	return {
		next: function () {
			let f = a

			 a = a + 1
			
			return { value: f, done: false}
		}

	}
}



const iterator = iterador()

iterator.next().value // 0


