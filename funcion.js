let base = 5;
let height = 7;


// Forma Tradicional de crear una función:
function triangleArea(base, height){
	return base * height / 2;
}

// Segunda Forma de describir una función:
let triangleArea  = function(base, height){
	return base * height / 2;
}

// Arrows function javascript - Funciones de Flecha.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

// Tercera forma de describir una función:
let triangleArea  = (base, height) => {
	return base * height / 2;
}

// Cuarta Forma de describir una función con una sola línea de codigo:
let triangleArea  = (base, height) => return base * height / 2;

// Quinta Forma de describir una función en una sola línea de código:
// No es necesario escribir return, solo el valor retornado.
let triangleArea  = (base, height) => base * height / 2;



console.log(`El área de un triángulo de base 
	${base} y altura ${height} es: ${triangleArea(base, height)}`);


