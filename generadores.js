// Para decirle a JavaScript que nuestra función es un generador debemos indicarlo con un asterisco
// function* nombre()

// Si creamos un generador debemos colocar la palabra clave yield
// yield indica que cuando llamemos a la función despúes de la primera vez, esta iniciará en la línea despúes de yield


function* fibonacci(){
	let a = 0, b = 1
	// yield a - hace que la siguiente vez que se ejecute
	// la función continue en la siguiente línea

	while (true){
		let f = a
		a = b
		b = f + a
		let reset = yield f  // El yield puede recibir un valor en next(true)
		if (reset) a = 0, b = 1
	}
}

 const fibo = fibonacci()

 fibo.next()