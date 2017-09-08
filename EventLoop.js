// JavaScript es un lenguaje que solo ejecuta una sola cosa a la vez
// Debemos tener lo mas limpio posible
// Lo primero que se ejcuta es la declaración de las funciones
// Cuando JavaScript ejecuta una línea ña carga en una pila de ejcución
// Puede delegar la ejecución a otras cosas.

// JavaScript ejecuta en pila o callstack.

// Si corre un setTimeout envia las acciones a la cola de tareas.
// Corre las tareas al finalizar todo el flujo de codigo de la pila

console.log('Hola')

setTimeout(function(){
	console.log('Medio')
}, 0)

console.log('Chao')
