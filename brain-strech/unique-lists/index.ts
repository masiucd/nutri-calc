// const { uniqBy, union } = require("lodash");
import { ld } from "../../package.ts";

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
const selectedTraveler2 = [104476299, 104476297];

const foo = products.filter(product => {
  const isEmpty = product.travellersIds.length === 0;
  if (isEmpty) return product;
  return product.travellersIds.some((x, i) => {
    // console.log(selectedTraveler[i]);
    return x === selectedTraveler[i];
  });
});

console.log(foo);

const unique = ld.uniqBy(products, (x: Record<string, any>) => x.name);

const removeDuplicates = (list: typeof products, key: string) => {
  const cache: Record<string, boolean> = {};
  const xs: Record<string, string | number>[] = [];
  list.forEach((item: Record<string, any>) => {
    if (!cache[item[key]]) {
      cache[item.name] = true;
      xs.push(item);
    }
  });
  return xs;
};

const listA = ["a", "b", "c", "d"];
const listB = ["a", "d"];

const found = listA.some(r => listB.includes(r));
const found2 = products.filter(x => x.travellersIds.some(r => selectedTraveler.includes(r)));
