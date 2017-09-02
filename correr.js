const nombre = 'Sacha'
const dias = [
'lunes',
'martes',
'miercoles',
'jueves',
'viernes',
'sabado',
'domingo'
]

// Math.random() por default genera un número random entre 0 y 1
// Math.floor //rendondea hacia abajo 3.9 = 3
// Math.ceil //redondea para arriba 3.1 = 4
// Math.round // redondea dependiendo 3.1 = 3, 3.5 = 4

function correr(){
	const min = 5
	const max = 15

	// Math.floor : Devuelve el máximo entero menor o igual a un número.
	return Math.round(Math.random() * (max + min)) + min
}

let totalKms = 0
const length = dias.length


for (let i = 0; i < length; i++){
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} corrio ${kms}kms`)
}

const promedioKms = totalKms / length
console.log(promedioKms)
// promedioKms.toFixed(2), solo muestra dos decimales en un float.
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms`)


