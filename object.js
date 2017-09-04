// Forma de crear objetos con Object.create()

const Punto = {
	init: function init(x, y){
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x){
		this.x +=x
	},
	moverEnY: function moverEnX(y){
		this.x +=y
	},
	distancia: function distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt( x * x + y * y)
	}
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)
p1.init(0,4)
p2.init(0,5)

p1.moverEnX(10)
p2.moverEnY(2)

console.log(p1.distancia(p2))