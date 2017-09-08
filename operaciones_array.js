// Los tres puntos dentro de la declaración indica que es un array ...
// COSAS QUE HACEN QUE UN DESARROLLADOR SE DESTAQUE SOBRE OTROS.

// Primera forma
function suma(...numeros){

	console.log(numeros)

	for (let i = 0; i < numeros.length; i++){
		acum += numeros[i]
	}

	return acum

}


// Segunda forma para sumar con reduce.
function suma2(...numeros){

	return numeros.reduce(function (acum, numero){
		acum += numero
		return acum
	}, 0)

	console.log()
	
}


suma2(4, 8, 12, 854, 7)


// Primera forma de hacer dobles
function dobles(...numeros){
	for (let i = 0; i  < numeros.length; i++){
		resultado.push(numeros[i] * 2)
	}
	return resultado
}

// Segunda forma de hacer dobles, usando map.
// map es una función que se ejcuta por cada numero de los elementos
function dobles(...numeros){

	return numeros.map(numero => return numero * 2
	
	/*return numeros.map(function(numero){
		return numero * 2
	})*/
}

// mas estetica que la de arriba:
const dobles2 = (...numeros) => numeros.map(numero => numero * 2)
dobles2(4, 8, 8954, 7, 9)




// Utilizar filter: 

function pares(...numeros){
	const resultad = []
	const length = numeros.length
	for (let i = 0; i < length; i++){
		if (numero % 2 == 0){
			resultado.push(numero)
		}
	}
	return resultado
}

pares(3, 50, 10)

// Mejor forma de usar la función de arriba:

function pares2(...numeros){
	return numeros.filter(function(numero){
		return numero % 2 == 0
	})

	// usando arrow function
	//return numeros.filter(numero => numero % 2 == 0)


}

pares2(3, 50, 10)

// filter usando arrow functions

const pares3 = (...numeros) => numeros.filter(numero => numero % 2 == 0)
