class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos || [] // Si no se pasa nada, es un array vacio.

		// return this -- esta implicito, no es necesario escribir.
	}

	// Primer forma de solucionar el scope del this
	listarAmigos(this){
		const _this = this
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es: ${_this.nombre}`)
		})
	}

	// Segunda forma de solucionar el scope del this
	listarAmigos2(this){
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es: ${this.nombre}`)
		}.bind(this)) // Con bind puedes usar el scope de fuera de la función
	}

	// Tercer forma de solucionar el scope del this
	// Con las arrow function, el bind es atumatico sobre el this.
	// Son las mas nuevas, y es buna opción para usar, mas limpias, menos codigo, y performance es lo mismo.
	listarAmigos3(this){
		this.amigos.forEach((amigo)=>{
			console.log(`Hola, mi nombre es: ${this.nombre}`)
		})
	}


}

const sacha = new Persona("Sacha", ["Pedro, Juan", "Pepe"])