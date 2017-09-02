const starWars7 = 'Star Wars: El Despertar de la Fuerza';
const pgStartWars7 = 13;

const nameSacha = 'Sacha';
const ageSacha = 26;

const nameSanti = 'Santi';
const ageSanti = 12;


function canWatchStartWars7(name, age, isWithAdult = false){
	if (age >= pgStartWars7){
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else if(isWithAdult){
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${age}, se encuentra acompañado/o por un adulto`);
	} else {
		alert(`${name} no puede pasar a ver ${starWars7} 
			Tiene ${age} años y necesita tener ${pgStartWars7}`);
	}
}


canWatchStartWars7(nameSacha, ageSacha);
canWatchStartWars7(nameSanti, ageSanti, true);