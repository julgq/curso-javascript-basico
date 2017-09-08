// ¿Qué es modulo? y por que un modulo
// 1.- Encapsulamiento
// 2.- Dependencias
// Un modulo es un paquete de codigo que puede tener dependencias
// Angular, Jquery, View.js, estos son modulos o frameworks.
// Existen modulos más pequeños que cumplen o resuelven algun problema en especifico.
// Ejemplo: modulo que se conectara a una base de datos.


// 1.- Ejemplo 1
// Function Scope, Encapsular código en una función
// Se utilizo mucho, hace muchos años, funciona para encapsular codigo, pero no tanto para dependencias.

var miModulo = (function miModulo(){

	var nombre = "Sacha"

	function setNombre(otroNombre){
		nombre = otroNombre
	}

	function getNombre(){
		return nombre
	}

	return {
		setNombre,
		getNombre
	}
})()

miModulo.setNombre("Eric")
console.log(miModulo.getNombre())


// 2.- Ejemplo 2
// CommonJS
// Desventaja: Es sincrono, tenemos que esperar a cargar para usarlo


// triangle.js

module.exports = function area(base = 0, heihgt = 0){
	return base * height / 2
}

// otroarchivo.js

const triangle = require('./triangle.js')

const base = 5
const height = 7


console.log(`El àrea de un tríangulo de base ${base} y altura ${height} es:
	${triangle(base, height)}`)


// 3.- Ejemplo 3  AMD
// Si funciona para escribir modulos asincronos

// triangle.js

define('triangle', function(){
	return function triangle(base = 0, height = 0){
		return base * height / 2
	}
})


// otroarchivo.js

require('./triangle.js', function(triangle){
	const base = 5
	const height = 7
	console.log(`El área de un tríangulo de base ${base} y altura ${height} es:
		${triangle(base, height)}`)
})

// 4.- Ejemlplo 4
// Módulos de ES 2015 - EMAScript 2015

// square.js

import triangle from 'triangle'

export function area(x){
	return x = x
}

export function perimeter(x){
	return 4 * x
}

export function diagonal(x){
	return triangle.hypotenuse(x, x)
}

// otroarchivo.js

import saquare from 'square'

const side = 7

console.log(`La diagonal de un cuadrado de ${side} x ${side} mide 
	${squeare.diagonal(side)}`)


// otra forma de ES 2015

System
.import('traingle')
.then(triangle => {
	//..
})
.catch(error =>{

})


// Otra forma de escribir modulos: System.js
//system.config.js

// Recordar se escriben modulos por encasulamiento y dependencias, solcitar otros modulos,
// No tener codigo duplicado.


