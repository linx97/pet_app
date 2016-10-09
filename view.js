function View(controller) {

	this.createPetHTML = function(pet) {
		var $playbutton = $("<button id=\"play\">Play!</button>");
		var $feedbutton = $("<button id=\"feed\">Feed</button>");
		
		$playbutton.click(function() {
			var amnt = $(".playamnt" + pet.name).val();
			controller.playWithPet(pet.name, amnt);
			this.showAllPets();
		}.bind(this));

		$feedbutton.click(function() {
			var amnt = $(".foodamnt" + pet.name).val();
			controller.feedPet(pet.name, amnt);
			this.showAllPets();
		}.bind(this));

		var $playinput = $("<input class=\"playamnt" + pet.name + "\" type=\"text\">");
		var $foodinput = $("<input class=\"foodamnt" + pet.name + "\" type=\"text\">");

		var $pet = $("<p id=" + pet.name + ">" + pet.name + " has a hunger level of " + pet.hunger + " and a fun level of " + pet.fun + "</p>");

		var $pic = $("<img src=\"" + pet.image + "\">");

		$pet.append($foodinput);
		$pet.append($feedbutton);
		$pet.append($playinput);
		$pet.append($playbutton);
		$pet.append($pic);

		return $pet;
	}; 


	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	}

	this.createPet = function() {
		var name = $('#petname').val();

		controller.addPet(name);
		this.showAllPets();
		$('#petname').val("name");
	}

	this.updateHTML = function() {
		controller.startPetDecay();
		this.showAllPets();
	}
}