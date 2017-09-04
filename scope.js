// Scope Global

var nombre = "Sacha"

function saludar(){

	// accediendo a una variable por fuera en el scope global o local
	console.log(`Hola ${nombre}`)

	// accediendo a una variable del scope local de la función:
	nombre = "Eric"

	console.log(`Hola Scope Local ${nombre}`)
}


saludar()

// diferencias entre declarar var o let o const

// var: declara una variable con un scope dentro de la función

// let: declara una variable dentro del fragmento de código:

// const: declara una constante, donde el su valor nunca va cambiar, su scope es dentro de la función


// Código completo:

var nombre = 'Sacha'

function saludar10(){
	var nombre
	if (true) {
		nombre = "Eric"
	}
	console.log(`Hola ${nombre}`)

}

saludar("Sacha")
console.log(`La variable nombre tiene el valor ${nombre}`)

function saludarASacha10(){
	const nombre = "Sacha"

	for(let i =0; i < 10; i++){
		console.log(`Hola ${nombre}`)
	}
}


