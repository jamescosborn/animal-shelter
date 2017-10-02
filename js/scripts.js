

function Shelter() {
  this.pets = [];
}

function Pet(data) {
  this.name = data.name;
  this.image = data.image;
  this.species = data.species;
  this.breed = data.breed;
  this.description = data.description;
  this.isAdopted = data.isAdopted;
}

Shelter.prototype.addPet = function(data) {
  var pet = new Pet(data);
  pet.id = this.pets.length;
  this.pets.push(pet);
}

// **** JQUERY **** //
$(document).ready(function() {
  var shelter = new Shelter();
  // Define Pets //
  shelter.addPet({
    name: "Fido",
    image: "img/fido.png",
    species: "Dog",
    breed: "Terrier",
    sex:  "Male",
    color: "White",
    description: "Fido has been with us for a few months. He is a rescue, and a very well behaved. He has all his shots, and is ready for a new home."
    age: 4,
    weight: 8.4,
  });
  shelter.addPet({
    name: "Sport",
    image: "img/sport.png",
    species: "Dog",
    breed: "Corgi",
    sex: "Male",
    color: "Black spots",
    description: "Sport is a rescue. He is afraid of loud noises, so please keep this in mind when cosnidered him for adoption. He needs a few shots, it's only 20 bitcoins."
    age: 7,
    weight: 13,
  });
  shelter.addPet({
    name: "Layla",
    image: "img/layla.png",
    species: "Cat",
    breed: "Short hair",
    sex: "Female",
    color: "Orange",
    description: "Layla is a good cat. She's a little bit older, but she's very well behaved. Layla is an indoor/outdoor cat."
    age: 15,
    weight: 5,
    isAdopted: true;
  });
  shelter.addPet({
    name: "Dr. Mario",
    image: "img/drmario.png",
    species: "Cat",
    breed: "Long hair",
    sex: "Male",
    color: "Red",
    description: "Dr. Mario is a cat, we're pretty sure... It might be something else. Adopt it and find out!"
    age: 10,
    weight: 8,
  });

  // Build HTML
  shelter.pets.forEach(function(pet) {

  }
});
