// Son las funciones que recuerdan el scope, el entorno, y pueden acceder a las variables 
// de dicho scope.

function saludarFamilia(apellido){
	// Clousure: función interna que recuerda las variables de la inicial o externa.
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}


const saludarGomez = saludarFamilia("Gomez")
saludarGomez('Pedro')



function makePrefixer(prefixer){
	return function palabra(palabra){
		console.log(`${prefixer}${palabra}`)
	}
}

const prefijoRe = makePrefixer('re')
prefijoRe('bueno')
