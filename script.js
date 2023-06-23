class Animal{
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound() {
    console.log(`The ${this._species} makes a sound`);
}
}
class Cat extends Animal{
	purr(){
		console.log("purr");
	}
}
class Dog extends Animal{
	bark(){
		console.log("woof");
	}
}
let c = new Cat("black");
c.makeSound();
c.purr();
let d = new Dog("blair");
d.makeSound();
d.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
