//Podemos asignarle cualquier valor a las variables, podemos asignarle strings, números, fechas, funciones, objetos, etc.
//Si definimos una variable con const no podemos reasignar el valor al que hacen referencia
//Las variables definidas con var y let pueden ser reasignadas
//El carácter punto y coma no es obligatorio,


// Las variables no son fuertemente tipadas
// Podemos asignarle diferentes tipos de valores en el flujo del codigo

var sacha = "Sacha"
sacha = 26
sacha = new Date()
sacha = function saludar() { alert('Hola') } 
// las funcioes son ciudadanos de primer orden, al igual que las variables


// Variables, pueden tener valores más complejos:

sacha = {
	nombre: "Sacha",
	apellido: "Lifsycs",
	edad: 26,
	saludar: function saludar(){
		alert(`Hola, me llamo ${this.nombre}  ${this.apellido}`)
	}
}

// Variables... no tan variables

const edad = 26
edad++ // nos dara error, no pueden cambiar de valor TypeError: Assignment to constant variable.


// Variables... muy variables

function saludar(){
	var nombre = "Sacha"
	alert(`Hola ${nombre}`)
}
nombre // undefined - El scope de la variable nombre, solo se encuentra dentro de la funcion saludar


function saludar(){
	nombre = "Sacha"
	alert(`Hola ${nombre}`)
}

nombre // "Sacha"
window.nombre === nombre // true

// La variable nombre, no tiene el prefijo var, por lo que se toma como una variable global
// el global en el navegador es window, en node.js es globals

// Tenemos que reducir el scope lo minimo, es buena practica
// No contaminar el scope global


var dias = [
"Lunes",
"Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sábado",
"Domingo"
]

for(var i = 0; i < dias.length; i++){
	console.log(`${dias[i]} es el día #${ i + 1} de la semana `)
}

i // 7


for(let i = 0; i < dias.length; i++){
	console.log(`${dias[i]} es el día #${ i + 1} de la semana `)
}

i // undefiend - la variables declaradas con let, es declarado solo en ese bloque.

// Algunas palabras reservadas importantes:
/*break
case
catch
continue
debugger
default
delete
do
else
false
finally
for
function
if
in
instanceof
new
null
return
switch
this
throw
true
try
typeof
var
void
while
with*/

// Palabras reservadas en ECMAScript 5 = Es el lenguaje de JavaScript que tiene los navegadores

/*class
const 
enum
export
extends
import
super*/

// Palabras reservadas en "Strict mode"
/*implements
interface
let
package
private
protected
public
static
yield*/


// ; caracter ; IMPORTANTE:
// Algunos programadores siempre ponen ; en javascript.

// IIFE - Inmediately Invoked Function Expression - Funciones que se ejecutan inmediatamente.
// Pueden pasar casos donde sea necesario el ;

/* ----------------------------------------------------- */
// JavaScript interpreta como si esto estuviera pegado, es necesario, escribir ;
const nombre = "Sacha"

(function saludar() {
	console.log(`Hola ${nombre}`)
})()


// -------------------------

const nombre = "Sacha"

;(function saludar() {
	console.log(`Hola ${nombre}`)
})()

/* ----------------------------------------------------- */

// JavaScript interpreta como si esto estuviera pegado, es necesario, escribir ;

const nombre = "Sacha"

[
"lunes",
"martes",
"miércoles"
].forEach(function (dia){
	console.log(dia)
})


// ----------------------------


const nombre = "Sacha";

[
"lunes",
"martes",
"miércoles"
].forEach(function (dia){
	console.log(dia)
})

// -----------------------------
// Una buena practica seria: sin usar ;

const dias = [
"lunes",
"martes",
"miércoles"
]

dias.forEach(function (dia){
	console.log(dia)
})

/* ----------------------------------------------------- */




/* ----------------------------------------------------- */





