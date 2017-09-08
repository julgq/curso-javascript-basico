// Manera en JavaScript de correr código asincron
// Los Callbacks se ejecutan en algun momento, en relación a un evento o request.

setTimeout(function callback(){
	console.log("Ya paso tres Segundos")
}, 3000) // Mil milisegundos = 1 Segundo

console.log("hola")


// JavaScript ejecuta de forma sincrona el codigo
// Hace llamado de setTimeout
// Cuando pasen 0 segundos ejecuta el callback
// 
setTimeout(function callback(){
	console.log("A")
}, 0) 

console.log("B")



// Cuello de botella, trabar la cola de ejecución:
// Mala practica:
// No debemos atorar la cola de ejecución:
setTimeout(function callback(){
	console.log("A")
}, 0) 

for(let i = 0; i < 9999999999999; i++);

console.log("B")