class Punto {

	constructor(x, y){
		this.x = x
		this.y = y

		// return this viene implicito no es necesario escribirlo
	}

	moverEnX(x){
		this.x += x
	}

	moverEnY(y){
		this.y += y
	}

	distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x * x + y * y)
	}


}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 4)

console.log(p1.distancia(p2))
//p1.moverEnY(20)