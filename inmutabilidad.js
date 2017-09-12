// La inmutabilidad de los objetos es algo muy importante para la programación funcional
// El operador  === nos ayuda a comparar objetos, ejecutando la comparación no directamente a los datos del objeto sino a la referencia del objeto.

/* Cuando asignamos un objeto a otro estamos haciendo que ambos apunten a la misma referencia
   por eso al modificar un objeto el otro también se verá afectado, por que ambos
   tienen la misma referencia de memoria. */

   /* La inmutabilidad tiene por objetivo hacer que los parámetros de un objeto sean no modificables o inmutables */
   // Libreria de Facebook: https://facebook.github.io/immutable-js/
   // LIBRERIA que nos permite crear distintos tipos de objetos inmutables, 


let sacha = { nombre: 'Sacha', apellido: 'Lifsyzyc', edad: 26}

// otraSacha apunta al mismo objeto en memoria.
let otroSacha = sacha

console.log(otroSacha === sacha)

otroSacha.edad = 27

console.log(otroSacha)

console.log(otroSacha === sacha)

function cumpleanos(persona){
	persona.edad++ // 28
}

cumpleanos(sacha)
sacha // 28



cumpleanos_inmutable = function (persona){

	const clone = Object.assign({}, persona)
	clone.edad ++
	return clone
}

cumpleanos_inmutable(sacha)


