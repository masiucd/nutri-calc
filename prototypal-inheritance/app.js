const a = { a: "fff", s: 21 };

const b = a;
const c = { ...a };

console.log(a === b);
console.log(a === c);

console.log(a.constructor);
console.log(a);
