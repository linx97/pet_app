function Model() {
	var pets = [];

	this.addPet = function(newPet) {
		pets.push(newPet);
		return newPet;	
	}

	this.getPetByName = function(name) {
		for(var pet of pets) {
			if (pet.name === name) {
				return pet;
			}
		}
		return null;
	}

	this.getAllPets = function() {
		return pets.slice();
	}

	this.startPetDecay = function() {	
			for (var i of pets) {
				i.hunger += 10;
				i.fun -=  15;
			}
	}

	var petPics = ["http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg", "http://www.cutestpaw.com/wp-content/uploads/2011/11/How-is-it-so-fluffy.jpg", "https://s-media-cache-ak0.pinimg.com/originals/29/fa/14/29fa1441f2a0446e9aa45cee74495a83.jpg", "https://s-media-cache-ak0.pinimg.com/564x/5e/4d/d6/5e4dd65bf6bbc9ceadec48d7e919c728.jpg", "https://s-media-cache-ak0.pinimg.com/236x/d9/04/e9/d904e914b1bb3e49d796a4b5c27f277f.jpg", "http://1.bp.blogspot.com/-MgStWunATts/UOQ8oCyLXUI/AAAAAAAAQCI/K0yXzsBD07E/s1600/brown-cute-dog-poodle-puppy-Favim.com-64262.jpg", "https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2015/12/06/6358502109494337791910635888_31-cute-puppies-that-you-want-to-hug-31.jpg", "http://www.cutenessoverflow.com/wp-content/uploads/2014/02/25-This-bulldog-bully-pup-is-chasing-butterflies..jpg", "http://www.astro.cornell.edu/~derg/style/3864733873_57e2aae81c_o.jpg", "https://s-media-cache-ak0.pinimg.com/564x/a1/04/d0/a104d09052429d354f930b7403af5bcc.jpg", "http://1funny.com/wp-content/uploads/2015/04/ultimate-cute-puppies-compilatio.jpg", "http://www.woofipedia.com/images/uploads/_600x400/puppy-test.jpg", "http://cdn.lookanimals.com/pictures/4.bp.blogspot.com/-qyliu6q15aM/TwxFZPZhQjI/AAAAAAAAUYU/wdKc53HQTng/s1600/Cute-Puppy-Wallpaper.jpg", "http://cdn.pcwallart.com/images/cute-basset-hound-puppies-wallpaper-3.jpg", "http://cutepuppyclub.com/wp-content/uploads/2015/05/cute-dogs-and-puppies-wallpaper-1.jpg", "http://www.doseoffunny.com/wp-content/uploads/2014/10/cute-puppies-tiny-1.jpg", "http://www.houstonpettalk.com/wp-content/uploads/2009/11/Cutest-puppy.jpg", "http://i0.wp.com/boredviral.com/wp-content/uploads/2015/09/Screen-Shot-2015-09-13-at-11.00.35-PM.png?fit=597%2C459", "http://static.boredpanda.com/blog/wp-content/org_uploads/2014/06/none3022__700.jpg", "https://s-media-cache-ak0.pinimg.com/236x/0f/dd/d5/0fddd59ad62422beb5bfb897a242a085.jpg", "https://www.dogspuppiesforsale.com/uploads/source/Category%20update/Dachshund/Buy%20or%20sell%20Dachshund%20puppies%203.jpg"];

	this.getPetPic = function() {
		var random = Math.floor(Math.random() * petPics.length);
		if (pets) {
			return petPics[random];
		} else {
			for (var pet of pets) {
			 	if (petPics[random] != pet.image) {
					return petPics[random];
				}
			}
		}
	}

}