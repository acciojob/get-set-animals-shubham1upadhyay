//complete this code
class Animal {
	constructor(species)
	{
		this._species = species;
	}
	setSpecies(species)
	{
		this._species = species;
	}
	getSpecies()
	{
		return this._species;
	}
	makeSound()
	{
		console.log("sound");
	}
}

class Dog extends Animal {
	bark()
	{
		console.log("woof");
	}
}

class Cat extends Animal {
	purr()
	{
		console.log("purr");
	}
}

let cat = new Cat("Wild cat");
cat.species;
cat.makeSound();
cat.purr();

let dog = new Dog("German");
dog.species;
dog.makeSound();
dog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
