



/*

Crear un método de prototipo que reciba una instancia de héroe 
y que este método le descuente la energía al héroe.

Si la energía del héroe llega a por debajo de cero, debe indicar que el héroe se murió. 


Crear un método de prototipo que reciba una instancia de Monstruo y 
que este método le descuente energía al monstruo.

Si la enería del mosntruo llega por debajo de cero debe indicar que el héroe mató con éxito al monstruo. 

A la clase de héroe, agregar la propiedad de experiencia, cada vez que el héroe mate a un monstruo debe aumentar su experiencia, si la experiencia que tiene el héroe es mayor que un múltiplo de 1000, 
el héroe debe subir de nivel y  multiplicar su ataque y salud por el nivel que tenga el héroe.





Extra: 
Método de combate 
ssssss
*/

// Crear una clase de Monstruo que tenga como params vida, poder de ataque y raza.
function Monster(hp,atk,race) {
	this.hp = hp;
	this.maxhp = hp;
	this.atk = atk;
	this.race = race;
}

// Crear una clase de Héroe que tenga como params salud, poder de ataque y raza.
function Hero(hp,atk,race) {
	this.hp = hp;
	this.atck = atk;
	this.race = race;
} 

// Crear una clase de posión que reciba como parámetro la cantidad de energía que recupera.
function Potion(hp) {
	this.hp = hp 
}

// Crear otro método de prototipo que reciba una instancia de la clase Posión, 
// y esta aumente la cantidad de salud del héroe.
Potion.prototype.toHero = function() {
	if (Hero.maxhp - Hero.hp > Potion.hp) {
		Hero.hp = Hero.maxhp
	}else{
		Hero.hp = Hero.hp + Potion.hp
	};
}

// A la clase de héroe, agregar la propiedad de experiencia, 
// cada vez que el héroe mate a un monstruo debe aumentar su experiencia, 
// si la experiencia que tiene el héroe es mayor que un múltiplo de 1000, 
// el héroe debe subir de nivel y  multiplicar su ataque y salud por el nivel que tenga el héroe.

Hero.prototype.level = function(){
	this.level = 1;
}