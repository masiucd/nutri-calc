let footballTeam = {
  name: "Legia Warszawa",
  yearCreated: 1916,
  ultras: ["Żyleta", "Śpiewajmy razem"],
  present() {
    console.log(
      `Nazywam się ${this.name} i zostałem założony w ${this.yearCreated} roku.`
    );
  },
};

// the this keyword refers to the object it belongs to
footballTeam.present();

// What does this refers to?
function present() {
  console.log(
    `Nazywam się ${this.name} i zostałem założony w ${this.yearCreated} roku.`
  );
}

// by using the call() method, the context of the function can be changed, so the this keyword will refer to the object passed as an argument
present.call(footballTeam);

// By using .bind() method we can save the function withing a variable and then call it
let newFn = present.bind(footballTeam);
newFn();

function presentV2(city, stadium) {
  console.log(
    `Nazywam się ${this.name} i zostałem założony w ${this.yearCreated} roku. Mój stadion znajduje się w ${city} i nazywa się ${stadium}.`
  );
}

// The apply() method is similar to call(), but the difference is that apply() accepts an array of arguments
presentV2.apply(footballTeam, ["Warszawa", "Stadion Wojska Polskiego"]);

let person = {
  name: "John",
  pets: ["dog", "cat"],
  transformPets() {
    let transformed = this.pets.map(function (pet) {
      // the this keyword don't know what context to refer to
      return this.name + " has a " + pet + "!";
    });
    console.log(transformed);
  },
};

person = {
  name: "John",
  pets: ["dog", "cat"],
  transformPets() {
    let transformed = this.pets.map((pet) => {
      // by using arrow function the this keyword refers to the object it belongs to
      return this.name + " has a " + pet + "!";
    });
    console.log(transformed);
  },
};

person.transformPets();
