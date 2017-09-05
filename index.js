class Toggable{
	constructor(el){
		// incializar el estado interno
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false	
		this.el.addEventListener('click', this.onClick.bind(this)) // quien va ser el this?

	}

	onClick(ev){
		// cambiar el estado interno de on a off o de off a on
		this.activated = !this.activated
		this.toggleText()

	}

	toggleText(){
		// cambiar el texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getelementById('buton')

const miBoton = new Toggable(buton)


// Otra forma de manejar el bind

function saludar(nombre, apellido){
	console.log(`Hola ${nombre} ${apellido}!`)
}

//saludar("Sacha", "Lifszyc")

const saludarSachas = saludar.bind(null, "Sacha")

saludarSachas("Martinez")

// Función bind: documentación:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind