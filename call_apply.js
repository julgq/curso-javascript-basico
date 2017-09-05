const sacha = {
	nombre: 'Sacha',
	apellido: 'Lifszyc'
}

function saludar(veces){
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for(let i = 0; i < veces; i++){
		console.log(str)
	}
}


// Pasar cual es el this, y despues los parametros.
// El primer parametro es el contexto.
saludar.call(sacha, 3)

// Pasar cual es el this, y despues los parametros. OTRA FORMA apply []
// Despues del contexto this, los parametros van en []

const params = [3, true]
saludar.call(sacha, params)