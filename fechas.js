// obtener fecha construida
const nacimiento = new Date(1987, 7, 12)


// fecha de hoy
const hoy = new Date()


// tiempo, restar hoy menos fecha de nacimiento
// nos regresa el tiemp en milisegundos
const tiempo = hoy - nacimiento


// tiempo en segundos:, en cada segundo existen 1000 milisegundos.
const tiempoSegundos = tiempo / 1000


// tiempo en minutos
// en 1 minuto existen 60 segundos
const tiempoMin = tiempoSegundos / 60


// tiempo en horas
const tiempoHoras = tiempoMin / 60


// proximo cumpleaños
const proximoCumpleanos =  new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

proximoCumpleanos


const diasSemana = [
"Domingo",
"Lunes",
"Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sabado"
]

// Mostrar 
console.log(diasSemana[proximoCumpleanos.getDay()])




