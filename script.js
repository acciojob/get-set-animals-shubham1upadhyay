class Animal{
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		
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

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
