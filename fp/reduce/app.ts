const people = [
  { name: "Mike", age: 21 },
  { name: "Tina", age: 45 },
  { name: "Frank", age: 37 },
];

const reduceToOneMap = people.reduce((a, b) => ({ ...a, [b.name]: b.age }), {});
