function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		p.image = this.getPetPic();
		if (model.getAllPets().length < 3) {
			model.addPet(p);
			return p;
		} else {
			alert("3 puppies is plenty!");
		}
		return null;
	}

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		if (p.fun >= 100) {
			alert(name + " doesn't want to play!");
		} else {
			p.play(amount);
			return p;
		}
	}

	this.feedPet = function(name, amount) {
		var p = model.getPetByName(name);
		if (p.hunger <= 0) {
			alert(name + " is not hungry!");
		} else {
			p.feed(amount);
			return p;
		}
	}

	this.getAllPets = function() {
		return model.getAllPets();
	}

	this.getPetPic = function() {
		return model.getPetPic();
	}

	this.startPetDecay = function() {
		model.startPetDecay();
	}

}

