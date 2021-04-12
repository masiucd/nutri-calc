// const { uniqBy, union } = require("lodash");
const products = [
  { name: "Baggage", travellersIds: [104476297, 104476298] },
  { name: "Flexible Ticket", travellersIds: [104476297, 104476298] },
  {
    name: "Cancellation Protection within Europe",
    travellersIds: [104476298, 104476299, 104476297],
  },
  { name: "Baggage", travellersIds: [104476299] },
  { name: "Flexible Ticket", travellersIds: [104476299] },
];

const selectedTraveler = [104476299];

const xs = products
  .map((x, i, list) => {
    return x.name;
  })
  .filter((x, i, arr) => {
    // console.log(arr);
    return arr.indexOf(x) === i;
  });

// console.log(uniqBy(products, x => x.name  ));

// console.log(
//   products.filter(x => {
//     return x.travellersIds.includes(selectedTraveler[0]);
//   })
// );
// console.log(union(products, [{ name: "Flexible Ticket", travellersIds: [104476299] }]));

// console.log(products.filter(p => p.travellersIds.indexOf(selectedTraveler[0]) !== -1));

// const foo = products.filter(p => p.travellersIds.indexOf(selectedTraveler[0]) !== -1);

// console.log(foo);

// const unique = products.filter(
//   (item, index) => products.findIndex(obj => obj.name === item.name) === index
// );

// console.log(unique);

const removeDuplicates = (list: Record<string, any>[], key: string) => {
  const cache = {};
  const xs: Record<string, any[]>[] = [];
  list.forEach(item => {
    //@ts-ignore
    if (!cache[item[key]]) {
      //@ts-ignore
      cache[item.name] = true;
      xs.push(item);
    }
  });
  return xs;
};

// let x = removeDuplicates(products, "name");

// console.log(x);
