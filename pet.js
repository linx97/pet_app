function Pet(name) {
	this.name = name; 
	this.hunger = 0;
	this.fun = 100;
	this.image = "";

	this.feed = function(food) {
		console.log(food);
		food = parseFloat(food);
		console.log(food);
		this.hunger -= food;
		this.fun -= food / 2;
	}

	this.play = function(fun) {
		fun = parseFloat(fun);
		this.fun += fun;
		this.hunger += fun / 2;
	}

}