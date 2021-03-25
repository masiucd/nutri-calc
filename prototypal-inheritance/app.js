function Person(name) {
  this.name = name;
  this.score = 0;
}

Person.prototype.age = 22;

const mike = new Person("Mike");
console.log(mike);
console.log(mike.age);

Person.prototype.incrementScore = function () {
  this.score += 1;
};

mike.incrementScore();
console.log(mike);
